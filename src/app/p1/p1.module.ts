import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P1PageRoutingModule } from './p1-routing.module';

import { P1Page } from './p1.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [P1Page]
})
export class P1PageModule {}
