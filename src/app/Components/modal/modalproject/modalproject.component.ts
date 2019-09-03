import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalproject',
  templateUrl: './modalproject.component.html',
  styleUrls: ['./modalproject.component.scss']
})
export class ModalprojectComponent implements OnInit {

  display: boolean = false; //----Initialize the dialog in false

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

}
