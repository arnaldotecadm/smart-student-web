export interface ConfirmDialogInterface {
  title: string;
  subtitle: string;
  btnCancelLabel: string;
  btnOkLabel: string;
  showCancelButton: boolean;
  data: any;
  fnOk: (data?) => {};
  fnCancel: (data?) => {};
}
