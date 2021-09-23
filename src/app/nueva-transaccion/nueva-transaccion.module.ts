import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevaTransaccionRoutingModule } from './nueva-transaccion-routing.module';
import { NuevaTransaccionComponent } from './nueva-transaccion.component';


@NgModule({
  declarations: [
    NuevaTransaccionComponent
  ],
  imports: [
    CommonModule,
    NuevaTransaccionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NuevaTransaccionModule { }
