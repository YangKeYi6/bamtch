let pwdloseFocus = function(event) {
    console.log("日志");
    event.preventDefault();
    let pwdfocus = document.querySelector(".focus");
    event.preventDefault();
    if (!pwdfocus.value) {
        var a =
            alert("密码不能为空！");
    }
}

let nicknameloseFocus = function(event) {
    console.log("日志");
    event.preventDefault();
    let pwdfocus = document.querySelector(".focus");
    event.preventDefault();
    if (!pwdfocus.value) {
        alert("昵称不能为空！");
    }
}

let phoneloseFocus = function(event) {
    event.preventDefault();
    let phonefocus = document.querySelector(".phone");
    if (!phonefocus.value) {
        alert("手机号码不能为空！")
    }
}

let nicknamefocus = function() {
    document.getElementById(nick).style.background = "yellow";
}