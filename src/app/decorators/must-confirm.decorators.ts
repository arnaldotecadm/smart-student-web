import { MatDialog } from "@angular/material/dialog";
import { ServiceLocator } from "app/services/service.locator";
import { ConfirmDialogComponent } from "app/shared/modals/confirm/confirm.component";

export function MustConfirm(subtitle: string): MethodDecorator {
  return function (target: Function, key: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let result;

      const matDialogService = ServiceLocator.injector.get(MatDialog);

      matDialogService.open(ConfirmDialogComponent, {
        data: {
          subtitle,
          showCancelButton: true,
          fnOk: () => {
            result = originalMethod.apply(this, args);
          },
        },
      });

      return result;
    };

    return descriptor;
  };
}
