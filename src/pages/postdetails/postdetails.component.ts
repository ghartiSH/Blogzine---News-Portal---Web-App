import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {
  width:any;
  imgcols: number = 3;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.width= window.innerWidth;
    if(this.width<=800){
      this.imgcols=1;
    }
    else{
      this.imgcols=3;
    }
  }

}
