import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[
    // Aquí van los componentes, pipes, etc.
    ListadoComponent,
    HeroeComponent
  ],
  exports:[
    ListadoComponent
  ],
  imports: [
    // Aquí van los módulos
    CommonModule
  ]
})
export class HeroesModule {
}


