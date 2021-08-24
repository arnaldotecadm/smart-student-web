import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureListComponent } from "./feature-list/feature-list.component";
import { FeatureListModule } from "./feature-list/feature-list.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatureListModule],
  exports: [FeatureListComponent],
})
export class FeatureModule {}
