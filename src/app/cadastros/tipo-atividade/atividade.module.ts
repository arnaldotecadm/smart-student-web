import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadeFormModule } from "./tipo-atividade-form/tipo-atividade-form.module";
import { AtividadeListModule } from "./tipo-atividade-list/tipo-atividade-list.module";
import { AtividadeFormComponent } from "./tipo-atividade-form/tipo-atividade-form.component";
import { AtividadeListComponent } from "./tipo-atividade-list/tipo-atividade-list.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, AtividadeFormModule, AtividadeListModule],
  exports: [AtividadeFormComponent, AtividadeListComponent],
})
export class AtividadeModule {}
