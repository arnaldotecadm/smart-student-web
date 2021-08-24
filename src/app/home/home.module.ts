import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FeatureListModule } from "app/cadastros/feature/feature-list/feature-list.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ReactiveFormsModule, FeatureListModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
