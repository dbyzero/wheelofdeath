import {Page} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/wheel/wheel.html'
})
export class Wheel implements/* OnInit*/ {
    constructor() {
        this.polls = [{
            label: 'Bear',
            color: '#F4FA58'
        }, {
            label: 'Wine',
            color: '#8A0808'
        }, {
            label: 'Water',
            color: '#CEECF5'
        }, {
            label: 'Orange juice',
            color: '#FFBF00'
        }, {
            label: 'Blueberry juice',
            color: '#013ADF',
        }];
        // draw(document.getElementById("wheelCanva"), settings);
    }

    // ngOnInit() {
        // this.heroes = this._service.getHeroes();
    // }

    draw(canvaId, polls) {
        var canvas = document.getElementById(canvaId);
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = Math.min(centerX, centerY);
        var ctx = canvas.getContext("2d");
        polls.forEach(function(poll, idx) {
            drawPart(ctx, poll.color || 'red', polls.length, idx, centerX, centerY, radius);
        })
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

var draw = function(canvaId, polls) {
    var canvas = document.getElementById(canvaId);
    var centerX = canvas.width / 2;
    var centerY = canvas.width / 2;
    var radius = Math.min(centerX, centerY);
    var ctx = canvas.getContext("2d");
    polls.forEach(function(poll, idx) {
        drawPart(ctx, poll.color || 'red', polls.length, idx, centerX, centerY, radius);
    })
}
