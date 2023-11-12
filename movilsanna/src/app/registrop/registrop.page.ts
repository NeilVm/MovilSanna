import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrop',
  templateUrl: 'registrop.page.html',
  styleUrls: ['registrop.page.scss']
})
export class RegistropPage {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.signupForm = this.formBuilder.group({
      typeDocumentId: ['', Validators.required],
      documentNumber: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      middleName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      insurancePlanId: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      comment: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  SignUp() {
    console.log('Botón presionado');
  
    if (this.signupForm.valid) {
      const formData = {
        userModel: {
          id: 0,
          username: this.signupForm.value.documentNumber,
          password: this.signupForm.value.password
        },
        patientModel: {
          id: 0,
          name: this.signupForm.value.name,
          lastname: this.signupForm.value.lastname,
          middleName: this.signupForm.value.middleName,
          gender: this.signupForm.value.gender,
          typeDocumentId: this.signupForm.value.typeDocumentId,
          typeDocument: {
            id: this.signupForm.value.typeDocumentId,
            name: 0
          },
          documentNumber: this.signupForm.value.documentNumber,
          dateOfBirth: this.signupForm.value.dateOfBirth,
          phoneNumber: this.signupForm.value.phoneNumber,
          insurancePlanId: this.signupForm.value.insurancePlanId,
          insurancePlan: {
            id: this.signupForm.value.insurancePlanId,
            name: 'BCRP'  
          },
          email: this.signupForm.value.email,
          comment: this.signupForm.value.comment,
          userId: 0,
          user: {
            id: 0,
            username: this.signupForm.value.documentNumber,  
            password: this.signupForm.value.password  
          }
        }
      };
  
      console.log('Formulario válido:', this.signupForm.valid);
  
      this.http.post('https://ggwv2su9f5.execute-api.us-west-1.amazonaws.com/Prod/Sanna/registro', formData)
        .subscribe(
          (response) => {
            // Maneja la respuesta de la API aquí
            console.log('Registro exitoso', response);
          },
          (error) => {
            // Maneja los errores de la API aquí
            console.error('Error en el registro', error);
          }
        );
    }
  }
}  