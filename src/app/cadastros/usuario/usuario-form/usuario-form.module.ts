import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioFormComponent } from "./usuario-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [UsuarioFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  exports: [UsuarioFormComponent],
})
export class UsuarioFormModule {}
