import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotaListComponent } from "./nota-list.component";
import { ModalsModule } from "app/shared/modals/modals.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [NotaListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [NotaListComponent],
})
export class NotaListModule {}
