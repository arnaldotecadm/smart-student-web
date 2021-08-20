export interface FileModel {
  id: number;
  nome: string;
  flagTemporario: boolean;
  idArquivoDocumento: number;
  IdArquivoDetalhe: number;
  nomeArquivo: string;
  ordem: string;
  DataOperacao: string;
  dataAlteracaoArquivo: Date;
  tamanhoArquivo: number;
}
