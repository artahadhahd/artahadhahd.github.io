import { gl } from "./gl.js";
import { initShaderProgram } from "./shader.js";
import { createBuffer, createEBO } from "./buffers.js";


const DEG_TO_RAD = Math.PI / 180;

const FOV = 45 * DEG_TO_RAD;
const RATIO = gl.canvas.clientWidth / gl.canvas.clientHeight;
const Z_NEAR = 0.1;
const Z_FAR = 100.0;

export class Object {
    constructor(vshader, fshader, vertices, indices = null, textures = null) {

        this._render_mode = gl.TRIANGLES;
        this.onInit();

        this._program = initShaderProgram(vshader, fshader);
        this._vertices_len = vertices.length;


        // set up the PVM matrices
        {
            this._uTransform = gl.getUniformLocation(this._program, 'uTransform');

            this._projMat = mat4.create();
            this._viewMat = mat4.create();
            // TODO: create a clear and easy API for manipulating model matrix
            this.modelMat = mat4.create();
            this._transformMat = mat4.create();

            mat4.perspective(this._projMat, FOV, RATIO, Z_NEAR, Z_FAR);

            
            mat4.lookAt(this._viewMat, vec3.fromValues(0, 0, 1), vec3.fromValues(0, 0, 1), vec3.fromValues(0, 1, 0));
            mat4.translate(
                this._viewMat, // destination matrix
                this._viewMat, // matrix to translate
                [-0.0, 0.0, -6.0]
            );
        }

        // create and bind VAO
        {
            this._vao = gl.createVertexArray();
            if (this._vao == null) {
                alert('failed to create vertex array object');
            }
            gl.bindVertexArray(this._vao);
        }
        
        // bind ebo (if exists)
        {
            this._indices_len = 0;
    
            if (indices != null) {
                const ebo = createEBO(gl, indices);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
                this._indices_len = indices.length;
            }
        }

        // create the position attribptr
        {
            const attribPointer = gl.getAttribLocation(this._program, "aPos");
            
            gl.bindBuffer(gl.ARRAY_BUFFER, createBuffer(gl, vertices)); // VBO
            gl.vertexAttribPointer(
                attribPointer,
                3,
                gl.FLOAT,
                false,
                0,
                0
            )
            gl.enableVertexAttribArray(attribPointer);
        }
    }

    update_and_render(deltaTime) {
        // at this point, the pvm matrices can be modified ...
        this.update(deltaTime);
        
        // ...  then we multiply it all together. we don't want many multiplications on the shader
        //      and this isn't really that expensive (assuming this LA library does its job well)
        mat4.mul(this._transformMat, this._projMat, this._viewMat);
        mat4.mul(this._transformMat, this._transformMat, this.modelMat);

        gl.useProgram(this._program);
        // and we 'bind' it
        gl.uniformMatrix4fv(
            this._uTransform,
            false,
            this._transformMat
        );


        gl.bindVertexArray(this._vao);

        // use EBO if it exists.
        if (this._indices_len != 0) {
            gl.drawElements(this._render_mode, this._indices_len, gl.UNSIGNED_SHORT, 0);
        } else {
            gl.drawArrays(this._render_mode, 0, this._vertices_len);
        }

    }
}
