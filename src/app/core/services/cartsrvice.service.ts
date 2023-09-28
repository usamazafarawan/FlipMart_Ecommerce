import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  // @Output() productRemoved = new EventEmitter();

  constructor() {
    this.localGet();
  }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    const productExistInCart = this.cartItemList.find(
      (shop: any) => shop.id === product.id
    );
    if (productExistInCart) {
      productExistInCart.quantity++;
      productExistInCart.total =
        productExistInCart.price * productExistInCart.quantity;
      // localStorage.setItem('cart', JSON.stringify(this.cartItemList));
    } else {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      console.log(this.cartItemList);
      // localStorage.setItem('cart', JSON.stringify(this.cartItemList));
      return;
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.quantity * a.price;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    const delBtn = confirm('Do you want to delete this item ?');
    if (delBtn === true) {
      this.cartItemList.map((a: any, index: any) => {
        if (product.id === a.id) {
          this.cartItemList.splice(index, 1);
          // localStorage.setItem('cart', JSON.stringify(this.cartItemList));
        }
      });
      this.productList.next(this.cartItemList);
    }
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  localGet() {
    const data ='';
    // localStorage.getItem('cart')||
    if (data) {
      this.cartItemList = JSON.parse(data);
      this.productList.next(this.cartItemList);
    }
  }
  minCount(product: any) {
    const productExistInCart = this.cartItemList.find(
      (shop: any) => shop.id === product.id
    );
    if (productExistInCart) {
      productExistInCart.quantity--;
      // localStorage.setItem('cart', JSON.stringify(this.cartItemList));
      if (productExistInCart.quantity === 0) {
        this.removeCartItem(product);
      }
    }
  }
}
