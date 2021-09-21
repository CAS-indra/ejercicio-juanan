import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {
  public transaccionId = '';
  public transaccion = {id: '', name: '', description: '', kind: '', amount: 0, date: '', projectId: '',  ownerId: ''};

  constructor(private route: ActivatedRoute, private service: TransaccionesService) { }

  ngOnInit(): void {
    this.transaccionId = this.route.snapshot.params['id'];
    const transacciones = this.service.getTransacciones();
    this.transaccion = transacciones.find(p => p.id === this.transaccionId);
  }

}
