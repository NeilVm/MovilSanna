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
      name: ['Juan'],
      lastname: ['Rodas'],
      middleName: ['Guzman'],
      gender: ['M'],
      typeDocumentId: [1],
      documentNumber: ['70200100'],
      phoneNumber: ['914020123'],
      specialityId: [1],
      specialityName: ['Cardiologia'],
      emailDoctor: ['juan_rodas@sanna.com'],
      userIdDoc: [1],
      passwordDoc: ['12345678'],
      patientId: [25],
      namep: ['', Validators.required],
      lastnamep: ['', Validators.required],
      middleNamep: ['', Validators.required],
      genderp: ['', Validators.required],
      documentNumberp: ['', Validators.required],
      phoneNumberp: ['', Validators.required],
      insurancePlanId: [1],
      insurancename: ['BCRP'],
      email: ['', Validators.required],
      especialidad: [1],
      especialidadname: ['Cardiologia'],
      centroMe: ['SANNA Clínica EL GOLF'],
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
        id: 0,
        agreedTime: "12:15:00",
        agreedDate: "2023-11-12T18:13:29.673Z",
        appointment_group_id: 1,
        appointment_status_id: 1,
        diagnosis: "string",
        doctorId: 1,
        doctor: {
          id: 1,
          name: "Juan",
          lastname: "Rodas",
          middleName: "Guzman",
          gender: "M",
          typeDocumentId: 1,
          typeDocument: {
            id: 1,
            name: 0
          },
          documentNumber: '70200100',
          dateOfBirth: "2023-11-12T18:13:29.673Z",
          phoneNumber: "914020123",
          specialityId: 1,
          speciality: {
            id: 1,
            name: "Cardiologia"
          },
          email: "juan_rodas@sanna.com",
          userId: 1,
          user: {
            id: 1,
            username: "70200100",
            password: "12345678"
          }
        },
        patientId: 25,
        patient: {
          id: 25,
          name: this.formularioc.value.namep,
          lastname: this.formularioc.value.lastnamep,
          middleName: this.formularioc.value.middleNamep,
          gender: this.formularioc.value.genderp,
          typeDocumentId: 1,
          typeDocument: {
            id: 1,
            name: 0
          },
          documentNumber: this.formularioc.value.documentNumberp,
          dateOfBirth: "2023-11-12T18:13:29.673Z",
          phoneNumber: this.formularioc.value.phoneNumberp,
          insurancePlanId: this.formularioc.value.insurancePlanId,
          insurancePlan: {
            id: 1,
            name: 'BCRP'
          },
          email: this.formularioc.value.email,
          comment: 'S/C',
          userId: 0,
          user: {
            id: 0,
            username: this.formularioc.value.documentNumberp,
            password: this.formularioc.value.password
          }
        },
        specialityId: 1,
        speciality: {
          id: 1,
          name: this.formularioc.value.especialidadname
        },
        place: 'SANNA Clínica EL GOLF',
        
      };
        
    
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
      }),
      responseType: 'text' as 'json'  
    };
    console.log('Datos a enviar a la API:', dataToSend);
    // Enviar la solicitud HTTP
    this.http.post('https://ggwv2su9f5.execute-api.us-west-1.amazonaws.com/Prod/Sanna/registrarCita', dataToSend,httpOptions,)
      .subscribe((response) => {
        console.log('Solicitud enviada con éxito', response);
        // Puedes redirigir o realizar otras acciones después de la respuesta del servidor
      }, (error) => {
        console.error('Error al enviar la solicitud', error);
        console.error('Respuesta del servidor:', error.error); // Imprime el cuerpo de la respuesta
      });
      
    } 
  }
}
