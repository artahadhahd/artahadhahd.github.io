function randint(max) {
    return Math.floor(Math.random() * max);
}

var montent = document.querySelector('p')

if (randint(5) === 1) {
    montent.innerText = '"i am coom" -Dasu_';
}

if (randint(10) == 5) {
    montent.innerText = '"the quick brown fox jumps over the lazy dog" -interrrp';
}

if (randint(20) == 1) {
    montent.innerText = '"Chmonkey" -Chmonkey'
}