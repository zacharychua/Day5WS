import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css']
})
export class ListCollectionComponent implements OnInit {

  @Input() newItem;
  @Input() expand;
  @Output() expandChange;

  private ngNavigatorShareService: NgNavigatorShareService;

  itemList;
  test="https://www.youtube.com/embed/JCjIrEQCzWM";

  constructor(ngNavigatorShareService: NgNavigatorShareService) {
    this.itemList=[];
    this.expandChange = new EventEmitter<number>();
    this.ngNavigatorShareService = ngNavigatorShareService;
   }

  ngOnInit() {

  }

  ngDoCheck(){
    if(this.newItem){
      if(!this.itemList.includes(this.newItem)){
        this.itemList.push(this.newItem);
      }
    }
  }

  onExpand(expanded: number){
    console.info(expanded);
    if(expanded) this.expandChange.emit(0);
  }


  share(){
    this.ngNavigatorShareService.share({
      title: 'My Awesome app',
      text: 'hey check out my Share button',
      url: 'https://developers.google.com/web'
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  
}
