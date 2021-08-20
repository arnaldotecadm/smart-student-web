import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TipoAtividadeFormComponent } from "./tipo-atividade-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TipoAtividadeFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  exports: [TipoAtividadeFormComponent],
})
export class TipoAtividadeFormModule {}
