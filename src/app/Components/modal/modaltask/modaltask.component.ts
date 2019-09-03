import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaltask',
  templateUrl: './modaltask.component.html',
  styleUrls: ['./modaltask.component.scss']
})
export class ModaltaskComponent implements OnInit {

  display: boolean = false; //----Initialize the dialog in false

  constructor() {}
  ngOnInit() {}

  showDialog() {
    this.display = true;
  }

}
