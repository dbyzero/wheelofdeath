import {Component} from 'angular2/core';
import {ColorPoolService} from '../../services/ColorPoolService';

@Component({
    selector: 'colorpoollist',
    templateUrl: 'build/pages/settings/colorpool/colorpoolcomponent.html'
})
export class ColorPoolComponent implements onInit {
    constructor(colorPoolService: ColorPoolService) {
        this.polls = colorPoolService.getData();
    }

    addColor() {
    	this.polls.push({
    		'label': 'test',
    		'color': '#777777'
    	});
    }

    removeColor() {
    	this.polls.length -= 1;
    }
}