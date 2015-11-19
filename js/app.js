/*
    Script for index.html
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var mouseIsDown = false;
    var colorInp = document.querySelector('#line-color-inp');

    colorInp.addEventListener('change', function() {
        ctx.strokeStyle = colorInp.value;
    });

    canvas.addEventListener('mousedown', function(evt) {
        mouseIsDown = true;
        ctx.beginPath();
        ctx.moveTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', function(evt) {
        if (mouseIsDown) {
            ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function(evt) {
        ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
        ctx.stroke();
        mouseIsDown = false;
    });
});