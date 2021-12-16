import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  datos: string[] = []
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [
    
    
  ];
  doughnutChartType: ChartType = 'doughnut';
  constructor(
    private graficasService:GraficasService
  ) { }

  ngOnInit(): void {
    this.graficasService.getData()
    .subscribe(data => {
      
      console.log(data)
      const labels = Object.keys(data)
      const values = Object.values(data)
      console.log(labels)
      this.doughnutChartLabels = labels
      this.doughnutChartData = values
    })
  }

}
