import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./usuario-list/usuario-list.component";
import { UsuarioFormModule } from "./usuario-form/usuario-form.module";
import { UsuarioListModule } from "./usuario-list/usuario-list.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, UsuarioFormModule, UsuarioListModule],
  exports: [UsuarioFormComponent, UsuarioListComponent],
})
export class UsuarioModule {}
