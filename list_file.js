function updateFileDescription() {
  var fileId = '1rK2rIJb6ZJy8kjrcxHZnpauQeX0BH1SY4W91g447gbE';
  var newDescription = 'sourav';

  try {
    var file = DriveApp.getFileById(fileId);
    file.setDescription(newDescription);
    Logger.log('File description updated successfully.');
  } catch (error) {
    Logger.log('Error occurred: ' + error);
  }
}

updateFileDescription();

function listFiles() {
  var files = DriveApp.getFiles();
  while ( files.hasNext() ) {
    var file = files.next();
    Logger.log( file.getName() + ' ' + file.getId() );
  }
}  

listFiles() ;