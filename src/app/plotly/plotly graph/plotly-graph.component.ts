import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector:'plotly-graph',
    template:'<div #myDiv></div>'
})

export class PlotlyGraphComponent implements AfterViewInit{

@ViewChild('myDiv') 
myDiv: ElementRef;

public data= [

]
ngAfterViewInit(){
    console.log(this.myDiv.nativeElement);
}


}