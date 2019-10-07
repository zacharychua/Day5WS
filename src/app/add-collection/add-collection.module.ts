import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCollectionComponent } from './components/add-collection.component';

import {MaterialModule} from '../materials.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddCollectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    AddCollectionComponent
  ]
})
export class AddCollectionModule { }
