import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/Category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();
  categoryFormControl = new FormControl('', [Validators.required]);

  constructor(private categoryService: CategoryService,
    private router:Router,
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    ) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.categoryService.addCategory(this.category).subscribe(data => {data});
  }
}
