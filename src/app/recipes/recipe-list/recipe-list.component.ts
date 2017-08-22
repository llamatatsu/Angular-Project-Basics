import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
//https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-vegetable-plate-seafood-kitchen-recipe-snack-eat-fast-food-lunch-cuisine-chicken-rice-broccoli-asian-food-garnish-dinner-vegetarian-food-potatoes-junk-food-thai-food-side-dish-diet-food-leaf-vegetable-1375811.jpg
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test','https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-vegetable-plate-seafood-kitchen-recipe-snack-eat-fast-food-lunch-cuisine-chicken-rice-broccoli-asian-food-garnish-dinner-vegetarian-food-potatoes-junk-food-thai-food-side-dish-diet-food-leaf-vegetable-1375811.jpg'),
    new Recipe('Another Test Recipe','This is also a test','http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Baking-Dish-Salad-Healthy-Eating-Recipe-832811.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
