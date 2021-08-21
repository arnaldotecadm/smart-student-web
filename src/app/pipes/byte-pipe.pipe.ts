import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytePipe',
})
export class BytePipe implements PipeTransform {
  public transform(bytes: number): string {
    if (isNaN(parseFloat('' + bytes)) || !isFinite(bytes)) {
      return '-';
    }
    if (bytes <= 0) {
      return '0';
    }
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const numberers = Math.floor(Math.log(bytes) / Math.log(1024));
    return (
      (bytes / Math.pow(1024, Math.floor(numberers))).toFixed(1) +
      ' ' +
      units[numberers]
    );
  }
}
