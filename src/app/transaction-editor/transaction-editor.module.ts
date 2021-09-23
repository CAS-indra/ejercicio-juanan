import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionEditorRoutingModule } from './transaction-editor-routing.module';
import { TransactionEditorComponent } from './transaction-editor.component';

@NgModule({
  declarations: [TransactionEditorComponent],
  imports: [CommonModule, TransactionEditorRoutingModule],
})
export class TransactionEditorModule {}
