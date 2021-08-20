import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotaFormComponent } from "./nota-form/nota-form.component";
import { NotaFormModule } from "./nota-form/nota-form.module";
import { NotaListComponent } from "./nota-list/nota-list.component";
import { NotaListModule } from "./nota-list/nota-list.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, NotaFormModule, NotaListModule],
  exports: [NotaFormComponent, NotaListComponent],
})
export class NotaModule {}
