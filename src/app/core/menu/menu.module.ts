import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [MenuComponent],
})
export class MenuModule {}
