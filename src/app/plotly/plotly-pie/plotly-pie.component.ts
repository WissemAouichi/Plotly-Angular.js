import { Component } from '@angular/core';

@Component({
    selector: 'plotly-pie',
    templateUrl: 'plotly-pie.component.html',
})

export class PlotlyPieComponent {
    public graph = {
        data: [
            {
                values: [19, 26, 55],
                labels: ['Residential', 'Non-Residential', 'Utility'],
                type: 'pie'
              }],
        layout: {width: "100%", height: "150rem", title: 'Pie plot'}
    };
}
