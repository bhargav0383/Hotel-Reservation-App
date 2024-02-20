import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formbuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.reservationForm = this.formbuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    }, { validators: this.dateRangeValidator })

    //for edit
    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let reservation = this.reservationService.getReservation(id)
      if(reservation){
        this.reservationForm.patchValue(reservation)
      }
    }
  }

  // Custom validator function to check if check-out date is after check-in date
  dateRangeValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
    const checkInDate = control.get('checkInDate')?.value;
    const checkOutDate = control.get('checkOutDate')?.value;
    
    return checkInDate && checkOutDate && checkOutDate < checkInDate ? { dateRange: true } : null;
  }
  

  onSubmit() {
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')
      if(id) {
        //update-edit
        this.reservationService.updateReservation(id, reservation)
      } else {
        //new
        this.reservationService.addReservation(reservation)
      }

      this.router.navigate(['/list'])
    }
  }
}
