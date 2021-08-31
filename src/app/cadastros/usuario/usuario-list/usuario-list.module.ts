import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioListComponent } from "./usuario-list.component";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { ModalsModule } from "app/shared/modals/modals.module";

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [CommonModule, TabelasModule, ModalsModule],
  exports: [UsuarioListComponent],
})
export class UsuarioListModule {}
