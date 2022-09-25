import { Injectable } from '@angular/core';

@Injectable()
export class CowsService {

  constructor() { }

  getCows() {
    return [
      {
        name: 'Jersey',
        price: 22000,
        image: 'https://media.istockphoto.com/photos/mooching-about-picture-id139887709?s=612x612',
      },
  
      {
        name: 'Buffalo',
        price: 50000,
        image:'https://image.shutterstock.com/shutterstock/photos/553738969/display_1500/stock-photo-buffalo-isolated-on-the-white-background-553738969.jpg',
      },
      {
        name: 'Jersey',
        price: 22000,
        image: 'https://media.istockphoto.com/photos/mooching-about-picture-id139887709?s=612x612',
      },
      
      {
        name: 'Buffalo',
        price: 50000,
        image:'https://image.shutterstock.com/shutterstock/photos/553738969/display_1500/stock-photo-buffalo-isolated-on-the-white-background-553738969.jpg',
      },
      {
        name: 'Jersey',
        price: 22000,
        image: 'https://media.istockphoto.com/photos/mooching-about-picture-id139887709?s=612x612',
      },
      
      {
        name: 'Buffalo',
        price: 50000,
        image:'https://image.shutterstock.com/shutterstock/photos/553738969/display_1500/stock-photo-buffalo-isolated-on-the-white-background-553738969.jpg',
      },
    ]; 
  }
}
