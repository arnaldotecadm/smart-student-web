import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CanDeactivate } from "@angular/router";
import { ConfirmDialogComponent } from "app/shared/modals/confirm/confirm.component";
import { Observable } from "rxjs";
import { CanDeactivateDirtyComponent } from "./can-deactivate-dirty.componente";
import { FormCanDeactivate } from "./form-can-deactivate.component";

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanDeactivateDirtyComponent>
{
  constructor(private dialog: MatDialog) {}
  canDeactivate(
    component: CanDeactivateDirtyComponent
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (component instanceof FormCanDeactivate && !component.canDeactivate()) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          subtitle:
            "Há alterações pendentes, deseja Sair e perder estas alterações?",
        },
      });

      return dialogRef.afterClosed();
    } else {
      return true;
    }
  }
}
