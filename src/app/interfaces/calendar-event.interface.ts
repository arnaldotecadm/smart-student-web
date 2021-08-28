export interface CalendarioEventInterface {
  getAllCalendarioEvent();

  getByIdCalendarioEvent(documentId: string);

  deleteByIdCalendarioEvent(id: string);

  saveCalendarioEvent(data);
}
