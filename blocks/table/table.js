export default async function decorate(block) {
    try {
        const response = await fetch("http://localhost:3000/sample.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        
        // Create table
        const table = document.createElement("table");
        table.border = "1"; // Adding border for visibility
        
        // Create table head
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        
        jsonData.columns.forEach(column => {
            const th = document.createElement("th");
            th.textContent = column;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement("tbody");
        jsonData.data.forEach(rowData => {
            const row = document.createElement("tr");
            jsonData.columns.forEach(column => {
                const td = document.createElement("td");
                td.textContent = rowData[column];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        // Append table to the block
        block.appendChild(table);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
