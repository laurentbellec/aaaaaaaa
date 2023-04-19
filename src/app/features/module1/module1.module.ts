import { NgModule } from '@angular/core';
import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { PortalModule } from '@angular/cdk/portal';

import { SharedModule } from '@shared/shared.module';
import { KtdGridModule } from '@katoid/angular-grid-layout';

@NgModule({
    imports: [
        SharedModule,
        Module1RoutingModule,
        KtdGridModule,
        PortalModule,
    ],
    declarations: [
        Module1Component,
        Page1Component,
        Page2Component,
    ],
})
export class Module {
}
