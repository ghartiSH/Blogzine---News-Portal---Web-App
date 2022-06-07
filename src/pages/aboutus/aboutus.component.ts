import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
width :any;
cols: number = 4;
wedo: number = 3;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  
  ngOnInit(): void {
    this.width= window.innerWidth;
    if(this.width<=590){
      this.cols=1;
      this.wedo=1;
  
    }
     else if(this.width > 590 && this.width<=1000){
      this.cols=2;
      this.wedo=2;
  
    }
    else{
      this.cols=4;
      this.wedo=3;
    }

  
  }
}
