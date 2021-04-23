import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface Character {
  name: string;
  image: string;
  description: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('animation', [
      state('', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(0px, -100px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animationLeft', [
      state('', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(100px, 0px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class DashboardComponent  {

  myList: Character[]
  confirmList: Character[] = [];
  animationState = 'ready';

  constructor(private httpClient: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.getMyList()
  }

  getMyList() {
    this.httpClient.get<Character[]>("assets/data.json")
    .subscribe(list =>{
     this.myList = list;
    })
 }

 goTo(page) {
  this.router.navigate(["/" + page]);
 }

 drop(event: CdkDragDrop<Character[]>) {
   if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   } else {

     transferArrayItem(event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex);
   }
 }


}
