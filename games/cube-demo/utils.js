// deprecated. should use fetch api but it works
import { gl } from "./gl.js";

export function readFile(pathOfFileToReadFrom)
{
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var response = request.responseText;

    return response;
}

// export class Game {
//     constructor() {
//         this.should_stop = false;
//         this.startTime = 0;
//         this.deltaTime = 0;
//     }

//     setCallback(callback) {
//         this.callback = callback;
//     }

//     stop() {
//         this.should_stop = true;
//         // document.getElementById('glcanvas').style.display = 'none';
//     }

//     loop() {
//         if (gl === null) {
//             alert("WebGL or JavaScript are not supported on your browser. Please use a more modern browser or enable javascript.");
//             return;
//         }
    
//         gl.enable(gl.DEPTH_TEST); 
    
//         gl.clearColor(0.0, 0.0, 0.0, 1.0);
        
//         this.render(0);
//     }

//     render(time) {
//         gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//         time /= 1000; // convert to seconds
//         this.deltaTime = time - this.startTime;
//         this.startTime = time;

//         this.callback(this.deltaTime);

//         if (!this.should_stop) {
//             window.requestAnimationFrame(this.render);
//         }
//     }
// }


export function game_loop(callback) {
    if (gl === null) {
        alert("WebGL or JavaScript are not supported on your browser. Please use a more modern browser or enable javascript.");
        return;
    }

    let startTime = 0;
    let deltaTime = 0;

    gl.enable(gl.DEPTH_TEST); 

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    function render(time) {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        time /= 1000; // convert to seconds
        deltaTime = time - startTime;
        startTime = time;

        callback(deltaTime);

        window.requestAnimationFrame(render);
    };
    render(0);
}