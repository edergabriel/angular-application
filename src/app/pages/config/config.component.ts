import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationFormHelper } from '../../components/helper/validation-form.helper';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends ValidationFormHelper implements OnInit {

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

}
