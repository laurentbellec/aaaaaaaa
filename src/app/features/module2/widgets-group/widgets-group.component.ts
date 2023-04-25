import { Component, Inject, Input, OnInit, Injector, StaticProvider, ViewChildren, AfterViewInit } from '@angular/core';
import { ComponentPortal, ComponentType, CdkPortalOutletAttachedRef } from '@angular/cdk/portal';
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
    Resizable,
} from 'angular-gridster2';
import { WIDGET_CONTAINER_CONFIG } from 'src/app/token/widget.token';

@Component({
    selector: 'app-widgets-group',
    templateUrl: './widgets-group.component.html',
    styleUrls: ['./widgets-group.component.scss'],
})
export class WidgetsGroupComponent implements OnInit {
    @Input() group = null;
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
        // useTransformPositioning: true,
        mobileBreakpoint: 200,
        // useBodyForBreakpoint: false,
        minCols: 1,
        maxCols: 1,
        minRows: 1,
        maxRows: 1,
        // maxItemCols: 100,
        // minItemCols: 1,
        // maxItemRows: 100,
        // minItemRows: 1,
        // maxItemArea: 2500,
        // minItemArea: 1,
        // defaultItemCols: 1,
        // defaultItemRows: 1,
        fixedColWidth: 200,
        fixedRowHeight: 168,
        // keepFixedHeightInMobile: false,
        // keepFixedWidthInMobile: false,
        // scrollSensitivity: 10,
        // scrollSpeed: 20,
        // enableEmptyCellClick: false,
        // enableEmptyCellContextMenu: false,
        // enableEmptyCellDrop: false,
        // enableEmptyCellDrag: false,
        // enableOccupiedCellDrop: false,
        // emptyCellDragMaxCols: 50,
        // emptyCellDragMaxRows: 50,
        // ignoreMarginInRow: false,
        draggable: {
            enabled: true,
            // ignoreContent: true,
            // dragHandleClass: 'drag-handler',
        },
        resizable: {
            enabled: true,
        },
        // swap: true,
        // pushItems: true,
        // disablePushOnDrag: false,
        // disablePushOnResize: false,
        // pushDirections: { north: true, east: true, south: true, west: true },
        // pushResizeItems: false,
        // displayGrid: DisplayGrid.Always,
        // disableWindowResize: false,
        // disableWarnings: false,
        // scrollToNewItems: false,
    };

    items = [
        { cols: 1, rows: 1, y: 0, x: 0, color: 'green' },
        { cols: 1, rows: 1, y: 0, x: 1, color: 'yellow' },
        { cols: 1, rows: 1, y: 0, x: 2, color: 'blue' },
    ];

    componentPortals: ComponentPortal<any>[] = [];

    constructor(private injector: Injector) {}

    ngOnInit() {
        this.options = {
            ...this.options,
            minCols: this.group.cols,
            maxCols: this.group.cols,
            minRows: this.group.rows,
            maxRows: this.group.rows,
        };

        this.componentPortals = this.group.widgets.map((widget, i) => this.createComponentPortal(widget.component, {
                aaa: 'aaa',
                bbb: 'bbb',
                // color: this.color[i],
            }) as ComponentPortal<any>
        );
    }

    public portalAttached(attachedRef: CdkPortalOutletAttachedRef): void {
        console.log(attachedRef)
    }

    private createComponentPortal(component: ComponentType<any>, config: any): ComponentPortal<any> {
        const extendedConfig = { ...config };
        return new ComponentPortal(
            component,
            null,
            this.createInjector(extendedConfig)
        );
    }

    private createInjector(data: any): Injector {
        const injectorTokens: StaticProvider = [{ provide: WIDGET_CONTAINER_CONFIG, useValue: data },];
        return Injector.create({
            parent: this.injector,
            providers: injectorTokens,
        });
    }
}
