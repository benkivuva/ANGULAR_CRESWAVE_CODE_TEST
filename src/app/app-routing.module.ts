import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
    { path: 'tasks', component: TaskTableComponent },
    { path: 'tasks/:id', component: TaskDetailsComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }