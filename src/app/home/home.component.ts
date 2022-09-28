import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fs:FoodService, private route:ActivatedRoute) { }
  
  foods: Foods[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
      else
      this.foods = this.fs.getAll();
    })

     
  }

}
