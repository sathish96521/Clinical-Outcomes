import { Component, OnChanges, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { TimeInRange } from '../../models/time-in-range.model';

@Component({
  selector: 'app-time-in-range-chart',
  templateUrl: './time-in-range-chart.component.html',
  styleUrls: ['./time-in-range-chart.component.scss'],
})
export class TimeInRangeChartComponent implements OnChanges {
  @Input() data: TimeInRange[] = [];

  selectedDays: '30' | '60' | '90' = '30';

  // Sample data for different day selections
  chartDataSets: Record<string, number[]> = {
    '30': [5, 85, 10],
    '60': [10, 80, 10],
    '90': [15, 75, 10],
  };

  barChartLabels = ['Patients'];

  barChartType: ChartType = 'bar';

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Time in Range (%)',
        data: [],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage %',
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  ngOnChanges(): void {
    if (this.data?.length) {
      this.barChartData.labels = this.data.map((item) => item.label);
      this.barChartData.datasets[0].data = this.data.map((item) => item.value);
    }
  }

  onSliderChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDays = input.value as '30' | '60' | '90';
  }
}
