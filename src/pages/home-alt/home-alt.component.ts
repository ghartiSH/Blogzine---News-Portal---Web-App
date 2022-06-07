import { Component, OnInit, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
export interface Tile{
  color: string;
  cols: number;
  rows: number;
  text: string;
  num: string;
  image:string;
}

export interface HighlightsTile{
  color: string;
  cols: number;
  rows: number;
  text: string;
  num: number;
}
export interface Categories{
  image:string;
  name:string;
}

export interface News{
  color: string;
  text: string;
  num: string;
  image:string;
}


@Component({
  selector: 'app-home-alt',
  templateUrl: './home-alt.component.html',
  styleUrls: ['./home-alt.component.scss']
})
export class HomeAltComponent implements OnInit {


  high: number=5 ;
  category: number = 5;
  cols: number = 2;
  sponsoredcols: number = 4;
   
  width: any;
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.showNavigationIndicators=false;
    config.showNavigationArrows = true;
   }

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.width= window.innerWidth;
    if(this.width<=590){
      this.cols=1;
      this.sponsoredcols = 1;
    }
    else{
      this.cols=2;
      this.sponsoredcols = 4;
    }
  }
 

  

  tiles: Tile[] = [
    {text: 'Ten tell-tale signs you need to get a new startup.', cols: 2, rows: 2, color: 'red', num:"No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. ", image:'assets/images/img1.jpg'},
    {text: 'Best interest boards for learning about business', cols: 2, rows: 1, color: 'yellow', num:"",image:'assets/images/img2.jpg'},
    {text: 'Five intermediate guide to business', cols: 1, rows: 1, color: 'green', num:"", image:'assets/images/img3.jpg'},
    {text: '15 reasons to choose startup', cols: 1, rows: 1, color: 'blue', num:"", image:'assets/images/img4.jpg'},
  ];


  tiless:HighlightsTile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue', num:1},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen', num:2},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', num:3},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', num:4},
    {text: 'One', cols: 2, rows: 2, color: 'lightblue', num:1},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen', num:2},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', num:3},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', num:4},
  ];


  categories:Categories[]=[
    {image: 'assets/images/catimage1.jpg', name:'Travel'},
    {image: 'assets/images/catimage2.jpg', name:'Business'},
    {image: 'assets/images/catimage3.jpg', name:'Marketing'},
    {image: 'assets/images/catimage4.jpg', name:'Photography'},
    {image: 'assets/images/catimage5.jpg', name:'Sports'},
    {image: '', name:''},
    {image: '', name:''},
    {image: '', name:''},
    {image: '', name:''},
    {image: '', name:''},
    {image: '', name:''},
    {image: '', name:''},
    {image: '', name:''},
  ];

  news: News[] = [
    {text: 'I am heading',  color: 'red', num:"I am description", image:'assets/images/catimage1.jpg'},
    {text: 'I am heading',  color: 'yellow', num:"I am description",image:'assets/images/catimage2.jpg'},
    {text: 'I am heading',  color: 'green', num:"I am description", image:'assets/images/catimage3.jpg'},
    {text: 'I am heading', color: 'blue', num:"I am description", image:'assets/images/catimage4.jpg'},
    {text: 'I am heading',  color: 'red', num:"I am description", image:'assets/images/catimage5.jpg'},
    {text: 'I am heading',  color: 'yellow', num:"I am description",image:'assets/images/catimage2.jpg'},
    {text: 'I am heading',  color: 'green', num:"I am description", image:'assets/images/catimage3.jpg'},
    {text: 'I am heading', color: 'blue', num:"I am description", image:'assets/images/catimage4.jpg'},
  ];

  onLoad(){
    this.high = this.high + 1;
  }
  onLinkClick(){
    this.category = this.category + 5;
  }
}
