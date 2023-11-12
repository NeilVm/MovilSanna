import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registroc',
  templateUrl: './registroc.page.html',
  styleUrls: ['./registroc.page.scss'],
})
export class RegistrocPage implements OnInit {
  formularioc: FormGroup;
    
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.formularioc = this.formBuilder.group({
      agreedTime: ["08:00", Validators.required],
      agreedDate: [{value: new Date().toISOString(), disabled: true}, Validators.required],
      appointment_group_id: [1],
      appointment_status_id: [1],
      doctor: [1],
      name: ["Juan"],
      lastname: ["Rodas"],
      middleName: ["Guzman"],
      gender: ["M"],
      typeDocumentId: [1],
      documentNumber: ["70200100"],
      phoneNumber: ["914020123"],
      specialityId: [1],
      specialityName: ["Cardiologia"],
      emailDoctor: ["juan_rodas@sanna.com"],
      userIdDoc: [1],
      passwordDoc: ["12345678"],
      patientId: [30],
      namep: ['', Validators.required],
      lastnamep: ['', Validators.required],
      middleNamep: ['', Validators.required],
      genderp: ['', Validators.required],
      documentNumberp: ['', Validators.required],
      phoneNumberp: ['', Validators.required],
      insurancePlanId: [1],
      insurancename: ["BCRP"],
      email: ['', Validators.required],
      especialidad: [1],
      especialidadname: ["Cardiologia"],
      centroMe: ["SANNA Clínica EL GOLF"],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  registrarc() {
    console.log('Botón presionado');
    const agreedTime = new Date(`1970-01-01T${this.formularioc.value.agreedTime}Z`);
    const formattedAgreedTime = agreedTime.toISOString().split('T')[1];
  
    // Construir el objeto según la estructura deseada
    
    if (this.formularioc.valid) {
      const dataToSend = {
      requestmodel: {
      id: 0,
      agreedTime: "12:15:00",
      agreedDate: "2023-11-12T18:13:29.673Z",
      appointment_group_id: this.formularioc.value.appointment_group_id,
      appointment_status_id: this.formularioc.value.appointment_status_id,
      doctorId: 1,  
      doctor: {
        id: 1,
        name: this.formularioc.value.name,
        lastname: this.formularioc.value.lastname,
        middleName: this.formularioc.value.middleName,
        gender: this.formularioc.value.gender,
        typeDocumentId: this.formularioc.value.typeDocumentId,
        typeDocument: {
          id: this.formularioc.value.typeDocumentId, 
          name: 0, 
        },
        documentNumber: this.formularioc.value.documentNumber,
        dateOfBirth:"2023-11-12T18:13:29.673Z",
        phoneNumber: this.formularioc.value.phoneNumber,
        specialityId: this.formularioc.value.specialityId,
        speciality: {
          id: this.formularioc.value.specialityId, 
          name: this.formularioc.value.specialityName,  
        },
        email: this.formularioc.value.emailDoctor,  
        userId: this.formularioc.value.userIdDoc,  
        user: {
          id: this.formularioc.value.userIdDoc,  
          username: this.formularioc.value.documentNumber,
          password: this.formularioc.value.passwordDoc,  
        }
      },
      patientId: this.formularioc.value.patientId,  
      patient: {
        id: this.formularioc.value.patientId,
        name: this.formularioc.value.namep,  
        lastname: this.formularioc.value.lastnamep,  
        middleName: this.formularioc.value.middleNamep,  
        gender: this.formularioc.value.genderp,  
        typeDocumentId: this.formularioc.value.typeDocumentId,  
        typeDocument: {
          id: this.formularioc.value.typeDocumentId,  
          name: 0,  
        },
        documentNumber: this.formularioc.value.documentNumberp,  
        dateOfBirth: this.formularioc.value.agreedDate,
        phoneNumber: this.formularioc.value.phoneNumberp,  
        insurancePlanId:this.formularioc.value.insurancePlanId,  
        insurancePlan: {
          id: this.formularioc.value.insurancePlanId,  
          name: 'BCRP',  
        },
        email: this.formularioc.value.email,  
        comment: 'S/C',  
        userId: 0,  
        user: {
          id: 0,  
          username: this.formularioc.value.documentNumberp,  
          password: this.formularioc.value.password,  
        }
      },
      specialityId: 1,  
      speciality: {
        id: 1,  
        name: this.formularioc.value.especialidadname,  
      },
      place: 'SANNA Clínica EL GOLF',
      diagnosis: 'string',
    
        }
    };
    console.log('Datos a enviar a la API:', dataToSend);
    // Enviar la solicitud HTTP
    this.http.post('https://ggwv2su9f5.execute-api.us-west-1.amazonaws.com/Prod/Sanna/registrarCita', dataToSend, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .subscribe((response) => {
        console.log('Solicitud enviada con éxito', response);
        // Puedes redirigir o realizar otras acciones después de la respuesta del servidor
      }, (error) => {
        console.error('Error al enviar la solicitud', error);
        // Manejar el error adecuadamente
      });
  } }
}  
