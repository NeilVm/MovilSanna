import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RegistropPageRoutingModule } from './registrop-routing.module';
import { DatePipe } from '@angular/common';

import { RegistropPage } from './registrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule, 
    RegistropPageRoutingModule
  ],
  providers: [
    DatePipe, 
  ],
  declarations: [RegistropPage]
})
export class RegistropPageModule {}
