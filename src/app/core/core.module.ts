import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MenuModule } from "./menu/menu.module";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, ReactiveFormsModule, MenuModule],
  exports: [SigninComponent, MenuComponent],
})
export class CoreModule {}
