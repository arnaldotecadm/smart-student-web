import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { ModalsModule } from "app/shared/modals/modals.module";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";
import { UsuarioListComponent } from "./usuario-list.component";

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [
    CommonModule,
    TabelasModule,
    ModalsModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  exports: [UsuarioListComponent],
})
export class UsuarioListModule {}
