import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

   ngOnInit() {
    
    //try {
      // Asegúrate de llamar a create() antes de realizar operaciones de lectura
      //await this.storage.create()
  
      // Recupera los datos almacenados
      //const storedData = await this.storage.get('credentials');
  
      //if (storedData) {
        //console.log('Datos almacenados en IntermediatePage:', storedData);
  
        // Realiza acciones necesarias con los datos antes de pasarlos a la siguiente página
        // ...
  
        // Navega a la página final
        //this.router.navigate(['/registroc'], {
          //state: {
            //credentials: storedData
         // }
        //});
      //} else {
        //console.log('No se encontraron datos almacenados en IntermediatePage');
        // Maneja el caso en que no se encuentran datos almacenados
        // Puedes redirigir a otra página o manejarlo de otra manera según tus necesidades
     // }
    //} catch (error) {
     // console.error('Error al recuperar datos en IntermediatePage:', error);
    //}
    }
  }


