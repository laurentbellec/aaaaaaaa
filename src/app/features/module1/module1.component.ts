import { Component, OnInit, StaticProvider, Injector, ComponentRef } from '@angular/core';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ktdTrackById, KtdGridLayout } from '@katoid/angular-grid-layout';

import { ChartWidgetComponent } from 'src/app/widgets/chart-widget/chart-widget.component';
import { TableWidgetComponent } from 'src/app/widgets/table-widget/table-widget.component';
import { DummyWidgetComponent } from 'src/app/widgets/dummy-widget/dummy-widget.component';
import { WIDGET_CONTAINER_CONFIG } from 'src/app/token/widget.token';

@Component({
    templateUrl: './module1.component.html',
})
export class Module1Component implements OnInit {
    cols = 12;
	rowHeight = 100;
	layout: KtdGridLayout = [
		{ id: '0', x: 0, y: 0, w: 3, h: 3 },
		{ id: '1', x: 3, y: 0, w: 3, h: 3 },
		{ id: '2', x: 0, y: 3, w: 3, h: 3, minW: 1, minH: 4 },
		{ id: '3', x: 3, y: 3, w: 3, h: 3, minW: 1, maxW: 4, minH: 1, maxH: 4 },
	];
	color = ['yellow', 'green', 'red', 'blue'];
	components = [ChartWidgetComponent, TableWidgetComponent, DummyWidgetComponent, DummyWidgetComponent];
	trackById = ktdTrackById;

	componentPortals: ComponentPortal<any>[] = [];
	componentRefs: ComponentRef<any>[] = [];

	constructor(private injector: Injector){}

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
