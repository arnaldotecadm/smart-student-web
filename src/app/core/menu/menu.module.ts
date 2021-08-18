import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, MatIconModule, MatBadgeModule],
  exports: [MenuComponent],
})
export class MenuModule {}
