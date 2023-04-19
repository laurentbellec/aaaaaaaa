import { NgModule } from '@angular/core';
import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import { GridsterModule } from 'angular-gridster2';
import { PortalModule } from '@angular/cdk/portal';

import { SharedModule } from '@shared/shared.module';
import { WidgetsGroupComponent } from './widgets-group/widgets-group.component';

@NgModule({
    imports: [
        SharedModule,
        Module2RoutingModule,
        GridsterModule,
        PortalModule,
    ],
    declarations: [
        Module2Component,
        WidgetsGroupComponent,
    ],
})
export class Module {
}
