import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'plotly-graph',
    templateUrl: 'plotly-graph.component.html'
})

export class PlotlyGraphComponent {
    @ViewChild("Graph", { static: true })
private Graph: ElementRef; 
}
}