import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiTableModule } from '@eui/components/eui-table';
import { EuiPaginatorModule } from '@eui/components/eui-paginator';

import { TableWidgetComponent } from './table-widget.component';

@NgModule({
  imports: [CommonModule, EuiTableModule, EuiPaginatorModule],
  declarations: [TableWidgetComponent],
})
export class TableWidgetModule {}
