let financeinputamount = function() {
    /*event.preventDefault();*/
    let fai = document.getElementById("filosefocus");
    if (!fai.value) {
        alert("没钱可不能理财哦！");
    }
}

let finance_input_day = function() {
    let fid = document.getElementById("finance-input-day")
    console.log("日志")
    if (!fid.value) {
        alert("这边需要您说一下打算存多少天呢！亲！");
    }
}

let to_yue = function() {
    let finance = document.getElementById("finance");
    let yue = document.getElementById("yue");
    console.log(finance);
    console.log(yue);
    finance.removeAttribute("class");
    yue.className = "show";
    let lf = document.getElementById("left-finance");
    console.log(lf);
    lf.removeAttribute("class");
    document.getElementById("left-yue").className = "box-nav-show";
}