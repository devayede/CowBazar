import { Injectable } from "@angular/core";
import { Cow } from "src/Types/Cow";

@Injectable({
    providedIn: 'root',
})

export class CartService {

    cart: Array <Cow> = [];
    constructor() {}

    add(cow: Cow) {
       
        this.cart.push(cow);
    }

    get(){
        return this.cart;
    }

    remove(cow: Cow) {
        this.cart = this.cart.filter((b) => b !== cow);
    }
}