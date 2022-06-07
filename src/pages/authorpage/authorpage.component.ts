import { Component, OnInit,HostListener } from '@angular/core';
export interface News{
  color: string;
  text: string;
  num: string;
  image:string;
}

@Component({
  selector: 'app-authorpage',
  templateUrl: './authorpage.component.html',
  styleUrls: ['./authorpage.component.scss']
})

export class AuthorpageComponent implements OnInit {

  cols: number = 3; 
  width: any;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.width= window.innerWidth;
    if(this.width<=590){
      this.cols=1;
    }
    else if(this.width > 590 && this.width <=950){
      this.cols=2;
    }
    else{
      this.cols=3;
    }
  }
  news: News[] = [
    {text: 'I am heading',  color: 'red', num:"I am description", image:'assets/images/author1.jpg'},
    {text: 'I am heading',  color: 'yellow', num:"I am description",image:'assets/images/author2.jpg'},
    {text: 'I am heading',  color: 'green', num:"I am description", image:'assets/images/author3.jpg'},
    {text: 'I am heading', color: 'blue', num:"I am description", image:'assets/images/author4.jpg'},
    {text: 'I am heading',  color: 'red', num:"I am description", image:'assets/images/author5.jpg'},
    {text: 'I am heading',  color: 'yellow', num:"I am description",image:'assets/images/author6.jpg'},
    {text: 'I am heading',  color: 'green', num:"I am description", image:'assets/images/catimage3.jpg'},
    {text: 'I am heading', color: 'blue', num:"I am description", image:'assets/images/catimage4.jpg'},
  ];

}
