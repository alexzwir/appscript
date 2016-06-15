function main() {

  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1nrH7cjwVAN8c71pvWucWpK1goZm-Xs1IpNBFHDhuNvA/edit#gid=1763280524');
  SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
  var sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheetByName('CuryAlwaysOn'));

  var report = AdWordsApp.report("SELECT Date, Clicks, Impressions, Ctr, Cost, AverageCpc, ConvertedClicks, CostPerConvertedClick, AveragePosition " +
       "FROM ACCOUNT_PERFORMANCE_REPORT " +
       "DURING THIS_MONTH");
  
  report.exportToSheet(sheet);
 
  Logger.log(spreadsheet.getName());
  Logger.log(spreadsheet.getActiveSheet().getName());
  Logger.log("Report available at " + spreadsheet.getUrl());
  Logger.log('Script created by: Tboom Tech');
  
}


