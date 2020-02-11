let backlicai = function() {
    let ly = document.getElementById("leftyue");
    console.log(ly);
    let lf = document.getElementById("left-finance");
    console.log(lf);
    ly.removeAttribute("class");
    lf.className = "box-nav-show";
}