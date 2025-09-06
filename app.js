let user = [];
let game = [];
let start = false;
let level = 0;
let score = 0;
let color = ['red', 'yellow', 'blue', 'green'];
let h2 = document.querySelector('h2');
let comp = function (game, user) {
    for (let i = 0; i < user.length; i++) {
        if (game[i] != user[i]) {
            return false;
        }
    }
    return true;
}
let ans = function () {
    if (comp(game, user) == true) {
        if (user.length == game.length) {
            level++;
            score++;
            h2.innerText = `Level ${level}`;
            user = [];
            let btn = getRandom();
            let b = document.querySelector(`.${btn}`);
            blink(b);
            game.push(btn);
        }
    }
    else {
        let b = document.querySelector('body');
        b.classList.add('end');
        setTimeout(() => {
            b.classList.remove('end');
        }, 100);
        start = false;
        level = 0;
        h2.innerText = ` Game is Over your score is  ${score} for starting Game please press S`;

        score = 0;
        game = [];
        user = [];
    }
}
let blink = function (btn) {
    btn.classList.add('blink');
    setTimeout(() => {
        btn.classList.remove('blink');
    }, 100);
}
let getRandom = function () {
    let random = Math.floor(Math.random() * 4);
    let randomcolor = color[random];
    return randomcolor;
}
document.addEventListener("keypress", function (e) {
    if (start == false && e.code == 'KeyS') {
        console.log("Game is started");
        start = true;
        level = 1;
        h2.innerText = `Level ${level}`;

        let btn = getRandom();
        let b = document.querySelector(`.${btn}`);
        blink(b);
        game.push(btn);
        if (game.length != 0) {
            console.log("Game sequence :", game);
        }
    }
});
document.addEventListener("keydown", function (e) {
    if (start == true) {
        if (e.code === "KeyB") {
            let btn = document.querySelector('.blue');
            blink(btn);
            user.push('blue');
            ans();
        }

    }

});
document.addEventListener("keydown", function (e) {
    if (start == true) {
        if (e.code === "KeyR") {
            let btn = document.querySelector('.red');
            blink(btn);
            user.push('red');
            ans();
        }

    }

});
document.addEventListener("keydown", function (e) {
    if (start == true) {
        if (e.code === "KeyG") {
            let btn = document.querySelector('.green');
            blink(btn);
            user.push('green');
            ans();
        }

    }

});
document.addEventListener("keydown", function (e) {
    if (start == true) {
        if (e.code === "KeyY") {
            let btn = document.querySelector('.yellow');
            blink(btn);
            user.push('yellow');
            ans();
        }

    }

});

