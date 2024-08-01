
import { gl } from "./gl.js";
import { readFile, game_loop } from "./utils.js";
import { Object } from "./object.js"; // helper class written by me
import { vertices, indices } from "./data.js";


const vsSource = readFile('main.vertex');
const fsSource = readFile('main.frag');



class Square extends Object {
    onInit() {
        this.y = 1;
        document.addEventListener('keydown', (key) => {
            if (key.key == 'r') {
                if (this.y == 1) this.y = -1; else this.y = 1;
            }
            
            if (key.key == 'w') {
                if (this._render_mode == gl.TRIANGLES)
                     this._render_mode = gl.LINE_LOOP;
                else this._render_mode = gl.TRIANGLES;
            }
        });
    }

    update(deltaTime) {
        mat4.rotate(this.modelMat, this.modelMat, deltaTime, [0, this.y, -1]);
    }
}


const index = function() {
    if (window.innerWidth < 800) {
        alert("Warning: This page is meant for PCs, your screen appears to be small and you may not get the full experience.")
    }

    const file_content = readFile('index.js');
    document.getElementById('copy').addEventListener('click', () => 
        navigator.clipboard.writeText(file_content).then(
            () => alert("Copied to your clipboard"),
            (error) => alert(`Couldn't copy to clipboard: ${error}`))
    );
    document.getElementById('code').innerHTML = hljs.highlight(file_content, {language: 'javascript'}).value;
    document.addEventListener('keydown', (event) => {
        if (event.key == 'Escape') {
            document.getElementById('glcanvas').style.display = 'none';
        }
    });

    const sq = new Square(vsSource, fsSource, vertices, indices);

    game_loop((deltaTime) => sq.update_and_render(deltaTime));
}();