import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaTurmaFormModule } from './nota-turma-form/nota-turma-form.module';
import { NotaTurmaFormComponent } from './nota-turma-form/nota-turma-form.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, NotaTurmaFormModule
  ], exports:[NotaTurmaFormComponent]
})
export class NotasTurmaModule { }
