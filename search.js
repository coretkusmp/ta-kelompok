const search = document.getElementById("search");
const products = document.querySelectorAll(".product a");

search.addEventListener("input", function () {
    const value = search.value.toLowerCase();

    products.forEach(function (product) {
        const name = product.querySelector("h1").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});