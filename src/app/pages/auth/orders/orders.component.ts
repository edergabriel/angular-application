import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  date: Date = new Date();

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
    let ordersEdit = {
      username: "asdffds"
    }
    this.ordersFormGroup = new FormGroup({
      username: new FormControl(''),
      text: new FormControl(''),
      description: new FormControl(''),
      time: new FormControl(''),
      date: new FormControl(''),
      color: new FormControl(''),
      numbers: new FormControl(''),
    });

    this.ordersFormGroup.controls.username.setValue('aa')
  }

  checkValue(e) {
    console.log(e,  this.ordersFormGroup.controls.text.value)
  }

  submit() {
    console.log(this.ordersFormGroup);
  }

}
