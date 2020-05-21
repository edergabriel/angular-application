import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  nome = "Testando";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  login() {
    this.router.navigate(['dashboard']);
  }
  
  showNumber(number) {
    console.log(number);
  }

}
