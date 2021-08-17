import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoListComponent } from "./aluno-list.component";

@NgModule({
  declarations: [AlunoListComponent],
  imports: [CommonModule],
  exports: [AlunoListComponent],
})
export class AlunoListModule {}
