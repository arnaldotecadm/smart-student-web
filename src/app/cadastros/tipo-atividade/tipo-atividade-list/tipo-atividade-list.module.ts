import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TipoAtividadeListComponent } from "./tipo-atividade-list.component";
import { ModalsModule } from "app/shared/modals/modals.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [TipoAtividadeListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [TipoAtividadeListComponent],
})
export class TipoAtividadeListModule {}
