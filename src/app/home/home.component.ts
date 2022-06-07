import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddPostComponent } from '../add-post/add-post.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  button1!:boolean;
  button2!:boolean;
  button3!:boolean;
  button4!:boolean;
  button5!:boolean;
 constructor(public dialog:MatDialog){

 }

  ngOnInit(): void {
  }

  button1Clicked(){
    this.button1 = true;
    this.button2 = false;
    this.button3 = false;
    this.button4 = false;
    this.button5 = false;
    this.dialog.open(AddCategoryComponent);

  }
  button2Clicked(){
    this.button1 = false;
    this.button2 = true;
    this.button3 = false;
    this.button4 = false;
    this.button5 = false;
    this.dialog.open(AddPostComponent)
  }
  

}
