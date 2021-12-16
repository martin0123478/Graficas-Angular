import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [
    // 'Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  @Input() barChartData: ChartDataSets[] = [
    // { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' },
    // { data: [60, 70, 10, 80, 56, 23], label: 'Best Fruits' }
  ];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar'
    }
  }
  
}
