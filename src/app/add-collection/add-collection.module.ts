import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCollectionComponent } from './components/add-collection.component';

import { RequiredModule } from '../project_required.module';

@NgModule({
  declarations: [AddCollectionComponent],
  imports: [
    CommonModule,
    RequiredModule
  ],
  exports: [
    AddCollectionComponent
  ]
})
export class AddCollectionModule { }
