import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyExComponent } from './plotly/plotly.component';
import { PlotlyPieComponent } from './plotly/plotly-pie/plotly-pie.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyExComponent,
    PlotlyPieComponent
  ],
  imports: [
    BrowserModule,PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }