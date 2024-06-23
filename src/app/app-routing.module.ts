import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// @ts-ignore
const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'relation-history-dashboard',
    loadComponent: () => import('relation-history-app/RelationHistoryDashboard').then(c => c.DashboardComponent)
  },
  {
    path: 'payments-dashboard',
    loadComponent: () => import('payments-app/PaymentsDashboard').then(c => c.DashboardComponent)
  },
  {
    path: 'customer-management-dashboard',
    loadComponent: () => import('customer-management-app/CustomerManagementDashboard').then(c => c.DashboardComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
