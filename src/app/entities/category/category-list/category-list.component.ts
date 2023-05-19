import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.mode';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private CategoryService: CategoryService){

  }

  ngOnInit(): void{
    this.getCategories;
  }

  private getCategories(): void{
    this.CategoryService.getAllCategories().subscribe({
      next: (categoriesRequest) => {this.categories = categoriesRequest;},
      error: (err) => {this.handleError(err);}
    })
  }

  private handleError(error: any): void{
    console.log(error);
  }

}
