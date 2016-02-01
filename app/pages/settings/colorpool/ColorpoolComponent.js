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

    ngOnInit() {
    	this.polls.length = 4;
    }
}