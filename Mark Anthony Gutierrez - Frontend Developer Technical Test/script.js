fetch("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  displayProduct(data)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayProduct(data) {
  document.getElementById("productTitle").textContent = data.title;
  document.getElementById("productDescription").textContent = data.description;
  let price = data.price;
  document.getElementById("productPrice").textContent = "$" + price.toFixed(2);
  document.getElementById("productImg").src=data.imageURL;

  const sizeOption = data.sizeOptions;

  const listSize  = document.getElementById('listSize');
  listSize.innerHTML = sizeOption.map(i => `<li value="${i.label}">${i.label}</li>`).join('');


}   