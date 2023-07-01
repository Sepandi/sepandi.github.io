function openPage(pageName,elmnt,color) {
    var i, tabsContent, tabsLinks , pagesContent;
    tabsContent = document.getElementsByClassName("tabs");
    pagesContent = document.getElementsByClassName("content")
    for (i = 0; i < tabsContent.length; i++) {
        tabsContent[i].style.display = "none"
        pagesContent[i].style.display = "none"
    }
    tabsLinks = document.getElementsByClassName("tabsLink");
    for (i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].style.backgroundColor = ""
    }
    document.getElementById(pageName).style.display = "block"
    document.getElementById(pageName+"Page").style.display = "block"
    elmnt.style.backgroundColor = color

}

var tabsLinks = document.getElementsByClassName("tabsLink")
for (var i = 0; i < tabsLinks.length; i++) {
    tabsLinks[i].style.width = `${100/tabsLinks.length}%`
}

document.getElementById("defaultOpen").click();

function on(project) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("pic1").src = `img/${project}/1.png`
    document.getElementById("pic2").src = `img/${project}/2.png`
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("pic1").src = ""
    document.getElementById("pic2").src = ""
}