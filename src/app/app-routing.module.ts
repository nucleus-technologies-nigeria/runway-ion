import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsPageModule' },
  { path: 'returns', loadChildren: './returns/returns.module#ReturnsPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
