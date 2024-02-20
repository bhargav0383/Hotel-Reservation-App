# Hotel reservation App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

Made using Data-binding, Local Storage, Services, Forms and routing.

This website allows users to effortlessly create new bookings, display the previous bookings neatly, can edit bookings and conveniently delete any unwanted bookings. 



## Website view

VIEW 1: Booking a new reservation.

The form has validation checkings using VAlidators and ValidatorFn, like input should not be empty, email input must be of input type and mainly check-out date has to be after the check-in date.

![Screenshot 2024-02-20 233018](https://github.com/bhargav0383/Hotel-Reservation-App/assets/102506024/6c0a5554-9213-4b56-80ae-45ca666f7b8e)

VIEW 2: Viewing Reservation List.

We have displayed all the previous reservation stored in local storage using  CRUD services. We have actions buttons to edit or delete a particular reservation. 

![Screenshot 2024-02-20 233039](https://github.com/bhargav0383/Hotel-Reservation-App/assets/102506024/33159100-7566-4eb9-8351-2e6f6095b825)

VIEW 3: Edit booking details.

On clicking edit it will take to booking page but, using the id of booking we will show the details already and can be editable. After editing we can see the updated details in VIEW 2.

![Screenshot 2024-02-20 233101](https://github.com/bhargav0383/Hotel-Reservation-App/assets/102506024/576dd6cd-3263-4ece-84a6-72ff1f258b23)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
