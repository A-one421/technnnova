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
    description:
      "Premium wireless earbuds with noise cancellation and seamless integration with Apple devices.",
  },
  {
    name: "Iphone 16",
    price: 2000000,
    category: "Phones",
    brand: "Apple",
    rating: 5,
    img: "pictures/iphone.jpg",
    description:
      "The latest iPhone with advanced camera system, A18 chip, and all-day battery life.",
  },
  {
    name: "SmartWatch",
    price: 35000,
    category: "Accessories",
    brand: "Apple",
    rating: 4,
    img: "pictures/smartwatch.jpg",
    description:
      "Track your fitness, receive notifications, and stay connected with this advanced smartwatch.",
  },
  {
    name: "Game Console",
    price: 37000,
    category: "Gaming",
    brand: "Sony",
    rating: 5,
    img: "pictures/game.jpg",
    description:
      "Next-gen gaming console with 4K graphics, fast loading times, and exclusive titles.",
  },
  {
    name: "Asus Vivobook",
    price: 500000,
    category: "Laptops",
    brand: "Asus",
    rating: 4,
    img: "pictures/laptop.jpg",
    description:
      "Powerful laptop for work and entertainment with high-performance processor and vibrant display.",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/blueetooth.jpg",
    description:
      "Portable speaker with crystal clear sound, deep bass, and long battery life.",
  },
  {
    name: "Apple Earbuds",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/apple.jpg",
    description:
      "Comfortable earbuds with excellent sound quality and noise isolation.",
  },
  {
    name: "Iphone 16",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/iphone.jpg",
    description: "Latest smartphone with advanced features and premium design.",
  },
  {
    name: "Iphone 13",
    price: 42000,
    category: "Phones",
    brand: "Apple",
    rating: 3,
    img: "pictures/iphone.jpg",
    description:
      "Reliable iPhone with great camera and performance at an affordable price.",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/bluetooth1.jpg",
    description:
      "Wireless speaker with 360-degree sound and waterproof design.",
  },
  {
    name: "Samsung Airbud",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/Airbud2.jpg",
    description:
      "True wireless earbuds with active noise cancellation and long battery life.",
  },
  {
    name: "Iphone 12",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/iphone12.jpg",
    description:
      "Popular iPhone model with excellent performance and camera capabilities.",
  },
  {
    name: "Game Console",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/gameconsole.jpg",
    description:
      "Gaming console with immersive graphics and extensive game library.",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Phones",
    brand: "Bose",
    rating: 3,
    img: "https://via.placeholder.com/250",
    description:
      "High-quality portable speaker with rich sound and durable build.",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "https://via.placeholder.com/250",
    description:
      "Compact wireless speaker perfect for travel and outdoor activities.",
  },
  {
    name: "Bluetooth Speaker",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "https://via.placeholder.com/250",
    description:
      "Premium speaker with advanced audio technology and sleek design.",
  },
];

const productList = document.getElementById("productList");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

// Current product and quantity for modal
let currentProduct = null;
let currentQuantity = 1;

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

    // Add click event to show product details
    card.addEventListener("click", () => {
      showProductDetails(prod);
    });

    productList.appendChild(card);
  });
}

function showProductDetails(product) {
  currentProduct = product;
  currentQuantity = 1;

  modalBody.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="modal-product-image">
    <div class="modal-product-info">
      <h3>${product.name}</h3>
      <p class="price">₦${product.price.toLocaleString()}</p>
      <p class="category">Category: ${product.category}</p>
      <p class="brand">Brand: ${product.brand}</p>
      <div class="rating">${"⭐".repeat(product.rating)}</div>
      <p class="description">${product.description}</p>
      
      <div class="quantity-selector">
        <button class="quantity-btn minus">-</button>
        <span class="quantity-display">${currentQuantity}</span>
        <button class="quantity-btn plus">+</button>
      </div>
      
      <button class="add-to-cart">Add to Cart - ₦${(
        product.price * currentQuantity
      ).toLocaleString()}</button>
    </div>
  `;

  // Add event listeners to quantity buttons
  const minusBtn = modalBody.querySelector(".minus");
  const plusBtn = modalBody.querySelector(".plus");
  const quantityDisplay = modalBody.querySelector(".quantity-display");
  const addToCartBtn = modalBody.querySelector(".add-to-cart");

  minusBtn.addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityDisplay.textContent = currentQuantity;
      updateAddToCartButton(addToCartBtn);
    }
  });

  plusBtn.addEventListener("click", () => {
    currentQuantity++;
    quantityDisplay.textContent = currentQuantity;
    updateAddToCartButton(addToCartBtn);
  });

  addToCartBtn.addEventListener("click", () => {
    alert(
      `Added ${currentQuantity} ${product.name}(s) to cart! Total: ₦${(
        product.price * currentQuantity
      ).toLocaleString()}`
    );
    closeModalFunc();
  });

  // Show the modal
  modal.style.display = "block";
}

function updateAddToCartButton(button) {
  button.textContent = `Add to Cart - ₦${(
    currentProduct.price * currentQuantity
  ).toLocaleString()}`;
}

function closeModalFunc() {
  modal.style.display = "none";
}

// Close modal when clicking the X
closeModal.addEventListener("click", closeModalFunc);

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFunc();
  }
});

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
