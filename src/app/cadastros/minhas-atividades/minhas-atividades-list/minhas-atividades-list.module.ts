import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinhasAtividadesListComponent } from "./minhas-atividades-list.component";
import { ModalsModule } from "app/shared/modals/modals.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [MinhasAtividadesListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [MinhasAtividadesListComponent],
})
export class MinhasAtividadesListModule {}
