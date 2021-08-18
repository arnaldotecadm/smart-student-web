import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TurmaFormModule } from "./turma-form/turma-form.module";
import { TurmaListModule } from "./turma-list/turma-list.module";
import { TurmaListComponent } from "./turma-list/turma-list.component";
import { TurmaFormComponent } from "./turma-form/turma-form.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, TurmaFormModule, TurmaListModule],
  exports: [TurmaListComponent, TurmaFormComponent],
})
export class TurmaModule {}
