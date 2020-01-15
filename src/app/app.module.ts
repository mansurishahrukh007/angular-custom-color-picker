import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorPickerRequiredDirective } from './directives/color-picker-required.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ColorPickerComponent, ColorPickerRequiredDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
