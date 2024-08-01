export function createBuffer(gl, data)
{
    const buffer = gl.createBuffer();

    if (!buffer) {
        alert("Couldn't create buffer");
        return null;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    return buffer;
}

export function createEBO(gl, data)
{
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.STATIC_DRAW);
    return buffer;
}
