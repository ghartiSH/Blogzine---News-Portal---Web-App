import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sidenav(){
    this.dialog.open(SidenavComponent,{
      width:'400px',
      height:'100%',
      position: {right: '0'}
    });
  }
}
