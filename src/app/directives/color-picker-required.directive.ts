import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl} from '@angular/forms';

@Directive({
  selector: 'app-color-picker[required]',
  providers:[
    {provide: NG_VALIDATORS, useExisting:ColorPickerRequiredDirective,multi:true  }
  ]
})
export class ColorPickerRequiredDirective implements Validator{

validate(c:FormControl){
  console.log('validate', c);
  return null;
}
}