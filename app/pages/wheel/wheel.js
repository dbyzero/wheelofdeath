import {Page} from 'ionic/ionic';
import {ColorPoolService} from '../services/ColorPoolService';

@Page({
    templateUrl: 'build/pages/wheel/wheel.html'
})
export class Wheel implements AfterViewInit {

    constructor(colorPoolService: ColorPoolService) {
        this.colors = colorPoolService.getData();
        this.processGoing = null;
    }

    ngAfterViewInit() {
        this.draw();
    }


    go() {
        var canvas = document.getElementById("wheelCanva");
        canvas.style.transitionDuration = "0s";
        canvas.style.transform = "rotate(0deg)";
        canvas.style.webkitTransitionDuration = "0s";
        canvas.style.webkitTransform = "rotate(0deg)";
        if(this.processGoing) {
            clearTimeout(this.processGoing);
        }
        this.processGoing = setTimeout(function(){
            canvas.style.transitionDuration = "10s";
            canvas.style.transform = "rotate("+(3600 + parseInt(Math.random() * 360))+"deg)";
            canvas.style.webkitTransitionDuration = "10s";
            canvas.style.webkitTransform = "rotate("+(3600 + parseInt(Math.random() * 360))+"deg)";
        },0);
    }

    draw() {
        var canvas = document.getElementById("wheelCanva");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = Math.min(centerX, centerY);
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = "20px monospace";
        ctx.textAlign = "left";
        this.colors.forEach(function(color, idx) {
            drawPart(ctx, color.color || '#777777', this.colors.length, idx, centerX, centerY, radius);
        }.bind(this))
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, 0*Math.PI, 2*Math.PI);
        ctx.stroke();
        this.colors.forEach(function(color, idx) {
            drawLabels(ctx, color.label || idx, this.colors.length, idx, centerX, centerY, radius);
        }.bind(this))
    }
}

var drawPart = function(context, color, nbrPart, idx, centerX, centerY, radius) {
    var part = 2 * Math.PI / nbrPart;
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, idx * part, (idx + 1) * part);
    context.fill();
}
var drawLabels = function(context, text, nbrPart, idx, centerX, centerY, radius) {
    var part = 2 * Math.PI / nbrPart;
    context.save();
    context.translate(centerX,centerY);
    context.rotate(part * idx + part/2);
    context.fillStyle = "white";
    context.fillText(text, 20, 7);
    context.fillStyle = "black";
    context.strokeText(text, 20, 7);
    context.restore();
}