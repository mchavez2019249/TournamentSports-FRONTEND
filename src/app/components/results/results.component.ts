import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public doughnutChartLabels: string[] = [this.dateForamt(new Date()), 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  chartOptions = {
    responsive: true
  };

  dateForamt(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()}\n ${date.getHours()}:${date.getMinutes()} `;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
