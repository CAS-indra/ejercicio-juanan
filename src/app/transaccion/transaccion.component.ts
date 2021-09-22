import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {
  public transaccionId = '';
  public transaccion$: Observable<any>;

  constructor(private route: ActivatedRoute, private service: TransaccionesService) {
    this.transaccionId = this.route.snapshot.params['id'];
    this.transaccion$ = this.service.getTransaccionesById$(this.transaccionId).pipe();
  }

  ngOnInit(): void {
  }
}
