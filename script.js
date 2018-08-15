var Items = ["NARS Orgasm blush", "Anastasia Contour kit", "Huda Desert Dusk palette", "NARS tan concealer", "Ben Nye Banana powder", "Eyelure dramatic lash", "NARS Tahoe foundation"];
var Prices = [39.00, 40.00, 65.00, 29.00, 36.00, 11.99, 49.00];
var Quantities = [0, 0, 0, 0, 0, 0, 0];
var total = 0;

function addToList(itemId) {
  var shoppingList = document.getElementById("shoppingList");

  var row = shoppingList.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  Quantities[itemId]++;
  cell1.innerHTML = Items[itemId];
  cell2.innerHTML = Quantities[itemId];
  cell3.innerHTML = "$" + Prices[itemId].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  total += Prices[itemId];


}

var checkouttime = 0;

function checkOut() {
  if (checkouttime === 0) {
    checkouttime++;
    var shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";

    var checkOut = document.getElementById("checkOut");
    var row = checkOut.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = Items[0];
    cell2.innerHTML = Quantities[0];
    cell3.innerHTML = "$" + (Prices[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') * Quantities[0]);

    var row = checkOut.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = Items[1];
    cell2.innerHTML = Quantities[1];
    cell3.innerHTML = "$" + (Prices[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') * Quantities[1]);

    var row = checkOut.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = Items[2];
    cell2.innerHTML = Quantities[2];
    cell3.innerHTML = "$" + (Prices[2].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') * Quantities[2]);
    document.getElementById("total").innerText = "Total = $" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}