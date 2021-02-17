import { Component } from '@angular/core';

@Component({
    selector: 'plotly-pie',
    templateUrl: 'plotly-pie.component.html',
})

export class PlotlyPieComponent {
    public graph = {
        data: [
            {
                type: "pie",
                values: [2, 3, 4, 4],
                labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
                textinfo: "label+percent",
                textposition: "outside",
                automargin: true
              }],
        layout: {width: "100%", height: "170rem", title: 'Pie plot',margin: {"t": 40, "b": 0, "l": 0, "r": 0},
        showlegend: false}
    };
}
