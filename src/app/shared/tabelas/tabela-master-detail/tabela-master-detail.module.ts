import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabelaModule } from "../tabela/tabela.module";
import { TabelaMasterDetailComponent } from "./tabela-master-detail.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  declarations: [TabelaMasterDetailComponent],
  imports: [CommonModule, TabelaModule, MatButtonToggleModule],
  exports: [TabelaMasterDetailComponent],
})
export class TabelaMasterDetailModule {}
