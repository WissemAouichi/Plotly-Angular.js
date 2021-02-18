import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'plotly-graph',
    templateUrl: 'plotly-graph.component.html'
})

export class PlotlyGraphComponent {
    @ViewChild("Graph", { static: true })
private Graph: ElementRef; 
this.data = {
    x: [ 1,2,3,4,5 ],
    y: [ 10,20,30,40,50 ], //keeping the length same
    name: 'type string, name of the trace',
    type: 'scattergl', //this very important to activate WebGL
    mode: 'line' //other properties can be found in the docs.
  }
}
