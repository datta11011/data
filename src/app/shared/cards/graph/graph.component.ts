import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';

import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  trace9: any;
  traace: any;

  // constructor() { }

  ngOnInit(): void {
  }

  title = 'dynamic-plots';
  graph1 = {
    data: [
      { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
    ],
    layout: {title: 'Bar Plot', 
    width: 700,
    height: 500}
  };
}
