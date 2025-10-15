
    //Write your code here  
  function insert_Row() {
  // Select the table using its ID
  var table = document.getElementById('sampleTable');

  // Create a new row and two new cells
  var newRow = table.insertRow(0); // Insert at the top (index 0)
  var cell1 = newRow.insertCell(0); // First cell (left)
  var cell2 = newRow.insertCell(1); // Second cell (right)

  // Set the cell values
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}

