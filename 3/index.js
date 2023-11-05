//задание 1
document.addEventListener("DOMContentLoaded", () => {
  let { product, text } = JSON.parse(localStorage.getItem("review"));

  document.getElementById("productName").value = product;
  document.getElementById("reviewText").value = text;
});

document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let productName = document.getElementById("productName").value;
    let reviewText = document.getElementById("reviewText").value;

    if (productName === "" || reviewText === "") {
      alert("Пожалуйста, заполните все поля");
    } else {
      const review = {
        product: productName,
        text: reviewText,
      };
      localStorage.setItem("review", JSON.stringify(review));
      alert("Отзыв успешно добавлен");
    }
  });

//---------------------------

// Задание 2

function showReviews(product) {
  let reviews = JSON.parse(localStorage.getItem(product));
  let reviewsList = document.getElementById("reviews_" + product);

  if (reviewsList.style.display === "none") {
    reviewsList.style.display = "block";
  } else {
    reviewsList.style.display = "none";
  }

  if (reviews) {
    reviews.forEach(function (review) {
      let listItem = document.createElement("li");

      let reviewText = document.createElement("p");
      reviewText.innerText = review.text;
      listItem.appendChild(reviewText);

      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Удалить";
      deleteButton.addEventListener("click", function () {
        deleteReview(product, review.text);
      });
      listItem.appendChild(deleteButton);

      reviewsList.appendChild(listItem);
    });
  }
}

function deleteReview(product, text) {
  let reviews = JSON.parse(localStorage.getItem(product));
  let updatedReviews = reviews.filter(function (review) {
    return review.text !== text;
  });

  if (updatedReviews.length === 0) {
    localStorage.removeItem(product);

    let productItem = document.getElementById(product);
    productItem.parentNode.removeChild(productItem);
  } else {
    localStorage.setItem(product, JSON.stringify(updatedReviews));
  }
}

window.addEventListener("load", function () {
  let productList = document.getElementById("productList");

  for (let i = 0; i < localStorage.length; i++) {
    let product = localStorage.key(i);

    let productItem = document.createElement("li");
    productItem.id = product;

    let productName = document.createElement("h3");
    productName.innerText = product;
    productItem.appendChild(productName);

    let toggleButton = document.createElement("button");
    toggleButton.innerText = "Показать отзывы";
    toggleButton.addEventListener("click", function (event) {
      let product = event.target.previousSibling.innerText;
      let buttonText = event.target.innerText;

      if (buttonText === "Показать отзывы") {
        event.target.innerText = "Скрыть отзывы";
      } else {
        event.target.innerText = "Показать отзывы";
      }

      showReviews(product);
    });
    productItem.appendChild(toggleButton);

    let reviewsList = document.createElement("ul");
    reviewsList.id = "reviews_" + product;
    reviewsList.style.display = "none";
    productItem.appendChild(reviewsList);

    productList.appendChild(productItem);
  }
});
