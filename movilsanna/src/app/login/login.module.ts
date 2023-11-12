// login.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage-angular'; // Importa IonicStorageModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    IonicStorageModule.forRoot() // Agrega IonicStorageModule aquí
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
