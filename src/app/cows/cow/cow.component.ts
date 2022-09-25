import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Cow } from 'src/Types/Cow';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css']
})
export class CowComponent implements OnInit {
  @Input() cow: Cow = {} as Cow;
  // @Output() emitCow = new EventEmitter<Cow>();
  isInCart: boolean = false;
  addToCart(){
      // this.emitCow.emit(this.cow);
      this.isInCart = true;
      this.cartService.add(this.cow);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.cow);
  }

  constructor(private cartService:  CartService) { }

  ngOnInit(): void {

   
    
  }

}
