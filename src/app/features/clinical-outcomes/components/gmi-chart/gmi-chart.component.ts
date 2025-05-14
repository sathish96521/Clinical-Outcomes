import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { GMI } from '../../models/gmi.model';

@Component({
  selector: 'app-gmi-chart',
  templateUrl: './gmi-chart.component.html',
  styleUrls: ['./gmi-chart.component.scss'],
})
export class GmiChartComponent implements OnChanges {
  @Input() data: GMI | null = null;

  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Below Target', 'In Target', 'Above Target'],
    datasets: [
      {
        data: [],
        backgroundColor: ['#f44336', '#4caf50', '#ff9800'],
      },
    ],
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  ngOnChanges(): void {
    if (this.data) {
      // console.log('this.data', this.data);
      this.pieChartData.datasets[0].data = [
        this.data.below,
        this.data.target,
        this.data.above,
      ];
    }
  }
}
