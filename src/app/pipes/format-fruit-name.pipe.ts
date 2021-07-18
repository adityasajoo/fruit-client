import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFruitName'
})
export class FormatFruitNamePipe implements PipeTransform {
  private mapInput:any = {
    "freshapples" : "Fresh Apple",
    "freshoranges" : "Fresh Orange",
    "freshbanana" : "Fresh Banana",
    "rottenapples" : "Rotten Apple",
    "rottenbanana":"Rotten Banana",
    "rottenoranges":"Rotten Orange"
  }

  transform(value:any): any {
    return this.mapInput[value]?this.mapInput[value]:value;
  }

}
