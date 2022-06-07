import { Component, OnInit } from '@angular/core';

import { Category } from '../Model/Category';
import { CategoryService } from '../services/category.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  category!: Category[];
  images!:string[];
  imageFile!: File[];
  myForm = new FormGroup({
    filesource: new FormControl('', [Validators.required]),
  });


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.category= data;
    })
  }
  
  onFileChange(event:any) {
    this.imageFile = event.target.files;
   /* if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
              reader.onload = (event:any) => {
                console.log(event.target.result);
                this.images.push(event.target.result);
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
    */
  }
}
