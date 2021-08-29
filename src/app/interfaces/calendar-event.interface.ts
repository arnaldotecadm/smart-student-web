export interface CalendarioEventInterface {
  getAllCalendarioEvent(documentId: string);

  getByIdCalendarioEvent(documentId: string);

  deleteByIdCalendarioEvent(id: string);

  saveCalendarioEvent(data);
}
