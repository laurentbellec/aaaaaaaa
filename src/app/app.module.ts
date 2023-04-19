import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppStarterService } from './app-starter.service';
import { ChartWidgetModule } from './widgets//chart-widget/chart-widget.module';
import { TableWidgetModule } from './widgets//table-widget/table-widget.module';
import { GridsterWidgetModule } from './widgets/gridster-widget/gridster-widget.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        AppRoutingModule,
        ChartWidgetModule,
        TableWidgetModule,
        GridsterWidgetModule,
    ],
    providers: [
        AppStarterService,
        {
            provide: APP_INITIALIZER,
            useFactory: (appStarterService) => () => new Promise<void>((resolve) => {
                    appStarterService.start().subscribe(() => resolve());
                }),
            deps: [AppStarterService],
            multi: true
        },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
