import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionEditorComponent } from './transaction-editor.component';

const routes: Routes = [{ path: ':id', component: TransactionEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionEditorRoutingModule {}
