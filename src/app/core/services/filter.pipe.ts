import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // transform(value: any, args?: any): any {

  //   if(!value)return null;
  //   if(!args)return value;

  //   args = args.toLowerCase();

  //   return value.filter(function(item:any){
  //       return JSON.stringify(item).toLowerCase().includes(args);
  //   });



 transform(value : any[], filterString: string, propName:string): any[] {
   const result:any =[];
   if(!value || filterString==='' || propName ===''){
     return value;
   }
   value.forEach((a:any)=>{
     if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
       result.push(a);
     }
   });
   return result;
   }

}