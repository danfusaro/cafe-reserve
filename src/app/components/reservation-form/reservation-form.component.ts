import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from './reservation';
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup;

  @Output()
  submitted: EventEmitter<Reservation> = new EventEmitter(null);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reservationForm = this.fb.group({
      first: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      last: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      address1: ['', Validators.required],
      address2: '',
      city: ['', Validators.required],
      state: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      phone: ['', Validators.compose([
        Validators.pattern('\d{3}[\-]\d{3}[\-]\d{4}'),
        Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  submit(): void {
    const raw = this.reservationForm.getRawValue();
    const typed = raw as Reservation;
    console.log('Submitted', raw, typed);
    this.submitted.emit(typed);
  }

  get first() { return this.reservationForm.get('first'); }
  get last() { return this.reservationForm.get('last'); }
  get address1() { return this.reservationForm.get('address1'); }
  get city() { return this.reservationForm.get('city'); }
  get state() { return this.reservationForm.get('state'); }
  get phone() { return this.reservationForm.get('phone'); }
  get email() { return this.reservationForm.get('email'); }
}
