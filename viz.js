(async function() {
    // Get configuration settings provided by the user
    const config = await configService.getConfig();
  
    // Get data from Looker Studio
    const data = await dataService.getData();
  
    // Create a simple HTML table
    const table = document.createElement('table');
    data.forEach(row => {
      const tableRow = table.insertRow();
      row.forEach(cell => {
        const tableCell = tableRow.insertCell();
        tableCell.textContent = cell.value;
      });
    });
  
    // Render the table
    document.body.appendChild(table); 
  })();