import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { InterfaceProject } from '../../models/interfaceProject';

const arrayResponse: any = [];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {

  value: number = 34;
  data: any[];

  constructor(private projectService: ProjectService) { }
  // ------------------ Array of models ------------------ //
    projects: InterfaceProject;

  ngOnInit() {
    this.getListProject();
  }

  getListProject() {
    this.projectService.getAllProject().subscribe(result => {
      result['data'].forEach(function (value) {
        arrayResponse.push(value);
      });
      this.projects = arrayResponse;
    });
  }




}
