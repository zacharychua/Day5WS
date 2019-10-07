import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
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
    console.info(form_value);
  }
}
