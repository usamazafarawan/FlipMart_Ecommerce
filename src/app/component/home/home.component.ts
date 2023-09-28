import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs';
import { ApiserviceService } from '../../core/services/apiservice.service';
import { CartService } from '../../core/services/cartsrvice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public productList: any = [];
  public filterCategory: any = [];
  searchKey: string = '';
  constructor(
    private api: ApiserviceService,
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api
      .getProduct()
      .pipe(
        map((res) => res as any),
        catchError((err) => {
          console.error('Http Request Failed!', err);
          return [];
        })
      )
      .subscribe((res: any) => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (
            a.category === "women's clothing" ||
            a.category === "men's clothing"
          ) {
            a.category = 'fashion';
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList);
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
    this.toastr.success('Succefully added!', '', {
      timeOut: 300,
    });
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
  infoData(id: number) {
    this.router.navigate(['/info', id]);
  }
}
