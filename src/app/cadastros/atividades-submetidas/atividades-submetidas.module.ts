import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtividadesSubmetidasFormModule } from "./atividades-submetidas-form/atividades-submetidas-form.module";
import { AtividadesSubmetidasListModule } from "./atividades-submetidas-list/atividades-submetidas-list.module";
import { AtividadesSubmetidasListComponent } from "./atividades-submetidas-list/atividades-submetidas-list.component";
import { AtividadesSubmetidasFormComponent } from "./atividades-submetidas-form/atividades-submetidas-form.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtividadesSubmetidasFormModule,
    AtividadesSubmetidasListModule,
  ],
  exports: [
    AtividadesSubmetidasListComponent,
    AtividadesSubmetidasFormComponent,
  ],
})
export class AtividadesSubmetidasModule {}
