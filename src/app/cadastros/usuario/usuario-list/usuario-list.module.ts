import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuarioListComponent } from "./usuario-list.component";

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [CommonModule],
  exports: [UsuarioListComponent],
})
export class UsuarioListModule {}
