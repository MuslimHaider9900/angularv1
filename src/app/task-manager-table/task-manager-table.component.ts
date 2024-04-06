import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-manager-table',
  templateUrl: './task-manager-table.component.html',
  styleUrls: ['./task-manager-table.component.scss']
})
export class TaskManagerTableComponent implements OnInit {
  displayedColumns: string[] = ['task', 'priority', 'title', 'assigned_to', 'status', 'created_on' , 'action'];
  dataSource!: MatTableDataSource<any>;

  test: FormControl = new FormControl('test');
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  tableData: any;
  constructor(private router : Router , private dataService : DataService) {
    this.dataService.getTableData().then((res : any) => {
      this.tableData = res;
     });
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.tableData?.data);
    this.dataSource.paginator = this.paginator;
  }

  navigateToAddEditTaskManager(){
    this.router.navigate(['add-edit']);
  }
  editItem(index : number){
    this.router.navigate(['add-edit' , index]);

  }
}
