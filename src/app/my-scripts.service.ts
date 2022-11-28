import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyScriptsService {

  constructor() { }

  Carga(arquivos:string[]){
    for(let arquivo of arquivos){
      let script = document.createElement("script");
      script.src = "../js/" + arquivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
