import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tableData: any = {
    data: [
      {
        task: 1,
        priority: 'Important',
        title: 'Table creation',
        assigned_to: ['Muslim'],
        status: 'Working',
        created_on: Date(),
      },
      {
        task: 2,
        priority: 'Important',
        title: 'Table creation',
        assigned_to: ['Muslim'],
        status: 'Working',
        created_on: Date(),
      },
      {
        task: 4,
        priority: 'Important',
        title: 'Table creation',
        assigned_to: ['Muslim'],
        status: 'Working',
        created_on: Date()
      },
      {
        task: 4,
        priority: 'Important',
        title: 'Table creation',
        assigned_to: ['Muslim'],
        status: 'Working',
        created_on: Date()
      },
    ],
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2
  }
  constructor() { }

  getTableData() : Promise<any> {
    return new Promise((resolve, reject) => {
       resolve(this.tableData);
    });
  }

  addTableData(newData : any){
    this.tableData.data.push({
        task: newData.taskNumber,
        priority: newData.priority,
        title: newData.description,
        assigned_to: newData.assignedTo,
        status: 'Working',
        created_on:  Date()
    });
  }

  EditTableData(index : number , editData : any){
    this.tableData.data[index] = {
      task: editData.taskNumber,
      priority: editData.priority,
      title: editData.description,
      assigned_to: editData.assignedTo,
      status: 'Working',
      created_on:  Date()
    }
  }

}
