import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories!:Category[];
  @Output() sendCategories = new EventEmitter<Category>();

  selectedCategory!: Category;
  displayAll = true;

  constructor() { }

  ngOnInit(): void {

  }

  selectCategory(item?: Category) {
    if (item) {
      this.selectedCategory = item;
      this.sendCategories.emit(this.selectedCategory);
      this.displayAll = false;
    } else {
      this.selectedCategory= new Category();
      this.selectedCategory.name="";
      this.sendCategories.emit(this.selectedCategory);
      this.displayAll = true;
    }
  }


}
