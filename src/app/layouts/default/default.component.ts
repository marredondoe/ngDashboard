import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})

export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {}

  sideBarToggler(eve): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
