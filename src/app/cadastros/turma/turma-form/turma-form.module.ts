import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TurmaFormComponent } from "./turma-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [TurmaFormComponent],
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
  exports: [TurmaFormComponent],
})
export class TurmaFormModule {}
