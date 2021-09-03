import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinhasAtividadesFormModule } from "./minhas-atividades-form/minhas-atividades-form.module";
import { MinhasAtividadesListModule } from "./minhas-atividades-list/minhas-atividades-list.module";
import { MinhasAtividadesFormComponent } from "./minhas-atividades-form/minhas-atividades-form.component";
import { MinhasAtividadesListComponent } from "./minhas-atividades-list/minhas-atividades-list.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MinhasAtividadesFormModule,
    MinhasAtividadesListModule,
  ],
  exports: [MinhasAtividadesFormComponent, MinhasAtividadesListComponent],
})
export class MinhasAtividadesModule {}
