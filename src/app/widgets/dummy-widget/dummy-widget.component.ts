import { Component, Inject, Input, OnInit } from '@angular/core';
import { WIDGET_CONTAINER_CONFIG } from '../../token/widget.token';

@Component({
    selector: 'app-dummy-widget',
    templateUrl: './dummy-widget.component.html',
    styleUrls: ['./dummy-widget.component.scss']
})
export class DummyWidgetComponent implements OnInit {
    @Input() color = '';

    myNumber = 0;

    constructor(@Inject(WIDGET_CONTAINER_CONFIG) public config: any) {}

    ngOnInit() {
        console.log(this.config)
    }

    incrementNumber() {
        this.myNumber = this.myNumber + 1;
    }

}
