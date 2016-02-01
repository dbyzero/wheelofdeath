import {Page} from 'ionic/ionic';
import {ColorPoolService} from '../services/ColorPoolService';

@Page({
    templateUrl: 'build/pages/wheel/wheel.html'
})
export class Wheel implements AfterViewInit {

    constructor(colorPoolService: ColorPoolService) {
        this.colors = colorPoolService.getData();
    }

    ngAfterViewInit() {
        this.draw();
    }

    draw() {
        var canvas = document.getElementById("wheelCanva");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = Math.min(centerX, centerY);
        var ctx = canvas.getContext("2d");
        this.colors.forEach(function(color, idx) {
            drawPart(ctx, color.color || 'red', this.colors.length, idx, centerX, centerY, radius);
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