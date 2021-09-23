import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionCreatorRoutingModule } from './transaction-creator-routing.module';
import { TransactionCreatorComponent } from './transaction-creator.component';

@NgModule({
  declarations: [TransactionCreatorComponent],
  imports: [CommonModule, TransactionCreatorRoutingModule, ReactiveFormsModule],
})
export class TransactionCreatorModule {}
