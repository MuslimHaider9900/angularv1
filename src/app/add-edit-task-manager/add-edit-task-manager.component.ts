import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-edit-task-manager',
  templateUrl: './add-edit-task-manager.component.html',
  styleUrls: ['./add-edit-task-manager.component.scss']
})
export class AddEditTaskManagerComponent implements OnInit {
  addEditTaskForm!: FormGroup;
  editId!: number;
  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) {
    this.addEditTaskForm = new FormGroup({
      taskNumber: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
      description: new FormControl(null, [Validators.required, Validators.max(200)]),
      assignedTo: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']){
        this.editId = parseInt(params['id']);
        console.log(this.editId)
          this.dataService.getTableData().then((res: any) => {
            const tableData = res.data;
            if (tableData[this.editId]) {
              this.addEditTaskForm.patchValue({
                taskNumber: tableData[this.editId].task,
                description: tableData[this.editId].title,
                assignedTo: tableData[this.editId].assigned_to,
                priority: tableData[this.editId].priority
              })
            }
          });
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  save() {
    this.addEditTaskForm.markAllAsTouched();
    if (this.addEditTaskForm.valid) {
      this.dataService.addTableData(this.addEditTaskForm.value);
      this.router.navigate(['/']);
    }
  }
  edit() {
    this.addEditTaskForm.markAllAsTouched();
    if (this.addEditTaskForm.valid) {
      this.dataService.EditTableData(this.editId, this.addEditTaskForm.value);
      this.router.navigate(['/']);
    }
  }
}
