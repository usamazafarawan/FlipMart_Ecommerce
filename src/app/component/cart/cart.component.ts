import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../core/services/cartsrvice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any = [];
  grandTotal!: number;
  @Output() productRemoved = new EventEmitter();

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  addCount(item: any) {
    this.cartService.addtoCart(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }
  minCount(item: any) {
    this.cartService.minCount(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }
}
