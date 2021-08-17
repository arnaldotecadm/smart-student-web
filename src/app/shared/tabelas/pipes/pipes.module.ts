import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipeFormacaoColunaPipe } from "./pipe-formacao-coluna.pipe";

@NgModule({
  declarations: [PipeFormacaoColunaPipe],
  imports: [CommonModule],
  exports: [PipeFormacaoColunaPipe],
})
export class PipesModule {}
