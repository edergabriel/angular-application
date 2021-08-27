import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  formBuilder: any;

  constructor() { }

  selectedCar: number;
  ordersFormGroup: FormGroup;
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  ngOnInit() {
    this.ordersFormGroup = new FormGroup({
      username: new FormControl(''),
    });
  }

}
