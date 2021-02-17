import { Component } from '@angular/core';
import { OCCUPANCY_DATA } from '../data/sample-data';

@Component({
    selector: 'plotly-date',
    templateUrl: 'plotly-date.component.html',
})

export class PlotlyDateComponent {
    date:any[]=OCCUPANCY_DATA
    public graph = {
        data: [
            {
                x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 22:23:00', '2014-02-04 22:23:00'],
                y: [1, 3, 6, 15,9,12],
                type: 'scatter'
              }],
        layout:  {width: "100%", height: "150rem", title: 'Scatter plot'}
    };
    
}
