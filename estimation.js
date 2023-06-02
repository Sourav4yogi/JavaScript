function myFunctiontables() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var tableCount = sheet.getRange("D13").getValue();
  var tableCumulative = 0;
  var count = 0;

  while (tableCumulative < tableCount) {
    count++;
    tableCumulative += table_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I13");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);
}

function myFunctionviews() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var viewCount = sheet.getRange("D14").getValue();
  var viewCumulative = 0;
  var count = 0;
  
  while (viewCumulative < viewCount) {
    count++;
    viewCumulative += view_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I14");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);
}

function myFunctionothers() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var otherCount = sheet.getRange("D15").getValue();
  var otherCumulative = 0;
  var count = 0;
  
  while (otherCumulative < otherCount) {
    count++;
    otherCumulative += other_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I15");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);

}


function myFunctionpackages() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var packagesCount = sheet.getRange("D16").getValue();
  var packagesCumulative = 0;
  var count = 0;
  
  while (packagesCumulative < packagesCount) {
    count++;
    packagesCumulative += packages_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I16");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);

}

function myFunctionsequence() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sequenceCount = sheet.getRange("D17").getValue();
  var sequenceCumulative = 0;
  var count = 0;
  
  while (sequenceCumulative < sequenceCount) {
    count++;
    sequenceCumulative += sequence_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I17");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);

}

function myFunctioninformatica() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var informaticaCount = sheet.getRange("D18").getValue();
  var informaticaCumulative = 0;
  var count = 0;
  
  while (informaticaCumulative < informaticaCount) {
    count++;
    informaticaCumulative += informatica_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I18");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);

}

function myFunctionparallel() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var parallelCount = sheet.getRange("D19").getValue();
  var parallelCumulative = 0;
  var count = 0;
  
  while (parallelCumulative < parallelCount) {
    count++;
    parallelCumulative += parallel_list[count - 1] || 0;
  }

  var outputCell = sheet.getRange("I19");
  count = count + 1;
  count = count * 2;
  outputCell.setValue(count);

}




var table_list = [0, 5000, 8000, 10000, 10000, 10000, 10000,10000, 10000,10000, 10000,10000, 10000,10000, 10000];
var view_list = [0, 1000, 1600, 2000, 2000, 2000,2000, 2000, 2000,2000, 2000, 2000,2000, 2000, 2000,2000, 2000, 2000,2000,2000, 2000, 2000];
var other_list= [0,200,320,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400];
var packages_list=[0,100,160,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200]
var sequence_list=[0,100,160,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200];
var informatica_list = [0,100,160,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200];
var parallel_list = [0,100,160,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200];

function myMaxFunc() {

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var columnRange = sheet.getRange("I12:I19"); 
var values = columnRange.getValues();


 var maxNumber = Math.max.apply(null, values.map(function(row) {
    return row[0];
  }));


 var outputCell = sheet.getRange("J12");
 outputCell.setValue(maxNumber);

 
 var outputCell = sheet.getRange("K12");
 outputCell.setValue(maxNumber/4);

 var outputCell=sheet.getRange("L12");
 outputCell.setValue((maxNumber*10)/3);

 var outputCell=sheet.getRange("M12");
 outputCell.setValue(((maxNumber*10)/3)/4)


}

myFunctiontables();
myFunctionviews();
myFunctionothers();
myFunctionpackages();
myFunctionsequence();
myFunctioninformatica();
myFunctionparallel();
myMaxFunc();


