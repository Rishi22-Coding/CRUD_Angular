import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddconcoursesdialogComponent } from '../addconcoursesdialog/addconcoursesdialog.component';
import { FetchapiComponent } from '../fetchapi/fetchapi.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(AddconcoursesdialogComponent, {
      width: '30%'
    });
  }

}
