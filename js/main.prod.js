"use strict";

var element = document.querySelector("#canvas");
var ctx = element.getContext("2d");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
element.width = w;
element.height = h;
var position = Array(300).join(0).split(""); //objeto array con 300 elementos, se une a un join desde la posicion 0, hacer separaciones desde espacio ''

console.log();
var initMatrix = function initMatrix() {
    ctx.fillStyle = "rgba(0, 0, 30, 0.15 )";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#4caf50";
    ctx.font = "60pt";
    position.map(function (y, index) {
        var text = String.fromCharCode(1e3 + Math.random() * 30);
        var x = index * 15 + 15;
        canvas.getContext('2d').fillText(text, x, y);
        y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
    });
};
setInterval(initMatrix, 100);