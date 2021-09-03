import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinhasAtividadesFormComponent } from "./minhas-atividades-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { FileModule } from "app/shared/file/file.module";

@NgModule({
  declarations: [MinhasAtividadesFormComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FileModule,
  ],
  exports: [MinhasAtividadesFormComponent],
})
export class MinhasAtividadesFormModule {}
