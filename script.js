document.addEventListener("DOMContentLoaded", function () {
    const nilaiForm = document.getElementById("nilaiForm");
    const hitungBtn = document.getElementById("hitungBtn");
    const hasilTable = document.getElementById("hasilTable");
    const tbody = document.querySelector("#hasilTable tbody");
  
    hitungBtn.addEventListener("click", function () {
      const nama = document.getElementById("nama").value;
      const matkul = document.getElementById("matkul").value;
      const grade = document.getElementById("grade").value;
  
      let nilaiSkala;
      switch (grade) {
        case "A":
          nilaiSkala = 4;
          break;
        case "B":
          nilaiSkala = 3;
          break;
        case "C":
          nilaiSkala = 2;
          break;
        case "D":
          nilaiSkala = 1;
          break;
        case "E":
          nilaiSkala = 0;
          break;
      }
  
      const newRow = tbody.insertRow();
      newRow.innerHTML = `
        <td>${nama}</td>
        <td>${matkul}</td>
        <td>${grade}</td>
        <td>${nilaiSkala.toFixed(2)}</td>
      `;
  
      hitungRataRata();
    });
  
    function hitungRataRata() {
      const rows = tbody.querySelectorAll("tr");
      let totalNilaiSkala = 0;
  
      rows.forEach(row => {
        const nilaiSkala = parseFloat(row.querySelector("td:last-child").textContent);
        totalNilaiSkala += nilaiSkala;
      });
  
      const rataRata = totalNilaiSkala / rows.length;
  
      const rataRataRow = document.createElement("tr");
      rataRataRow.innerHTML = `

      `;
  
      tbody.appendChild(rataRataRow);
      hasilTable.classList.remove("hidden");
    }
  });
  