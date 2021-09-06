import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadesSubmetidasListComponent } from "./atividades-submetidas-list.component";
import { ModalsModule } from "app/shared/modals/modals.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [AtividadesSubmetidasListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [AtividadesSubmetidasListComponent],
})
export class AtividadesSubmetidasListModule {}
