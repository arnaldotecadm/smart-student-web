export interface ConfirmDialogInterface {
  caption: string;
  subtitle: string;
  btnCancelLabel: string;
  btnOkLabel: string;
  data: any;
  fnOk: (data?) => {};
  fnCancel: (data?) => {};
}
