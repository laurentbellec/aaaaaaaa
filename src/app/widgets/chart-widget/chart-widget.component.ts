import { Component } from '@angular/core';
import { ApexChart } from '@eui/components/externals/charts';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent {
  chartOptions1: { chart: ApexChart; [key: string]: any } = {
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21],
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32],
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20],
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4],
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10],
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff'],
    },
    title: {
        text: 'Fiction Books Sales',
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
            formatter: (val: any) => val + 'K',
        },
    },
    yaxis: {
        title: {
            text: undefined,
        },
    },
    tooltip: {
        y: {
            formatter: (val: any) => val + 'K',
        },
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
    },
};
}
