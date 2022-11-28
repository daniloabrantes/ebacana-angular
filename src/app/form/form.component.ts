import { Component } from '@angular/core';
import { MyScriptsService } from '../my-scripts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private _MyScripts:MyScriptsService){
    _MyScripts.Carga(["/cep"]);
  }
}
