import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() teste: any;
  @Output() numero = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.numero.emit(2);
    console.log(this.teste);
  }

}
