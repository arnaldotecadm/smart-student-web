import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotaListComponent } from "./nota-list.component";

@NgModule({
  declarations: [NotaListComponent],
  imports: [CommonModule],
  exports: [NotaListComponent],
})
export class NotaListModule {}
