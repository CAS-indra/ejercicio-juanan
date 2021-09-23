import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionCreatorComponent } from './transaction-creator.component';

const routes: Routes = [{ path: '', component: TransactionCreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionCreatorRoutingModule {}
