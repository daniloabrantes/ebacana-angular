import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyScriptsService } from "./my-scripts.service";


import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { SliderComponent } from './Home/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Home/footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ContatoComponent } from './contato/contato.component';
import { ModalComponent } from './modal/modal.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SobreComponent,
    CardapioComponent,
    ContatoComponent,
    ModalComponent,
    CartComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    MyScriptsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
