import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Vinyl} from '../models';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {

  @Output() addToCollectionList;
  //@Output() expandChange;

  //@Input() toggle;

  constructor() { 
    this.addToCollectionList = new EventEmitter<Vinyl>();
    //this.expandChange = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  addToCollection(form: NgForm){
    let form_value = form.value;

    let collection: Vinyl = {
      album_name: form_value.album_name,
      artist: form_value.artist,
      rating: form_value.rating,
      album_img: form_value.album_img,
      album_desc: form_value.album_desc
    };
      console.info(collection);

      this.addToCollectionList.emit(collection);
      form.resetForm();
  }
/*
  onExpandChange(expanded: boolean){
    console.info(expanded);
    if(expanded){
      this.expandChange.emit(expanded);
    }
  }
  */

}
