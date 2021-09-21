import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public transacciones = this.service.getTransacciones();

  constructor(private service: TransaccionesService) { }

  public balance(): number {
    let total = 0;

    for(let transaccion of this.transacciones){
      if(transaccion.kind == 'income'){
        total += transaccion.amount;
      } else {
        total -= transaccion.amount;
      }
    }

    return total;
  }

  ngOnInit(): void {
  }

}
