import { RouterModule, Routes } from '@angular/router';
import { Inventory } from './pages/inventory/inventory';
import { Sales } from './pages/sales/sales';
import { Purchase } from './pages/purchase/purchase';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{ path: 'inventory', component: Inventory },
  { path: 'sales', component: Sales },
  { path: 'purchase', component: Purchase },
  { path: '', redirectTo: '/inventory', pathMatch: 'full' },
  { path: '**', redirectTo: '/inventory' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
