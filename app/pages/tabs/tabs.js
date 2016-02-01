import {Page} from 'ionic/ionic';
import {Wheel} from '../wheel/wheel';
import {Settings} from '../settings/settings';
import {ColorPoolService} from '../services/ColorPoolService';

@Page({
    providers: [ColorPoolService],
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.wheel = Wheel;
        this.settings = Settings;
    }
}
