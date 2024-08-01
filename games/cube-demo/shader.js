import { gl } from "./gl.js";

export function initShaderProgram(vsSource, fsSource) {
  const vertexShader = loadShader(gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fsSource);
  
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram,
      )}`,
    );
    return null;
  }

  return shaderProgram;
}

function loadShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);


  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const shadername = type === gl.VERTEX_SHADER ? 'vertex' : 'fragment';
      alert(
          `An error occurred compiling the ${shadername} shader: ${gl.getShaderInfoLog(shader)}`,
      );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}