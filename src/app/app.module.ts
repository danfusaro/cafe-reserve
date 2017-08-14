import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReservationTimerComponent } from './components/reservation-timer/reservation-timer.component';
import { TimedDisplayDirective } from './directives/timed-display.directive';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationViewComponent } from './components/reservation-view/reservation-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationTimerComponent,
    TimedDisplayDirective,
    ReservationFormComponent,
    ReservationViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
