import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public transacciones: any[] = [];
  public balanceTotal = this.balance();

  constructor(private service: TransaccionesService) {
    const transacciones$: Observable<any[]> = service.getTransacciones$();

    transacciones$.subscribe(
      res => (this.transacciones = res),
      err => console.error(err),
      () => console.log('THE END'),
    );
  }

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
