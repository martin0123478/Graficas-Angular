import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes:[{}],
      yAxes:[{}]
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLabels: Label[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ]

  public barChartData: ChartDataSets[]= [
    {data:[65,59,80,81,56,55,40], label:'serie A'},
    {data:[28,48,40,19,86,27,90], label:'serie B'},
  ]
  chart: any;
  // public barChartData: ChartData = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };
  

  constructor() { }

  ngOnInit(): void {
  }
  
  

}


