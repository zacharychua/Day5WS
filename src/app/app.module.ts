import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AddCollectionModule} from './add-collection/add-collection.module';
import {ListCollectionModule} from './list-collection/list-collection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AddCollectionModule,
    ListCollectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
