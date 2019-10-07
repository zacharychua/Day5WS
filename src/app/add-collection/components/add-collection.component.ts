import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Vinyl} from '../models';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  addToCollection(form: NgForm){
    let form_value = form.value;

    let collection: Vinyl = {
      album_name: form_value.album_name,
      artist: form_value.artist,
      rating: form_value.rating,
      album_img: form_value.album_img,
      album_video: form_value.album_video
    };
      console.info(collection);
    

  }
}
