import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatSliderModule} from '@angular/material/slider';

const MATERIAL = [ MatButtonModule,MatIconModule,  MatInputModule, MatSliderModule];
@NgModule({
exports: MATERIAL
})
export class MaterialModule{ }