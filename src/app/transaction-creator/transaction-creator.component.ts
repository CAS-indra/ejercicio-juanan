import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaction-creator',
  templateUrl: './transaction-creator.component.html',
  styleUrls: ['./transaction-creator.component.scss'],
})
export class TransactionCreatorComponent implements OnInit {
  public formGroup: FormGroup;
  public message = '';

  constructor(fb: FormBuilder, private service: TransaccionesService) {
    this.formGroup = fb.group({
      name: [
        'Apagar un volcán',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
      ],
      budget: new FormControl(10, [
        Validators.required,
        Validators.min(10),
        Validators.max(1000000),
      ]),
      startDate: new Date(),
    });
  }

  ngOnInit(): void {
  }

  public submitProject(): void {
    console.log('Enviando...');
    console.log(this.formGroup.value);
    // To Do: llamar al servicio y hacer el post
    this.service.postTransacciones$(this.formGroup.value).subscribe({
      error: err => (this.message = err.message),
    });
  }
}
