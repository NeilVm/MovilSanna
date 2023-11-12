import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { RegistrocPageRoutingModule } from './registroc-routing.module';

import { RegistrocPage } from './registroc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistrocPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistrocPage]
})
export class RegistrocPageModule {}
