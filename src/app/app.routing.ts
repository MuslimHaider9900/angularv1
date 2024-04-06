import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { RouterModule } from '@angular/router';
import { TaskManagerTableComponent } from "./task-manager-table/task-manager-table.component";
import { AddEditTaskManagerComponent } from "./add-edit-task-manager/add-edit-task-manager.component";

export const routes: Route[] = [
  {
    path: '',
    component:TaskManagerTableComponent
  },
  {
    path: 'add-edit',
    component:AddEditTaskManagerComponent
  },
  {
    path: 'add-edit/:id',
    component:AddEditTaskManagerComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
