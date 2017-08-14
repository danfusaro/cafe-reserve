import { ReservationViewComponent } from './components/reservation-view/reservation-view.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {
    path: '',
    children: [{ path: 'reserve', component: ReservationViewComponent }]
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
