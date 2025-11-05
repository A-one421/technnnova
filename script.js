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

// Updated products with categories
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
    collection: "best-sellers",
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
    collection: "trending-now",
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
    collection: "best-sellers",
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
    collection: "exclusive-deals",
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
    collection: "trending-now",
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
    collection: "exclusive-deals",
  },
  {
    name: "Techno Spark Go",
    price: 42000,
    category: "Phones",
    brand: "Tecno",
    rating: 3,
    img: "pictures/sparkGo.jpg",
    description:
      "Stylish smartphone with powerful performance and long-lasting battery life",
    collection: "best-sellers",
  },
  {
    name: "JBL Earphone",
    price: 42000,
    category: "Speakers",
    brand: "JBL",
    rating: 3,
    img: "pictures/jblspeaker.jpg",
    description:
      "Lightweight design with crystal-clear audio and noise isolation",
    collection: "exclusive-deals",
  },
  {
    name: "Samsung smartwatch",
    price: 42000,
    category: "Accessories",
    brand: "Samsung",
    rating: 3,
    img: "pictures/smartwatch3.jpg",
    description: "Modern wristwatch blending style, speed, and smart features.",
    collection: "trending-now",
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
    collection: "best-sellers",
  },
  {
    name: "Samsung Airbud",
    price: 42000,
    category: "Accessories",
    brand: "Samsung",
    rating: 3,
    img: "pictures/Airbud2.jpg",
    description:
      "True wireless earbuds with active noise cancellation and long battery life.",
    collection: "trending-now",
  },
  {
    name: "Iphone 12",
    price: 42000,
    category: "Phones",
    brand: "Apple",
    rating: 3,
    img: "pictures/iphone12.jpg",
    description:
      "Popular iPhone model with excellent performance and camera capabilities.",
    collection: "exclusive-deals",
  },
  {
    name: "Apple watch",
    price: 42000,
    category: "Accessories",
    brand: "Apple",
    rating: 3,
    img: "pictures/smartwatch2.jpg",
    description: "Modern wristwatch blending style, speed, and smart features.",
    collection: "best-sellers",
  },
  {
    name: "Galaxy z-flip",
    price: 42000,
    category: "Phones",
    brand: "Samsung",
    rating: 3,
    img: "pictures/samsung2.jpg",
    description: "Modern wristwatch blending style, speed, and smart feature.",
    collection: "trending-now",
  },
  {
    name: "Hp laptop 360",
    price: 42000,
    category: "Laptops",
    brand: "HP",
    rating: 3,
    img: "pictures/hplap.jpg",
    description: "Work, create, and play — all in one reliable laptop.",
    collection: "exclusive-deals",
  },
  {
    name: "Virtual Reality",
    price: 42000,
    category: "Accessories",
    brand: "Oculus",
    rating: 3,
    img: "pictures/virtual.jpg",
    description: "Step into new worlds with immersive virtual reality",
    collection: "trending-now",
  },
];

const productList = document.getElementById("productList");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");
const tabs = document.querySelectorAll(".tab");
const pagination = document.querySelector(".pagination");
const paginationButtons = document.querySelectorAll(".pagination button");

// Current product and quantity for modal
let currentProduct = null;
let currentQuantity = 1;

// Track loved products
let lovedProducts = new Set();

// Pagination variables
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...products];

// Initialize tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    filterProducts();
  });
});

// Initialize pagination
paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("prev") && currentPage > 1) {
      currentPage--;
      displayProducts(getCurrentPageProducts());
    } else if (
      button.classList.contains("next") &&
      currentPage < Math.ceil(filteredProducts.length / productsPerPage)
    ) {
      currentPage++;
      displayProducts(getCurrentPageProducts());
    } else if (button.classList.contains("page")) {
      currentPage = parseInt(button.dataset.page);
      displayProducts(getCurrentPageProducts());
    }

    updatePaginationButtons();
  });
});

function getCurrentPageProducts() {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return filteredProducts.slice(startIndex, endIndex);
}

function updatePaginationButtons() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  paginationButtons.forEach((button) => {
    if (button.classList.contains("page")) {
      const pageNum = parseInt(button.dataset.page);
      button.style.display = pageNum <= totalPages ? "block" : "none";
      button.classList.toggle("active", pageNum === currentPage);
    }

    if (button.classList.contains("prev")) {
      button.disabled = currentPage === 1;
    }

    if (button.classList.contains("next")) {
      button.disabled = currentPage === totalPages;
    }
  });
}

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

  // Hide any existing success message
  const successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.style.display = "none";
  }

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
    shoppingCart.addToCart(product, currentQuantity);

    // Show success message
    showSuccessMessage(`Added ${currentQuantity} ${product.name}(s) to cart!`);

    // Show cart instruction popup
    showCartInstruction();

    // Optional: Close modal after a delay
    setTimeout(() => {
      closeModalFunc();
    }, 1500);
  });

  // Show the modal
  modal.style.display = "block";
}

// NEW FUNCTION: Show cart instruction popup
function showCartInstruction() {
  // Remove any existing instruction
  const existingInstruction = document.querySelector(".cart-instruction");
  if (existingInstruction) {
    existingInstruction.remove();
  }

  // Create new instruction element
  const instruction = document.createElement("div");
  instruction.className = "cart-instruction";
  instruction.textContent =
    "Check the cart icon at the top of the page to order now";

  // Add to page
  document.body.appendChild(instruction);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    instruction.remove();
  }, 5000);
}

// NEW FUNCTION: Show success message
function showSuccessMessage(message) {
  const successMessage = document.getElementById("successMessage");

  if (successMessage) {
    successMessage.textContent = message;
    successMessage.style.display = "block";

    // Auto-hide after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
}

function updateAddToCartButton(button) {
  button.textContent = `Add to Cart - ₦${(
    currentProduct.price * currentQuantity
  ).toLocaleString()}`;
}

function closeModalFunc() {
  modal.style.display = "none";

  // Reset success message
  const successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.style.display = "none";
    successMessage.textContent = "";
  }
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
  const activeTab = document.querySelector(".tab.active").dataset.category;

  filteredProducts = products.filter(
    (p) =>
      p.price <= maxPrice &&
      (selectedCategories.length
        ? selectedCategories.includes(p.category)
        : true) &&
      (selectedBrands.length ? selectedBrands.includes(p.brand) : true) &&
      (selectedRating ? p.rating >= selectedRating : true) &&
      (activeTab !== "all" ? p.collection === activeTab : true)
  );

  // Reset to first page when filtering
  currentPage = 1;

  // Smooth fade-in for updated list
  productList.style.opacity = 0;
  setTimeout(() => {
    displayProducts(getCurrentPageProducts());
    updatePaginationButtons();
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
displayProducts(getCurrentPageProducts());
updatePaginationButtons();

// why-section.js
// Simple scroll reveal using IntersectionObserver
(function () {
  const items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((i) => obs.observe(i));
  } else {
    // fallback: just reveal all
    items.forEach((i) => i.classList.add("visible"));
  }

  // Small keyboard focus effect for accessibility:
  items.forEach((card) => {
    card.addEventListener("focus", () => card.classList.add("visible"));
  });
})();

// Mobile carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".why-card");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");
  let currentSlide = 0;
  const totalSlides = Math.ceil(cards.length / 2); // 2 cards per slide

  // Function to show specific slide
  function showSlide(slideIndex) {
    // Hide all cards
    cards.forEach((card) => {
      card.classList.remove("active");
    });

    // Show cards for current slide (2 cards per slide)
    const startIndex = slideIndex * 2;
    const endIndex = startIndex + 2;

    for (let i = startIndex; i < endIndex && i < cards.length; i++) {
      cards[i].classList.add("active");
    }

    // Update button states
    updateButtonStates();
  }

  // Function to update button states
  function updateButtonStates() {
    if (currentSlide === 0) {
      leftBtn.style.opacity = "0.5";
      leftBtn.style.pointerEvents = "none";
    } else {
      leftBtn.style.opacity = "0.8";
      leftBtn.style.pointerEvents = "auto";
    }

    if (currentSlide >= totalSlides - 1) {
      rightBtn.style.opacity = "0.5";
      rightBtn.style.pointerEvents = "none";
    } else {
      rightBtn.style.opacity = "0.8";
      rightBtn.style.pointerEvents = "auto";
    }
  }

  // Next slide
  rightBtn.addEventListener("click", function () {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });

  // Previous slide
  leftBtn.addEventListener("click", function () {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  // Initialize
  showSlide(currentSlide);

  // Handle window resize
  window.addEventListener("resize", function () {
    // Reset to first slide on resize
    if (window.innerWidth >= 768) {
      // Show all cards on desktop
      cards.forEach((card) => {
        card.classList.add("active");
      });
    } else {
      // Show only current slide on mobile
      showSlide(currentSlide);
    }
  });
});

// Testimonial Carousel Functionality
class TestimonialCarousel {
  constructor() {
    this.carousel = document.querySelector(".testimonial-carousel");
    this.track = document.querySelector(".testimonial-track");
    this.slides = document.querySelectorAll(".testimonial-slide");
    this.prevBtn = document.querySelector(".carousel-btn.prev");
    this.nextBtn = document.querySelector(".carousel-btn.next");
    this.dotsContainer = document.querySelector(".carousel-dots");

    this.currentSlide = 0;
    this.slidesPerView = this.getSlidesPerView();
    this.slideCount = this.slides.length;

    this.init();
  }

  getSlidesPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  init() {
    // Create dots for mobile
    if (window.innerWidth <= 768) {
      this.createDots();
    }

    // Event listeners
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Touch/swipe support for mobile
    if (window.innerWidth <= 768) {
      this.addTouchSupport();
    }

    // Auto-play
    this.startAutoPlay();

    // Update initial state
    this.updateCarousel();

    // Handle resize
    window.addEventListener("resize", () => this.handleResize());
  }

  createDots() {
    this.dotsContainer.innerHTML = "";
    for (let i = 0; i < this.slideCount; i++) {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  updateCarousel() {
    if (window.innerWidth <= 768) {
      // Mobile - single slide
      this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    } else {
      // Desktop - show 3 slides, no transform needed
      this.track.style.transform = "translateX(0)";
    }

    // Update dots for mobile
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentSlide);
      });
    }

    // Update button states
    this.updateButtonStates();
  }

  updateButtonStates() {
    if (window.innerWidth <= 768) {
      // Mobile - single slide navigation
      this.prevBtn.style.opacity = this.currentSlide === 0 ? "0.5" : "1";
      this.nextBtn.style.opacity =
        this.currentSlide === this.slideCount - 1 ? "0.5" : "1";
    } else {
      // Desktop - hide buttons since we show all 3
      this.prevBtn.style.display = "none";
      this.nextBtn.style.display = "none";
    }
  }

  nextSlide() {
    if (window.innerWidth <= 768) {
      this.currentSlide = (this.currentSlide + 1) % this.slideCount;
    }
    this.updateCarousel();
  }

  prevSlide() {
    if (window.innerWidth <= 768) {
      this.currentSlide =
        this.currentSlide === 0 ? this.slideCount - 1 : this.currentSlide - 1;
    }
    this.updateCarousel();
  }

  goToSlide(index) {
    if (window.innerWidth <= 768) {
      this.currentSlide = index;
      this.updateCarousel();
    }
  }

  addTouchSupport() {
    let startX = 0;
    let currentX = 0;

    this.track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    this.track.addEventListener("touchmove", (e) => {
      currentX = e.touches[0].clientX;
    });

    this.track.addEventListener("touchend", () => {
      const diff = startX - currentX;
      const swipeThreshold = 50;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }

  startAutoPlay() {
    // Auto-advance every 5 seconds (mobile only)
    setInterval(() => {
      if (window.innerWidth <= 768) {
        this.nextSlide();
      }
    }, 5000);
  }

  handleResize() {
    const newSlidesPerView = this.getSlidesPerView();
    if (newSlidesPerView !== this.slidesPerView) {
      this.slidesPerView = newSlidesPerView;
      this.currentSlide = 0;

      if (newSlidesPerView === 1) {
        // Mobile - show dots and buttons
        this.createDots();
        this.prevBtn.style.display = "block";
        this.nextBtn.style.display = "block";
        this.addTouchSupport();
      } else {
        // Desktop - hide dots and buttons
        this.dotsContainer.innerHTML = "";
        this.prevBtn.style.display = "none";
        this.nextBtn.style.display = "none";
      }

      this.updateCarousel();
    }
  }
}

// Cart functionality
class ShoppingCart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.cartIcon = document.getElementById("cartIcon");
    this.cartSidebar = document.getElementById("cartSidebar");
    this.closeCart = document.getElementById("closeCart");
    this.cartItems = document.getElementById("cartItems");
    this.cartTotal = document.getElementById("cartTotal");
    this.cartCount = document.querySelector(".cart-count");
    this.orderNowBtn = document.getElementById("orderNowBtn");
    this.cartOverlay = document.createElement("div");

    this.init();
  }

  init() {
    // Create overlay
    this.cartOverlay.className = "cart-overlay";
    document.body.appendChild(this.cartOverlay);

    // Event listeners
    this.cartIcon.addEventListener("click", () => this.toggleCart());
    this.closeCart.addEventListener("click", () => this.closeCartSidebar());
    this.cartOverlay.addEventListener("click", () => this.closeCartSidebar());
    this.orderNowBtn.addEventListener("click", () => this.orderNow());

    // Update cart display
    this.updateCartDisplay();
  }

  addToCart(product, quantity = 1) {
    const existingItem = this.cart.find((item) => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        name: product.name,
        price: product.price,
        image: product.img,
        quantity: quantity,
      });
    }

    this.saveCart();
    this.updateCartDisplay();
    this.showAddToCartAnimation();
  }

  removeFromCart(productName) {
    this.cart = this.cart.filter((item) => item.name !== productName);
    this.saveCart();
    this.updateCartDisplay();
  }

  updateQuantity(productName, newQuantity) {
    const item = this.cart.find((item) => item.name === productName);
    if (item) {
      if (newQuantity <= 0) {
        this.removeFromCart(productName);
      } else {
        item.quantity = newQuantity;
        this.saveCart();
        this.updateCartDisplay();
      }
    }
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  updateCartDisplay() {
    // Update cart count
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.textContent = totalItems;

    // Update cart items
    this.cartItems.innerHTML = "";

    if (this.cart.length === 0) {
      this.cartItems.innerHTML =
        '<div class="empty-cart">Your cart is empty</div>';
      this.orderNowBtn.disabled = true;
    } else {
      this.orderNowBtn.disabled = false;
      this.cart.forEach((item) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.className = "cart-item";
        cartItemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
            <div class="cart-item-quantity">
              <button class="quantity-btn minus" data-product="${
                item.name
              }">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn plus" data-product="${
                item.name
              }">+</button>
            </div>
            <button class="remove-item" data-product="${
              item.name
            }">Remove</button>
          </div>
        `;
        this.cartItems.appendChild(cartItemElement);
      });

      // Add event listeners to quantity buttons
      this.cartItems.querySelectorAll(".quantity-btn.minus").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const productName = e.target.dataset.product;
          const item = this.cart.find((item) => item.name === productName);
          if (item) {
            this.updateQuantity(productName, item.quantity - 1);
          }
        });
      });

      this.cartItems.querySelectorAll(".quantity-btn.plus").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const productName = e.target.dataset.product;
          const item = this.cart.find((item) => item.name === productName);
          if (item) {
            this.updateQuantity(productName, item.quantity + 1);
          }
        });
      });

      this.cartItems.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const productName = e.target.dataset.product;
          this.removeFromCart(productName);
        });
      });
    }

    // Update total
    const total = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.cartTotal.textContent = total.toLocaleString();
  }

  toggleCart() {
    this.cartSidebar.classList.toggle("active");
    this.cartOverlay.classList.toggle("active");
    document.body.style.overflow = this.cartSidebar.classList.contains("active")
      ? "hidden"
      : "";
  }

  closeCartSidebar() {
    this.cartSidebar.classList.remove("active");
    this.cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  showAddToCartAnimation() {
    this.cartIcon.style.transform = "scale(1.3)";
    setTimeout(() => {
      this.cartIcon.style.transform = "scale(1)";
    }, 300);
  }

  orderNow() {
    if (this.cart.length === 0) return;

    // Create order message
    const itemsList = this.cart
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - ₦${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("%0A");

    const total = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const message = `Hi, I want to order:%0A%0A${itemsList}%0A%0ATotal: ₦${total.toLocaleString()}`;

    // Replace with your actual WhatsApp number
    const whatsappNumber = "2348166966131";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Close cart sidebar
    this.closeCartSidebar();
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartDisplay();
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart
  shoppingCart = new ShoppingCart();

  // Your existing initialization code...
  new TestimonialCarousel();

  // NEW: Shop Now button navigation to products section
  const shopNowBtn = document.getElementById("shopNowBtn");
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
      document.getElementById("products-section").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

function subscribe(event) {
  event.preventDefault();
  const email = event.target.querySelector("input").value;
  alert(`Thank you for subscribing, ${email}!`);
  event.target.reset();
}
