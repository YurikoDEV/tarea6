import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P3PageRoutingModule } from './p3-routing.module';

import { P3Page } from './p3.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P3PageRoutingModule,
    HttpClientModule
  ],
  declarations: [P3Page]
})
export class P3PageModule {}
