import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {

  transform(texte : string ): string {
    return texte.replace(/\n/g, '<br>');
  }

}
// https://www.itsolutionstuff.com/post/angular-nl2br-pipe-exampleexample.html
// texte | nl2br:"eur":".... "
