import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
