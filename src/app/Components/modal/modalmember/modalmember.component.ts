import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalmember',
  templateUrl: './modalmember.component.html',
  styleUrls: ['./modalmember.component.scss']
})
export class ModalmemberComponent implements OnInit {

  display: boolean = false; //----Initialize the dialog in false

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

}

