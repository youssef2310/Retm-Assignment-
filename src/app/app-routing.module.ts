import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomethingWrongComponent } from './pages/home/something-wrong/something-wrong.component';

const route: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'error',
    component: SomethingWrongComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
