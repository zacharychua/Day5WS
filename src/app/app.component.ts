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
  //toggle = true;

  addToCollection(item: Vinyl){
    this.newItem = <Vinyl>item;
  }

  /*
  expandChange(eventObj){
    console.info(eventObj);
    this.toggle != true;
  }*/
}
