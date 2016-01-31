import {Page} from 'ionic/ionic';
import {ColorPoolComponent} from './colorpool/ColorpoolComponent';
import {ColorPoolService} from '../services/ColorPoolService';

@Page({
    templateUrl: 'build/pages/settings/settings.html',
    providers: [ColorPoolService],
    directives: [ColorPoolComponent]
})
export class Settings {
    constructor() {}
}
