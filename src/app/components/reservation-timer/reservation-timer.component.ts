import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservation-timer',
  templateUrl: './reservation-timer.component.html',
  styleUrls: ['./reservation-timer.component.css']
})
export class ReservationTimerComponent implements OnInit, OnChanges {

  @Input()
  seconds: number;

  @Output()
  complete: EventEmitter<boolean> = new EventEmitter();

  private secondsRemaining: number;
  private interval: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (!!this.seconds) {
      // Start timer
      this.secondsRemaining = this.seconds;
      window.clearInterval(this.interval);
      this.interval = window.setInterval(() => this.decrement(), 1000);
    }
  }

  private decrement(): void {
    if (this.secondsRemaining > 0) {
      this.secondsRemaining -= 1;
    } else {
      this.secondsRemaining = 0;
      window.clearInterval(this.interval);
      this.complete.emit(true);
    }
  }

  private get timeRemaining(): string {
    const m = Math.floor(this.secondsRemaining / 60);
    const s = this.secondsRemaining % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
