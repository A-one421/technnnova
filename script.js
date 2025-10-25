// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  // Toggle the visibility of the nav links
  navLinks.classList.toggle("active");

  // Animate menu icon (Hamburger to X)
  menuToggle.classList.toggle("open");
  const spans = menuToggle.querySelectorAll("span");

  if (menuToggle.classList.contains("open")) {
    // Transform to 'X'
    spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
  } else {
    // Back to Hamburger
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Smooth parallax-like effect on image while scrolling
window.addEventListener("scroll", () => {
  // Disable parallax on mobile for better performance
  if (window.innerWidth > 768) {
    const heroImg = document.querySelector(".animated-img");
    const offset = window.scrollY / 20;
    heroImg.style.transform = `translateY(${offset}px) scale(1.05)`;
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
    const spans = menuToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});
const products = [
  {
    name: "Apple Airpods",
    price: 28000,
    category: "Accessories",
    brand: "Apple",
    rating: 4,
    img: "pictures/apple.jpg",
  },
  {
    name: "Iphone 16",
    price: 2000000,
    category: "Phones",
    brand: "Apple",
    rating: 5,
    img: "pictures/iphone.jpg",
  },
  {
    name: "SmartWatch",
    price: 35000,
    category: "Accessories",
    brand: "Apple",
    rating: 4,
    img: "pictures/smartwatch.jpg",
  },
  {
    name: "Game Console",
    price: 37000,
    category: "Gaming",
    brand: "Sony",
    rating: 5,
    img: "pictures/game.jpg",
  },
  {
    name: "Asus Vivobook",
    price: 500000,
    category: "Laptops",
    brand: "Asus",
    rating: 4,
    img: "pictures/laptop.jpg",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/blueetooth.jpg",
  },
  {
    name: "Apple Earbuds",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/apple.jpg",
  },
  {
    name: "Iphone 16",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/iphone.jpg",
  },
  {
    name: "Iphone 13",
    price: 42000,
    category: "Phones",
    brand: "Apple",
    rating: 3,
    img: "pictures/iphone.jpg",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/bluetooth1.jpg",
  },
  {
    name: "Samsung Airbud",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/Airbud2.jpg",
  },
  {
    name: "Iphone 12",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/iphone12.jpg",
  },
  {
    name: "Game Console",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/gameconsole.jpg",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Phones",
    brand: "Bose",
    rating: 3,
    img: "https://via.placeholder.com/250",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "https://via.placeholder.com/250",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "https://via.placeholder.com/250",
  },
];

const productList = document.getElementById("productList");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function displayProducts(list) {
  productList.innerHTML = "";

  list.forEach((prod, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.style.animationDelay = `${index * 0.1}s`; // staggered animation
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}">
      <div class="product-info">
        <h4>${prod.name}</h4>
        <p>₦${prod.price.toLocaleString()}</p>
        <div class="rating">${"⭐".repeat(prod.rating)}</div>
      </div>
    `;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const selectedCategories = Array.from(
    document.querySelectorAll(".category:checked")
  ).map((el) => el.value);
  const selectedBrands = Array.from(
    document.querySelectorAll(".brand:checked")
  ).map((el) => el.value);
  const selectedRating =
    document.querySelector("input[name='rating']:checked")?.value || 0;
  const maxPrice = parseInt(priceRange.value);

  const filtered = products.filter(
    (p) =>
      p.price <= maxPrice &&
      (selectedCategories.length
        ? selectedCategories.includes(p.category)
        : true) &&
      (selectedBrands.length ? selectedBrands.includes(p.brand) : true) &&
      (selectedRating ? p.rating >= selectedRating : true)
  );

  // Smooth fade-in for updated list
  productList.style.opacity = 0;
  setTimeout(() => {
    displayProducts(filtered);
    productList.style.opacity = 1;
  }, 300);
}

// Update price text
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  filterProducts();
});

// Filters
document
  .querySelectorAll(".category, .brand, input[name='rating']")
  .forEach((el) => {
    el.addEventListener("change", filterProducts);
  });

// Initial load
displayProducts(products);
