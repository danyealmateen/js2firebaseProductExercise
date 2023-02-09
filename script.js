const baseUrl =
  "https://produkter1-e7839-default-rtdb.europe-west1.firebasedatabase.app/";

let twoHandedAxe = {
  description: "axe of lost souls",
  name: "shadowmourne",
  price: 3,
  url: "https://cdn.itemforge.com/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/s/h/shadowmourne.png",
};

//FUNKAR EJ MED POST?
async function postProducts() {
  const url = baseUrl + "Two-handed Axe.json";

  const init = {
    method: "PUT",
    body: JSON.stringify(twoHandedAxe),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, init);
  const data = await response.json();
}

postProducts(twoHandedAxe);

async function getProducts() {
  const url = baseUrl + ".json";
  const response = await fetch(url);
  const data = await response.json();

  let objKeys = Object.keys(data);
  let objValue = Object.values(data);

  objValue.forEach((ele, index) => {
    let productCard = document.createElement("div");
    productCard.setAttribute("id", "productCard");
    productCard.innerHTML = `${ele.name} ${objKeys[index]}  ${ele.description} : ${ele.price} <img id="img" src="${ele.url}" />`;
    document.body.appendChild(productCard);
  });
  console.log(data);
}
getProducts();
