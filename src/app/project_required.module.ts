import {NgModule} from '@angular/core';

import { MaterialModule } from './materials.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const REQUIRED = [MaterialModule,FormsModule,  FlexLayoutModule, BrowserAnimationsModule];

@NgModule({
    exports: REQUIRED
})
export class RequiredModule{ }

