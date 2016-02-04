import {Page} from 'ionic/ionic';
import {ColorPoolService} from '../services/ColorPoolService';

@Page({
    templateUrl: 'build/pages/settings/settings.html',
})
export class Settings {
    constructor(colorPoolService: ColorPoolService) {
        this.polls = colorPoolService.getData();
    }

    addColor() {
        var R = parseInt(255 * Math.random()).toString(16);
        var G = parseInt(255 * Math.random()).toString(16);
        var B = parseInt(255 * Math.random()).toString(16);
        if(R.length === 1) {
            R = '0' + R;
        }
        if(G.length === 1) {
            G = '0' + G;
        }
        if(B.length === 1) {
            B = '0' + B;
        }
        this.polls.push({
            'label': 'Player ' + (this.polls.length + 1),
            'color': '#' + R + G + B;
        });
        console.log(this.polls);
    }

    removeColor() {
        this.polls.length -= 1;
    }
}