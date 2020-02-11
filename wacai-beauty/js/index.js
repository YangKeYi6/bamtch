let navLiList = document.getElementById("leftbox").children[0].children;
let rightLiList = document.getElementById("rightbox").children[0].children;
console.log(rightLiList);


for (let i = 0; i < navLiList.length; i++) {
    navLiList[i].onclick = function() {
        navLiList[i].setAttribute("index", i);
        let index = navLiList[i].getAttribute("index");
        console.log(index)
        for (let j = 0; j < navLiList.length; j++) {
            navLiList[j].removeAttribute("class");
        }
        this.className = "box-nav-show";
        for (let k = 0; k < rightLiList.length; k++) {
            rightLiList[k].removeAttribute("class");
        }
        rightLiList[index].className = "show";
    }

}