import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  showSuccessMessage: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post<any>('http://localhost:3000/api/register', form.value)
        .subscribe(
          response => {
            console.log('Booking saved successfully:', response);
            this.showSuccessMessage = true;
            form.reset();
          },
          error => {
            console.error('Error saving booking:', error);
          }
        );
    }
  }
}
