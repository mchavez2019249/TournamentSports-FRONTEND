import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };
  chartLabels = [['Equipo#1'], ['Equipo#2'], 'Equipo#3'];
  chartData = [300, 250, 100];
  chartColors = [{
    backgroundColor: ['#03A9F4', '#8BC34A', '#FFC107'],
    borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF']
  }];
  chartLegend = true;
  chartPlugins = [];
    constructor() { }

  ngOnInit(): void {
  }

}
