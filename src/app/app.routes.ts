import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SettingsComponent } from './components/main-menu/settings/settings.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { CustomizeNationComponent } from './components/customization/customize-nation/customize-nation.component';
import { CustomizeLeaderComponent } from './components/customization/customize-leader/customize-leader.component';
import { StrategyLayerComponent } from './components/game-interface/strategy-layer/strategy-layer.component';

export const routes: Routes = [
    {
        path: 'mainMenu',
        component: MainMenuComponent,
        children: [
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    },
    {
        path: 'strategy',
        component: StrategyLayerComponent
    },
    {
        path: 'customization',
        component: CustomizationComponent,
        children: [
            {
                path: 'nation',
                component: CustomizeNationComponent
            },
            {
                path: 'leader',
                component: CustomizeLeaderComponent
            }
        ]
    }, 
    {
        path: '**',
        redirectTo: 'mainMenu'   
    }
];
