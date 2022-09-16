/* Lähteinä käytetty  kurssimateriaalien lisäksi:
https://www.w3schools.com/jsref/met_table_insertrow.asp
'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
https://www.w3schools.com/jsref/met_node_appendchild.asp?ref=hackernoon.com
https://www.w3schools.com/js/js_htmldom_nodes.asp
*/
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

if (document.readyState !== "loading") {
  console.log("valmis");
  initialize();
} else {
  document.addEventListener("DOMContetntLoaded", function () {
    console.log("else valmis");
    initialize();
  });
}

function initialize() {
  const addButton = document.getElementById("submit-data");
  const emptyButton = document.getElementById("empty-table");

  addButton.addEventListener("click", function () {
    var table = document.getElementById("table-body");
    var user = document.getElementById("input-username").value;
    var cbox = document.getElementById("input-admin");
    const allrows = document.querySelectorAll("tr");
    for (let row of allrows) {
      if (row.cells[0].innerText === user) {
        console.log(row);
        row.cells[1].innerText = document.getElementById("input-email").value;
        row.cells[2].innerText = document.getElementById("input-address").value;
        if (cbox.checked == true) {
          row.cells[3].innerHTML = "X";
        } else {
          row.cells[3].innerHTML = "-";
        }
        //row.cells[3].innerText = document.getElementById("input-admin").value;
        return;
      }
    }

    const newRow = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("td");
      if (j === 0) {
        cell.innerText = document.getElementById("input-username").value;
      } else if (j === 1) {
        cell.innerText = document.getElementById("input-email").value;
      } else if (j === 2) {
        cell.innerText = document.getElementById("input-address").value;
      } else {
        if (cbox.checked === true) {
          cell.innerHTML = "X";
        } else {
          cell.innerHTML = "-";
        }
      }
      newRow.appendChild(cell);
    }
    table.appendChild(newRow);
  });

  emptyButton.addEventListener("click", function () {
    var tab = document.getElementById("tab");
    var rowCount = tab.rows.length;

    for (var x = 1; x < rowCount; x++) {
      tab.deleteRow(1);
    }
  });
}
