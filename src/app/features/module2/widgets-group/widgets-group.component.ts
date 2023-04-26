import { Component, Input, OnInit, Injector, StaticProvider, ViewChildren, OnChanges, QueryList, SimpleChanges } from '@angular/core';
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
export class WidgetsGroupComponent implements OnInit, OnChanges {
    @Input() group = null;
    @Input() cols = 1;
    @Input() rows = 1;

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

    componentPortals: ComponentPortal<any>[] = [];
    @ViewChildren('gridsterItem') gridsterItems: QueryList<GridsterItemComponent>;

    constructor(private injector: Injector) {}

    ngOnChanges(c: SimpleChanges) {
        this.options = {
            ...this.options,
            minCols: this.cols,
            maxCols: this.cols,
            minRows: this.rows,
            maxRows: this.rows,
        };

        const outOfBoundsWidgets = this.getOutOfBoundsWidgets();
        outOfBoundsWidgets?.forEach((outOfBoundsWidget) => {
            outOfBoundsWidget.$item = this.options.api.getFirstPossiblePosition(outOfBoundsWidget.$item);
            outOfBoundsWidget.checkItemChanges(this.options.api.getFirstPossiblePosition(outOfBoundsWidget.$item), outOfBoundsWidget.$item);
        });
    }

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

    getOutOfBoundsWidgets() {
        // return this.group.widgets.filter((item) => item.appearance.x > this.cols - 1 || item.appearance.y > this.rows - 1);
        return this.gridsterItems?.toArray().filter((item) => item.item.x > this.cols - 1 || item.item.y > this.rows - 1);
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
