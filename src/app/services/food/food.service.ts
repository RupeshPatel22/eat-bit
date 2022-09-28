import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Burger',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['America'],
        star: 4.0,
        imageUrl: 'assets/burger.jpg',
        tags: ['fastfood','burger'],
      },
      {
        id: 2,
        name: 'French-fries',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['France'],
        star: 4.0,
        imageUrl: 'assets/french fries.jpg',
        tags: ['fastfood','burger'],
      },
      {
        id: 3,
        name: 'Manchurian',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['China','Taiwan'],
        star: 4.0,
        imageUrl: 'assets/manchurian.jpg',
        tags: ['fastfood','burger'],
      },
      {
        id: 4,
        name: 'Noodles',
        price: 10,
        cookTime: '10-15',
        favorite: false,
        origins: ['Japan'],
        star: 4.0,
        imageUrl: 'assets/noodles.jfif',
        tags: ['fastfood','burger'],
      },
      {
        id: 5,
        name: 'Pizza',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['Europe','Italy'],
        star: 4.0,
        imageUrl: 'assets/pizza.jfif',
        tags: ['fastfood','burger'],
      },
      {
        id: 6,
        name: 'Salad',
        price: 10,
        cookTime: '10-15',
        favorite: false,
        origins: ['Mexican','Indian'],
        star: 4.0,
        imageUrl: 'assets/salad.jpg',
        tags: ['fastfood','burger'],
      },
      {
        id: 7,
        name: 'Sandwitch',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['India','America'],
        star: 4.0,
        imageUrl: 'assets/sandwitch.jpg',
        tags: ['fastfood','burger'],
      },
      {
        id: 8,
        name: 'Takos',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        origins: ['America'],
        star: 4.0,
        imageUrl: 'assets/takos.jpg',
        tags: ['fastfood','burger'],
      },

    ];
  }
}