import { Component, OnInit } from '@angular/core';
import { Cow } from 'src/Types/Cow';
import { CowsService } from './cows.service';


@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.css']
})
export class CowsComponent implements OnInit {
[x: string]: any;

  constructor(private cowsService: CowsService) {
    
   }
  cows: Cow []= [];
   
  // card: Cow[] = [];
    handleClick() {
      alert('Im Working on that');
    }

    isClicking: boolean = false;
    

    mySearch:String = '';
    
    
    // addToCart(cow: Cow){
    //   console.log(cow);
    // }
 

  ngOnInit(): void {
    this.cows = this.cowsService.getCows();
  }

}
