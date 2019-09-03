import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometask',
  templateUrl: './hometask.component.html',
  styleUrls: ['./hometask.component.scss']
})
export class HometaskComponent implements OnInit {

  wrapper: boolean = true;  //----Initialize the sidenave in true

  constructor() { }

  ngOnInit() {}

  menuToggle(){
    this.wrapper = !this.wrapper;
  }

}
