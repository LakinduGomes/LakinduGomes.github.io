function calculateAndSort(inputElement) {
            const row = inputElement.closest('tr');
            const placePts = parseFloat(row.querySelector('input[placeholder="Place PTS"]').value) || 0;
            const killPts = parseFloat(row.querySelector('input[placeholder="Kill PTS"]').value) || 0;
            const totalPts = placePts + killPts;
            row.querySelector('input[placeholder="Total"]').value = totalPts;

            const tableBody = document.querySelector('tbody');
            const rows = Array.from(tableBody.querySelectorAll('tr'));

            rows.sort((a, b) => {
                const totalA = parseFloat(a.querySelector('input[placeholder="Total"]').value) || 0;
                const totalB = parseFloat(b.querySelector('input[placeholder="Total"]').value) || 0;
                return totalB - totalA;
            });

            rows.forEach((row, index) => {
                row.querySelector('td:first-child').innerText = index + 1;
                tableBody.appendChild(row);
            });
        }
