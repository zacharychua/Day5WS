import { NgModule } from '@angular/core';

import { MaterialModule } from './materials.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const REQUIRED = [MaterialModule,FormsModule,  FlexLayoutModule, BrowserAnimationsModule, MatCardModule, MatExpansionModule];

@NgModule({
    exports: REQUIRED
})
export class RequiredModule{ }

