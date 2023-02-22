import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-managed-autonomous',
  templateUrl: './managed-autonomous.component.html',
  styleUrls: ['./managed-autonomous.component.scss']
})
export class ManagedAutonomousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart('myChart', {
      type: `line`,
      data: {
        labels: ['1 june', '8 june', '16 june', '31 june'],
        datasets: [
          {
            data: [0, 200, 50, 150, 100],
            label: 'Completed',
            backgroundColor: '#95d4ef',
            borderColor: 'rgb(14, 143, 223)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#ffff',
            pointHoverBackgroundColor: '#ffff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
            borderWidth: 2,
            tension: 0.7,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 30,
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              boxWidth: 6,
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });
  }
}
