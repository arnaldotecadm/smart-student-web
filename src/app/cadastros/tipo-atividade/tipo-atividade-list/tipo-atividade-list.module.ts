import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadeListComponent } from "./tipo-atividade-list.component";
import { ModalsModule } from "app/shared/modals/modals.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [AtividadeListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [AtividadeListComponent],
})
export class AtividadeListModule {}
