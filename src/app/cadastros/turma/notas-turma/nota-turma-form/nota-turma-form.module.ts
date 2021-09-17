import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaTurmaFormComponent } from './nota-turma-form.component';



@NgModule({
  declarations: [NotaTurmaFormComponent],
  imports: [
    CommonModule
  ], exports:[NotaTurmaFormComponent]
})
export class NotaTurmaFormModule { }
