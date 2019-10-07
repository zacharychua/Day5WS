import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AddCollectionModule} from './add-collection/add-collection.module';
import {ListCollectionModule} from './list-collection/list-collection.module';
import {RequiredModule} from './project_required.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AddCollectionModule,
    ListCollectionModule,
    RequiredModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
