import { Component, Output} from '@angular/core';
import { Vinyl } from './add-collection/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() onExpandChange;
  title = 'SongAlbumApp';
  newItem: Vinyl;
  toggle = 1;
  expand_add_collection;
  expand_list_collection;

  addToCollection(item: Vinyl){
    this.newItem = <Vinyl>item;
  }

  toggleChange(eventObj){
    console.info(eventObj);
    this.toggle = eventObj;
    if(this.toggle){
      this.expand_add_collection = true;
      this.expand_list_collection = false; 
    }
    else{
      this.expand_list_collection = true;
      this.expand_add_collection = false;
    }
    console.info("From App Comp, toggle:" + this.toggle);
  }
}
