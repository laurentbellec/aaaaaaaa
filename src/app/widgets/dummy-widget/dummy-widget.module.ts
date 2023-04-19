import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiChartsModule } from '@eui/components/externals/charts';

import { DummyWidgetComponent } from './dummy-widget.component';

@NgModule({
    imports: [CommonModule, EuiChartsModule],
    declarations: [DummyWidgetComponent],
})
export class DummyWidgetModule {}
