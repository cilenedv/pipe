import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitán America";
  nombre2: string = "CilenE de LA CRuZ"
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number =  0.234;
  salario: number =  1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string ='en';
  videoUrl: string = 'https://www.youtube.com/embed/zzk09ESX7e0';
  valorPromesa = new Promise<string>((resolve,reject) =>{
      setTimeout(() =>{
          resolve('llego la data');
      },4500)
  });
  heroe = {
      nombre:'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion:{
          calle: 'Primera',
          casa: 20
      }
  }

}
