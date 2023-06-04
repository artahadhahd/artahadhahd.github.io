const navbar = document.getElementById('navbar').children;
navbar.item(0).addEventListener('click', () => {
    window.location = "blog.html";
});
navbar.item(1).addEventListener('click', () => {
    window.location = "files.html"
});
const corner = document.getElementById('corner');
var local = 0;
var count = 0;
function recurse() {
    corner.addEventListener('click', () => {
        local++;
        count++;
        if (count % 3 == 0) {
            corner.innerText = "Aren't you tired now? You clicked me " +
            local +
            " times!";
        }
        if (count === 6) {
            corner.innerText = "Stop!";
        }
        if (count > 6) {
            count = 0;
            recurse();
        }
    });
}
recurse();