const students = [
    { name: "Mbaya Baya", code: "AAA007" },
    { name: "Kitambwe Mudimbi", code: "AAA001" },
    { name: "Ibemba Ntembi", code: "AAA000" }
];

function renderList() {
    const tbody = document.getElementById('studentList');
    tbody.innerHTML = students.map((student, index) => `
        <tr id="row-${index}">
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td><input class="code-input" type="password" oninput="validateCode(${index}, this.value)"></td>
            <td id="status-${index}">Absent</td>
        </tr>
    `).join('');
}

function validateCode(index, value) {
    const status = document.getElementById(`status-${index}`);
    if (value === students[index].code) {
        status.innerText = "Présent";
    } else if (value.length >= 6) {
        status.innerText = "Fraude";
    } else {
        status.innerText = "Absent";
    }
    updateStats();
}

function updateStats() {
    let present = 0, absent = 0, fraude = 0;
    students.forEach((_, index) => {
        const status = document.getElementById(`status-${index}`).textContent;
        if (status === "Présent") present++;
        else if (status === "Fraude") fraude++;
        else absent++;
    });
    document.getElementById('totalPresent').textContent = present;
    document.getElementById('totalAbsent').textContent = absent;
    document.getElementById('totalFraude').textContent = fraude;
}

document.getElementById('printBtn').addEventListener('click', () => {
    html2pdf().from(document.body).save('presence.pdf');
});

window.onload = () => { renderList(); updateStats(); };
