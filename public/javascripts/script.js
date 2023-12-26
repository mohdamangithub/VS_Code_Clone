var file_inp = document.querySelector("#file-inp");
var folder_inp = document.querySelector("#folder-inp");
var file_icon = document.querySelector("#file-icon");
var folder_icon = document.querySelector("#folder-icon");
var refresh_icon = document.querySelector("#refresh-icon");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var doc = document.querySelector("#doc");
var elem = document.querySelector("#file-details");
var arrow1 = document.querySelector("#arrow1");

var flag = 0;
arrow1.addEventListener("click", function () {
  if (flag === 0) {
    arrow1.style.rotate = "-90deg";
    elem.style.display = "none";
    flag = 1;
  } else if (flag === 1) {
    arrow1.style.rotate = "0deg";
    elem.style.display = "initial";
    flag = 0;
  }
});

var check = 0;
doc.addEventListener("click", function () {
  if (check === 0) {
    left.style.display = "none";
    right.style.width = "95%";
    doc.style.color = "#dadada";
    check = 1;
  } else if (check === 1) {
    left.style.display = "initial";
    right.style.width = "75%";
    doc.style.color = "#1f9cf0";
    check = 0;
  }
});

file_icon.addEventListener("click", function () {
  file_inp.style.display = "flex";
  folder_inp.style.display = "none";
});
folder_icon.addEventListener("click", function () {
  folder_inp.style.display = "flex";
  file_inp.style.display = "none";
});
refresh_icon.addEventListener("click", function () {
  file_inp.style.display = "none";
  folder_inp.style.display = "none";
});
var editrename = document.querySelector("#editrename");
var files = document.querySelector("#files");
var popup = document.querySelector("#popup");
var inp = document.querySelector("#inp");
var popup_child = document.querySelector("#popup-child form");
files.addEventListener("click", function (dets) {
  if (dets.target.id === "editrename") {
    var val = dets.srcElement.parentElement.parentElement.textContent.trim();
    inp.value = val;
    popup.style.display = "flex";
    popup_child.setAttribute(`action`, `/renamed/${val}`);
  } else {
    console.log("galat");
  }
});
