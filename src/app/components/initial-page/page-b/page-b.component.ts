import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss']
})
export class PageBComponent implements OnInit {

  nome = "Testando";

  constructor() { }

  ngOnInit() {
  }

  showNumber(number) {
    console.log(number);
  }

}
