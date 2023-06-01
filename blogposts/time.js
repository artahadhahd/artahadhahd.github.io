function $() {
    document.getElementById('time').innerText = Date().split(' ').slice(0, 5).join(' ');
}
$();
setInterval($, 1000);