import { Component, OnInit, ComponentRef, Injector, StaticProvider } from '@angular/core';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
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

import { ChartWidgetComponent } from 'src/app/widgets/chart-widget/chart-widget.component';
import { TableWidgetComponent } from 'src/app/widgets/table-widget/table-widget.component';
import { DummyWidgetComponent } from 'src/app/widgets/dummy-widget/dummy-widget.component';
import { WIDGET_CONTAINER_CONFIG } from 'src/app/token/widget.token';
import { GridsterWidgetComponent } from 'src/app/widgets/gridster-widget/gridster-widget.component';

@Component({
    templateUrl: './module2.component.html'
})
export class Module2Component implements OnInit {
    components = [ChartWidgetComponent, TableWidgetComponent, DummyWidgetComponent, GridsterWidgetComponent]
    options = {
        gridType: GridType.Fixed,
        compactType: CompactType.None,
        margin: 15,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        useTransformPositioning: true,
        mobileBreakpoint: 640,
        useBodyForBreakpoint: false,
        minCols: 1,
        maxCols: 10,
        minRows: 1,
        maxRows: 10,
        maxItemCols: 10,
        minItemCols: 1,
        maxItemRows: 10,
        minItemRows: 1,
        maxItemArea: 1980,
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
          enabled: true
        },
        resizable: {
          enabled: true
        },
        swap: false,
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

    dashboard = [
        { cols: 2, rows: 1, y: 0, x: 0 },
        { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
        { cols: 1, rows: 1, y: 0, x: 4 },
        { cols: 3, rows: 1, y: 2, x: 0 },
        // { cols: 1, rows: 1, y: 1, x: 0 },
        // { cols: 1, rows: 1, y: 1, x: 0 },
        // {
        //   cols: ,
        //   rows: 2,
        //   y: 3,
        //   x: 5,
        //   minItemRows: 2,
        //   minItemCols: 2,
        //   label: 'Min rows & cols = 2'
        // },
        // {
        //   cols: 2,
        //   rows: 2,
        //   y: 2,
        //   x: 0,
        //   maxItemRows: 2,
        //   maxItemCols: 2,
        //   label: 'Max rows & cols = 2'
        // },
        // {
        //   cols: 2,
        //   rows: 1,
        //   y: 2,
        //   x: 2,
        //   dragEnabled: true,
        //   resizeEnabled: true,
        //   label: 'Drag&Resize Enabled'
        // },
        // {
        //   cols: 1,
        //   rows: 1,
        //   y: 2,
        //   x: 4,
        //   dragEnabled: false,
        //   resizeEnabled: false,
        //   label: 'Drag&Resize Disabled'
        // },
        // { cols: 1, rows: 1, y: 2, x: 6 }
    ];

    componentPortals: ComponentPortal<any>[] = [];
	componentRefs: ComponentRef<any>[] = [];
    color = ['yellow', 'green', 'red', 'blue'];

    constructor(private injector: Injector) {

    }

    ngOnInit() {
		this.componentPortals = this.components.map((component, i) => this.createComponentPortal(
                component,
                { aaa: 'aaa', bbb: 'bbb', color: this.color[i] }
            ) as ComponentPortal<any>);
	}

	onLayoutUpdated(e: any) {
		console.log(e)
	}

	portalAttached(e: any) {
		console.log(e)
		this.componentRefs.push(e);
	}

	discussWithInstance(index: number) {
		this.componentRefs[index].instance.incrementNumber();
	}

	private createComponentPortal(component: ComponentType<any>, config: any): ComponentPortal<any> {
        const extendedConfig = { ...config };
        return new ComponentPortal(component, null, this.createInjector(extendedConfig));
    }

	private createInjector(data: any): Injector {
        const injectorTokens: StaticProvider = [{ provide: WIDGET_CONTAINER_CONFIG, useValue: data }];
        return Injector.create({
            parent: this.injector,
            providers: injectorTokens,
        });
    }
}
