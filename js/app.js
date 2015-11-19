/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.getElementById('drawing-canvas');
    var ctx = canvas.getContext('2d');
    var input = document.getElementById('line-color-inp');
    var undoBtn = document.getElementById('undo-btn');
    var mouseDown = false;

    canvas.addEventListener('mousedown', function(evt) {
        ctx.beginPath();
        ctx.moveTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
        mouseDown = true;
    });

    canvas.addEventListener('mousemove', function(evt) {
        if (mouseDown === true) {
            ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function(evt) {
        ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
        ctx.stroke();
        mouseDown = false;

        saveState();
    });

    var state;
    function saveState() {
        state = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(state);
    }

    input.addEventListener('change', function(evt) {
        ctx.strokeStyle = input.value;
        ctx.save();
    });

    function undo() {
        ctx.drawImage(state, 0, 0);
        console.log('undone');
    }

    undoBtn.addEventListener('click', undo);



}); //DOMContentLoaded
