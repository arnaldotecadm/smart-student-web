import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadeFormModule } from "./atividade-form/atividade-form.module";
import { AtividadeListModule } from "./atividade-list/atividade-list.module";
import { AtividadeListComponent } from "./atividade-list/atividade-list.component";
import { AtividadeFormComponent } from "./atividade-form/atividade-form.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, AtividadeFormModule, AtividadeListModule],
  exports: [AtividadeFormComponent, AtividadeListComponent],
})
export class AtividadeModule {}
