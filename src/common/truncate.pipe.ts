import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone:true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return '';
    if (value.length <= limit) return value;

    const truncated = value.substr(0, limit);
    return truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(" "))) + '...';
  }

}