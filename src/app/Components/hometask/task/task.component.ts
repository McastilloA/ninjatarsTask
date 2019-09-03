import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { InterfaceTask } from '../../../models/interfaceTask';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  value: number = 75;

  constructor( private projectService: ProjectService, private route: ActivatedRoute ) { }
  // ------------------ Array of models ------------------ //
  tasks: InterfaceTask;
  _tasks: any;

  ngOnInit() {
    this.getDetailsTask();
  }

  getDetailsTask() {
    this.projectService.getProjectId(this.route.snapshot.params.id)
    .subscribe((result) => {
      this.tasks = result['tasks'];

      let resp:InterfaceTask[]=[];
      resp.push(result);
      this._tasks = resp;
    });
  }

}
