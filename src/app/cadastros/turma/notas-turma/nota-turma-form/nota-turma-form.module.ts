import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaTurmaFormComponent } from './nota-turma-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NotaTurmaFormComponent],
  imports: [
    CommonModule, RouterModule
  ], exports:[NotaTurmaFormComponent]
})
export class NotaTurmaFormModule { }
