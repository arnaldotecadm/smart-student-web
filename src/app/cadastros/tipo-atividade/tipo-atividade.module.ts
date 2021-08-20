import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TipoAtividadeFormModule } from "./tipo-atividade-form/tipo-atividade-form.module";
import { TipoAtividadeListModule } from "./tipo-atividade-list/tipo-atividade-list.module";
import { TipoAtividadeFormComponent } from "./tipo-atividade-form/tipo-atividade-form.component";
import { TipoAtividadeListComponent } from "./tipo-atividade-list/tipo-atividade-list.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, TipoAtividadeFormModule, TipoAtividadeListModule],
  exports: [TipoAtividadeFormComponent, TipoAtividadeListComponent],
})
export class TipoAtividadeModule {}
