import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  public desarrollador = 'Juan Ángel';
  public fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
