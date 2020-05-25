import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationFormHelper } from '../../components/helper/validation-form.helper';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent extends ValidationFormHelper implements OnInit {

  nome = "";

  constructor(private formBuilder: FormBuilder,
              private router: Router) { 
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }
  
  login() {
    if (this.form.valid) {
      this.router.navigate(['dashboard']);
    } else {
      this.checkValidationsForm(this.form);
    }
    
  }
  
  showNumber(number) {
    console.log(number);
  }

}
