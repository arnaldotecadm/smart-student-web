import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureListComponent } from "./feature-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { TabelasModule } from "app/shared/tabelas/tabelas.module";

@NgModule({
  declarations: [FeatureListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    TabelasModule,
  ],
  exports: [FeatureListComponent],
})
export class FeatureListModule {}
