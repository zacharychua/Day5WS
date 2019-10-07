import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RequiredModule} from '../project_required.module';
import { ListCollectionComponent } from './components/list-collection.component';

@NgModule({
  declarations: [ListCollectionComponent],
  imports: [
    CommonModule,
    RequiredModule
  ],
  exports: [
    ListCollectionComponent
  ]
})
export class ListCollectionModule { }
