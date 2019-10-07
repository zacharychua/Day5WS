import { NgModule } from '@angular/core';

import { MaterialModule } from './materials.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const REQUIRED = [MaterialModule,FormsModule,  FlexLayoutModule, BrowserAnimationsModule, MatCardModule, MatExpansionModule,MatToolbarModule];

@NgModule({
    exports: REQUIRED
})
export class RequiredModule{ }

