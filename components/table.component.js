function createTable() {
    // Crear la tabla
    var table = document.createElement('table');

    // Crear la fila de encabezados
    var headerRow = document.createElement('tr');

    // Crear los encabezados
    var headers = ['Company', 'Contact', 'Country'];
    headers.forEach(function(headerText) {
        var header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Agregar la fila de encabezados a la tabla
    table.appendChild(headerRow);

    // Datos de la tabla
    var tableData = [
        ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
        ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
        ['Ernst Handel', 'Roland Mendel', 'Austria'],
        ['Island Trading', 'Helen Bennett', 'UK'],
        ['Laughing Bacchus Winecellars', 'Yoshi Tannamuri', 'Canada'],
        ['Magazzini Alimentari Riuniti', 'Giovanni Rovelli', 'Italy']
    ];

    // Crear las filas de datos
    tableData.forEach(function(rowData) {
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
    var card = document.querySelector('.card');
    card.appendChild(table);
}
createTable();