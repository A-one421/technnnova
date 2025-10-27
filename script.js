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
    brand: "Dell",
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
    brand: "Samsung",
    rating: 4,
    img: "pictures/smartwatch.jpg",
    description:
      "Track your fitness, receive notifications, and stay connected with this advanced smartwatch.",
  },
  {
    name: "Game Console",
    price: 37000,
    category: "Gaming",
    brand: "HP",
    rating: 5,
    img: "pictures/game.jpg",
    description:
      "Next-gen gaming console with 4K graphics, fast loading times, and exclusive titles.",
  },
  {
    name: "Asus Vivobook",
    price: 500000,
    category: "Laptops",
    brand: "Dell",
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
    name: "Techno Spark Go",
    price: 42000,
    category: "Phones",
    brand: "Bose",
    rating: 3,
    img: "pictures/sparkgo.jpg",
    description:
      "Stylish smartphone with powerful performance and long-lasting battery life",
  },
  {
    name: "JBL Earphone",
    price: 42000,
    category: "Speakers",
    brand: "Bose",
    rating: 3,
    img: "pictures/jblspeaker.jpg",
    description:
      "Lightweight design with crystal-clear audio and noise isolation",
  },
  {
    name: "Samsung smartwatch",
    price: 42000,
    category: "Accessories",
    brand: "Samsung",
    rating: 3,
    img: "pictures/smartwatch3.jpg",
    description: "Modern wristwatch blending style, speed, and smart features.",
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
    brand: "Samsung",
    rating: 3,
    img: "pictures/Airbud2.jpg",
    description:
      "True wireless earbuds with active noise cancellation and long battery life.",
  },
  {
    name: "Iphone 12",
    price: 42000,
    category: "Phones",
    brand: "Iphone",
    rating: 3,
    img: "pictures/iphone12.jpg",
    description:
      "Popular iPhone model with excellent performance and camera capabilities.",
  },
  {
    name: "Apple watch",
    price: 42000,
    category: "Accessories",
    brand: "Bose",
    rating: 3,
    img: "pictures/smartwatch2.jpg",
    description: "Modern wristwatch blending style, speed, and smart features.",
  },
  {
    name: "Galaxy z-flip",
    price: 42000,
    category: "Phones",
    brand: "Samsung",
    rating: 3,
    img: "pictures/samsung2.jpg",
    description: "Modern wristwatch blending style, speed, and smart feature.",
  },
  {
    name: "Hp laptop 360",
    price: 42000,
    category: "Laptops",
    brand: "HP",
    rating: 3,
    img: "pictures/hplap.jpg",
    description: "Work, create, and play — all in one reliable laptop.",
  },
  {
    name: "Virtual Reality",
    price: 42000,
    category: "Accessories",
    brand: "Bose",
    rating: 3,
    img: "pictures/virtual.jpg",
    description: "Step into new worlds with immersive virtual reality",
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

// Track loved products
let lovedProducts = new Set();

function displayProducts(list) {
  productList.innerHTML = "";

  list.forEach((prod, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.style.animationDelay = `${index * 0.1}s`; // staggered animation

    // Check if product is loved
    const isLoved = lovedProducts.has(prod.name);

    card.innerHTML = `
      <div class="love-icon ${isLoved ? "loved" : ""}">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <img src="${prod.img}" alt="${prod.name}" loading="lazy">
      <div class="product-info">
        <h4>${prod.name}</h4>
        <p>₦${prod.price.toLocaleString()}</p>
        <div class="rating">
          ${"⭐".repeat(prod.rating)}
          <button class="details-arrow"> <?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "/></svg></button>
        </div>
      </div>
    `;

    // Add click event to show product details (clicking on card or arrow)
    const detailsArrow = card.querySelector(".details-arrow");
    detailsArrow.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering the card click event
      showProductDetails(prod);
    });

    card.addEventListener("click", () => {
      showProductDetails(prod);
    });

    // Add love functionality
    const loveIcon = card.querySelector(".love-icon");
    loveIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering the card click event
      toggleLoveProduct(prod.name, loveIcon);
    });

    productList.appendChild(card);
  });
}

function toggleLoveProduct(productName, loveIcon) {
  if (lovedProducts.has(productName)) {
    lovedProducts.delete(productName);
    loveIcon.classList.remove("loved");
  } else {
    lovedProducts.add(productName);
    loveIcon.classList.add("loved");
  }
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
