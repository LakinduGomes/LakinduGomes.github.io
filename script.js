function calculateAndSort(input) {
    let row = input.closest('tr');
    let placePts = parseFloat(row.querySelector('input[placeholder="Place PTS"]').value) || 0;
    let killPts = parseFloat(row.querySelector('input[placeholder="Kill PTS"]').value) || 0;
    let total = placePts + killPts;

    row.querySelector('input[placeholder="Total"]').value = total;

    sortTable();
}

function sortTable() {
    let table = document.querySelector('table tbody');
    let rows = Array.from(table.rows);

    rows.sort((a, b) => {
        let totalA = parseFloat(a.querySelector('input[placeholder="Total"]').value) || 0;
        let totalB = parseFloat(b.querySelector('input[placeholder="Total"]').value) || 0;

        return totalB - totalA;
    });

    rows.forEach(row => table.appendChild(row));
}
