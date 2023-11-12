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
      agreedTime: ['08:00', Validators.required],
      agreedDate: [{value: new Date().toISOString(), disabled: true}, Validators.required],
      appointment_group_id: [1],
      appointment_status_id: [1],
      doctor: ['', Validators.required],
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
      patientId: [30],// poner siempre uno mas antes de correr el programa final actual 31
      namep: ['', Validators.required],
      lastnamep: ['', Validators.required],
      middleNamep: ['', Validators.required],
      genderp: ['', Validators.required],
      documentNumberp: ['', Validators.required],
      phoneNumberp: ['', Validators.required],
      insurancePlanId: [1],
      insurancename: ['BCRP'],
      email: ['', Validators.required],
      especialidad: ['', Validators.required],
      especialidadname: ['Cardiologia'],
      centroMe: ['SANNA Clínica EL GOLF'],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  registrarc(){
    console.log('Botón presionado');

  }
}
