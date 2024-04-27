function createTable(dataTable) {
    // Crear la tabla
    var table = document.createElement('table');

    // Crear la fila de encabezados
    var headerRow = document.createElement('tr');

    // Crear los encabezados
    dataTable.headers.forEach(function(headerText) {
        var header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Agregar la fila de encabezados a la tabla
    table.appendChild(headerRow);

    // Crear las filas de datos
    dataTable.body.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        // Agregar la fila a la tabla
        table.appendChild(row);
    });

    // Agregar la tabla al contenedor con la clase "card"
    var card = document.querySelector('#'+dataTable.contenedor+'');
    card.appendChild(table);
}
