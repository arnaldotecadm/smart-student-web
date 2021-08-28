export interface ModalAgendamentoInterface {
  id: number;
  idFuncionario: number;
  nomeFuncionario: string;
  dataSelecionada: Date;
  locais: any[];
  areas: any[];
  subAreas: any[];
  idRelacionamento;
  service;
  documentId;
}
