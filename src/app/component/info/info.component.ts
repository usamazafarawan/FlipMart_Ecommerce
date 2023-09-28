import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { ApiserviceService } from 'src/app/core/services/apiservice.service';
import { CartService } from 'src/app/core/services/cartsrvice.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  umar: any;
  productList:any=[]
  filterCategory :any=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private cartService:CartService,
    private toastr: ToastrService,
    private api:ApiserviceService
      ) {}

  ngOnInit(): void {
    const studentId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getData(studentId);
    
  }

  getData(id: number) {
   this.http.get("https://fakestoreapi.com/products/"+id).pipe(
    catchError(err => {
    console.error("Http Get By ID",err);
    return [];
  }))
   .subscribe((data:any) => this.umar = data);
  }
  addtocart(item: any){
    Object.assign(item,{quantity:1,total:item.price});
    item.quantity = 1;
    item.total = item.price;
    this.cartService.addtoCart(item);
    this.toastr.success('Succefully added!','', {
      timeOut: 300,
    });
    
  }
  
}
