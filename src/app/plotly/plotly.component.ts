import { Component } from '@angular/core';

@Component({
    selector: 'plotly-example',
    templateUrl: 'plotly.component.html',
})

export class PlotlyExComponent {
    public graph = {
        data: [
            { x: [1, 2, 3,4,5,6,7,8,9,10], y: [1, 2, 4,8,16,32,64,128,52,78], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
            { x: [1, 2, 3,4,5,6,7,8,9,10], y: [1, 2, 4,8,16,32,64], type: 'bar' },
        ],
        layout: {width: "100%", height: "150rem", title: 'Scatter plot'}
    };
}
