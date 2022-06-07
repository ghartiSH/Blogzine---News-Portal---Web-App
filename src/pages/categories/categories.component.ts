import { Component, OnInit, HostListener } from '@angular/core';

export interface News{
  color: string;
  text: string;
  num: string;
  image:string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  cols: number = 2; 
  width: any;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.width= window.innerWidth;
    if(this.width<=590){
      this.cols=1;
    }
    else{
      this.cols=2;
    }
  }
  news: News[] = [
    {text: 'I am heading',  color: 'red', num:"I am description", image:'assets/images/category1.jpg'},
    {text: 'I am heading',  color: 'yellow', num:"I am description",image:'assets/images/category2.jpg'},
    {text: 'I am heading',  color: 'green', num:"I am description", image:'assets/images/author6.jpg'},
    {text: 'I am heading', color: 'blue', num:"I am description", image:'assets/images/author5.jpg'},
    {text: 'I am heading',  color: 'red', num:"I am description", image:'assets/images/author4.jpg'},
    {text: 'I am heading',  color: 'yellow', num:"I am description",image:'assets/images/author1.jpg'},
    {text: 'I am heading',  color: 'green', num:"I am description", image:'assets/images/catimage3.jpg'},
    {text: 'I am heading', color: 'blue', num:"I am description", image:'assets/images/catimage4.jpg'},
  ];
}
