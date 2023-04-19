import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiChartsModule } from '@eui/components/externals/charts';

import { ChartWidgetComponent } from './chart-widget.component';

@NgModule({
    imports: [CommonModule, EuiChartsModule],
    declarations: [ChartWidgetComponent],
})
export class ChartWidgetModule {}
