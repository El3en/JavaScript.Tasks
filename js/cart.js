"use strict";

    const productName = document.getElementById("product-name");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    const tableclass = document.getElementById("products");
    
    const addProduct = function () {
        if (
            typeof productName.value !== String ||
            typeof price.value !== Number ||
            typeof quantity.value !== String   
        )
        
        { alert ("Something's wrong!, please try again ^_^");
          return;
        }

        let total = 0;

        tableclass.innerHTML += `
        <tr>
          <td>${productName.value}</td>
          <td>${price.value}</td>
          <td>${quantity.value}</td>
          <td>${(total += price.value * quantity.value)}</td>
          <td>Remove</td>      
        </tr>`;


    productName.value = "";
    price.value = "";
    quantity.value = "";
    total = "";
    productName.focus();


        
}

add.addEventListener("click", addProduct);



// Remove 

const remove = function (i) {
    if (confirm("Are you sure?")) {
      products.splice(i, 1);
      display();
    }
    
document.addEventListener("click", removeProduct);

}