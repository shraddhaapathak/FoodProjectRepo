import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ingredients } from '../recipes/shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredients[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomato',5),


  ];

  }
  constructor() { }

  ngOnInit(): void {
  }

}
