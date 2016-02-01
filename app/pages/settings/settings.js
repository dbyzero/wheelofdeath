import {Page} from 'ionic/ionic';
import {ColorPoolComponent} from './colorpool/ColorpoolComponent';

@Page({
    templateUrl: 'build/pages/settings/settings.html',
    directives: [ColorPoolComponent]
})
export class Settings {
    constructor() {}

    

    showColor() {
        console.log(JSON.stringify(this.polls));
    }
}