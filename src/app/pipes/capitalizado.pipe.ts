import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
      value = value.toLowerCase();
      let nombres = value.split(' ');
      if(todas){
        nombres = nombres.map( nombres => {
            return nombres[0].toUpperCase() + nombres.substring(1);

        })

      }else{
           nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
      }
      return nombres.join(' ');

  }

}
