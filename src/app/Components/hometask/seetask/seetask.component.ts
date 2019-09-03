import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seetask',
  templateUrl: './seetask.component.html',
  styleUrls: ['./seetask.component.scss']
})
export class SeetaskComponent implements OnInit {

  value: number = 75;

  constructor() { }

  ngOnInit() {
  }

}
