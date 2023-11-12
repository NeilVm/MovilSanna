import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private http: HttpClient,
    private storage: Storage,
    private router: Router
  ) {
    this.formularioLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.storage = await this.storage.create();
  }

  async ingresar() {
    try {
      if (this.formularioLogin.invalid) {
        const alert = await this.alertController.create({
          header: 'Campos inválidos',
          message: 'Por favor, complete los campos correctamente.',
          buttons: ['Aceptar'],
        });
        await alert.present();
        return;
      }

      const formData = this.formularioLogin.value;

      const responseText = await this.http
        .post(
          'https://ggwv2su9f5.execute-api.us-west-1.amazonaws.com/Prod/Sanna/login',
          formData,
          { responseType: 'text' }
        )
        .toPromise();

      if (responseText === 'Inicio de sesión exitoso') {
        const formData = this.formularioLogin.value;
        console.log('Datos a almacenar:', formData);
        this.storage.set('credentials', formData);

        this.router.navigate(['/inicio'], {
          state: {
            credentials: formData
          }
        });
        console.log('Datos almacenados:', formData);
        console.log('Ingresado');
      } else {
        
        const alert = await this.alertController.create({
          header: 'Error de autenticación',
          message: 'Credenciales incorrectas u otro error.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } catch (error) {
      console.error('Error al ingresar:', error);

      const alert = await this.alertController.create({
        header: 'Error al ingresar',
        message: 'Ha ocurrido un error al intentar ingresar. Por favor, intenta nuevamente más tarde.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
}
