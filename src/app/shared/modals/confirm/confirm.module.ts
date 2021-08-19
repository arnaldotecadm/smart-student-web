import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./confirm.component";

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
})
export class ConfirmModule {}
