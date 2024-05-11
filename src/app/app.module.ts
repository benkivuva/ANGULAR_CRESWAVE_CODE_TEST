import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskEditDialogModule } from './components/task-edit-dialog/task-edit-dialog.module';
import { TaskAddComponent } from './components/task-add/task-add.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskTableComponent,
        TaskDetailsComponent,
        TaskFormComponent,
        TaskAddComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }),
        RouterModule.forRoot([]),
        AppRoutingModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        TaskEditDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }