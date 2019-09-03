import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { InterfaceProject } from '../../../models/interfaceProject';

const arrayResponse: any = [];
const arrayResponse2: any = [];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private projectService: ProjectService) { }
  // ------------------ Array of models ------------------ //
  projects: any;

  ngOnInit() {
    this.getListProject();
  }

  getListProject() {
    this.projectService.getAllProject()
    .subscribe( result => {
      result['data'].forEach(function (value) {
        arrayResponse.push(value);
      });
      this.projects = arrayResponse;

      for (let index = 0; index < arrayResponse.length; index++) {
        const element = arrayResponse[index]['tasks'];
        arrayResponse2.push(element);
      }

      for (let index2 = 0; index2 < arrayResponse2.length; index2++) {
        const element2 = arrayResponse2[index2];
        for (let index3 = 0; index3 < element2.length; index3++) {
          const element8 = element2[index3];
          // console.log(element8.name);
        }
      }
    });
  }
}

