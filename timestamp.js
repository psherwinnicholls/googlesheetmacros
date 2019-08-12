function onEdit(e){
  var sheet = e.source.getActiveSheet();
  var actRng = sheet.getActiveRange();
  var editColumn = actRng.getColumn();
  var rowIndex = actRng.getRowIndex();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  var timeCol = headers[0].indexOf("Time") + 1;
  var notesCol = headers[0].indexOf("Notes") + 1;
  if (dateCol > 0 && rowIndex > 1 && editColumn == notesCol){
    sheet.getRange(rowIndex, timeCol).setValue(Utilities.formatDate(new Date() , "GMT+1", "h:m:s"));
  }
}
