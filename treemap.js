/* Change the FOLDER NAME to generate tree for any specify folder */

function generateFolderTree() {
  
  try {
    
    // If you want a tree of any sub folder
    var parent = DriveApp.getFoldersByName("Folder name").next();
    
    // If you want to search from the top (root) folder
    // var parentFolder = DriveApp.getRootFolder();
    
    getChildFolders(parent);
    
  } catch (e) {
    
    console.log(e.toString());
    
  }
  
}


function getChildFolders(parent) {
  
  var childFolders = parent.getFolders();
  
  while (childFolders.hasNext()) {
    
    var childFolder = childFolders.next();
    
    // will create a google sheets hyperlinked cell for each folder
    console.log('$$ =HYPERLINK("' + childFolder.getUrl() + '", "' + childFolder.getName() + '")$$');
    
    var files = childFolder.getFiles();
    
    while (files.hasNext()) {
      var file = files.next();
      
      // Print list of files inside the folder, create a hyperlink for each
      console.log('$$$ =HYPERLINK("' + file.getUrl()  + '", "' + file.getName() + '")$$');
    }
    
    // Recursive call for any sub-folders
    getChildFolders(childFolder);
    
  }
  
}
