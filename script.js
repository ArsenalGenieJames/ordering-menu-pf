const menu = [
    { productname: "milktea", price: 39 },
    { productname: "caramel macchiato", price: 39 },
    { productname: "americano", price: 39 },
    { productname: "beerbrand", price: 39 }
];

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "white"; 
document.body.innerHTML = "";


const title = document.createElement("h2");
title.textContent = "Menu";
document.body.appendChild(title);

const menuContainer = document.createElement("div");
document.body.appendChild(menuContainer);


const totalDiv = document.createElement("div");
totalDiv.style.marginTop = "20px";
totalDiv.style.fontSize = "20px";
totalDiv.innerHTML = 'Total: ₱<span id="total">0.00</span>';
document.body.appendChild(totalDiv);
const totalSpan = document.getElementById("total");


const checkboxes = [];

for (let index in menu) {
  const item = menu[index];

  const wrapper = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.dataset.price = item.price;

  const label = document.createElement("label");
  label.textContent = ` ${item.productname} - ₱${item.price}`;

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);
  menuContainer.appendChild(wrapper);

  checkboxes.push(checkbox);
  checkbox.addEventListener("change", updateTotal);
}

function updateTotal() {
  let total = 0;
  for (let i in checkboxes) {
    const cb = checkboxes[i];
    if (cb.checked) {
      total += parseFloat(cb.dataset.price);
    }
  }
  totalSpan.textContent = total.toFixed(2);
}
