import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS} from '@angular/forms';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  providers:[
    {provide: NG_VALUE_ACCESSOR, useExisting: ColorPickerComponent, multi:true }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor{
  @Input() colors: string[];
  selectedColor: string;
  
  private onChange:(value:string)=>void;
  
  selectColor(color:string){
    this.selectedColor = color;
    this.onChange(color);
  }

  writeValue(value:string){
    this.selectedColor = value;
  }
  
  registerOnChange(onChange:(value:string)=>void){
    this.onChange = onChange;
  }

  registerOnTouched(){

  }
}