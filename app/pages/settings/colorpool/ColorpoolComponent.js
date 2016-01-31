import {Component} from 'angular2/core';
import {ColorPoolService} from '../../services/ColorPoolService';

@Component({
    selector: 'colorpoollist',
    templateUrl: 'build/pages/settings/colorpool/colorpoolcomponent.html'
})
export class ColorPoolComponent {
    constructor(colorPoolService: ColorPoolService) {
        this.polls = colorPoolService.getData();
    }
}