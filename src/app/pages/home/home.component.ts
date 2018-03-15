import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ngOnInit(){}
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];
}
