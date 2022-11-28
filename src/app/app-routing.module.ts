import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SliderComponent } from './Home/slider/slider.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const routes: Routes = [
  { path: 'Slider', component: SliderComponent },
  { path: 'Sobre', component: SobreComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'Cardapio', component: CardapioComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
