import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabelaMasterDetailModule } from "./tabela-master-detail/tabela-master-detail.module";
import { TabelaComponent } from "./tabela/tabela.component";
import { TabelaModule } from "./tabela/tabela.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, TabelaModule, TabelaMasterDetailModule],
  exports: [TabelaComponent],
})
export class TabelasModule {}
