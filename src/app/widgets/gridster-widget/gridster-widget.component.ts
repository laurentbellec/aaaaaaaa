import { Component, Inject } from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  Draggable,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridType,
  PushDirections,
  Resizable
} from 'angular-gridster2';
import { WIDGET_CONTAINER_CONFIG } from 'src/app/token/widget.token';

@Component({
  selector: 'app-gridster-widget',
  templateUrl: './gridster-widget.component.html',
  styleUrls: ['./gridster-widget.component.scss']
})
export class GridsterWidgetComponent {
  options: GridsterConfig = {
    // disableScrollHorizontal: true,
    // disableScrollVertical: true,
    setGridSize: true,

    gridType: GridType.Fixed,
    compactType: CompactType.None,
    margin: 15,
    outerMargin: false,
    // outerMarginTop: null,
    // outerMarginRight: null,
    // outerMarginBottom: null,
    // outerMarginLeft: null,
    useTransformPositioning: true,
    mobileBreakpoint: 200,
    useBodyForBreakpoint: false,
    minCols: 3,
    maxCols: 3,
    minRows: 1,
    maxRows: 1,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    fixedColWidth: 200,
    fixedRowHeight: 200,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    enableOccupiedCellDrop: false,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    draggable: {
      enabled: true,
      // ignoreContent: true,
      // dragHandleClass: 'drag-handler',
    },
    resizable: {
      enabled: true
    },
    swap: true,
    pushItems: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: { north: true, east: true, south: true, west: true },
    pushResizeItems: false,
    displayGrid: DisplayGrid.Always,
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false
  };

  items = [
      { cols: 1, rows: 1, y: 0, x: 0, color: 'green' },
      { cols: 1, rows: 1, y: 0, x: 1, color: 'yellow' },
      { cols: 1, rows: 1, y: 0, x: 2, color: 'blue' },
  ]

  constructor(@Inject(WIDGET_CONTAINER_CONFIG) public config: any) {
  }
}
