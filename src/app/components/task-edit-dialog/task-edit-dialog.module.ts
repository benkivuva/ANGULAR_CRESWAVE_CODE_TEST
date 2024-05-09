import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { TaskEditDialogComponent } from './task-edit-dialog.component';

@NgModule({
    declarations: [
        TaskEditDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        FormsModule
    ],
    exports: [
        TaskEditDialogComponent
    ]
})
export class TaskEditDialogModule { }