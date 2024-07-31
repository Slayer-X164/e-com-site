const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 9968,
    colors: [
      {
        code: "black",
        img: "/img/air.png",
      },
      {
        code: "darkblue",
        img: "/img/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "BLAZZER",
    price: 14993,
    colors: [
      {
        code: "lightgray",
        img: "/img/blazer.png",
      },
      {
        code: "green",
        img: "/img/blazer2.png",
      },
    ],
  },

  {
    id: 3,
    title: "JORDAN",
    price: 12480,
    colors: [
      {
        code: "lightgray",
        img: "/img/jordan.png",
      },
      {
        code: "green",
        img: "/img/jordan2.png",
      },
    ],
  },

  {
    id: 4,
    title: "CRATER",
    price: 9130,
    colors: [
      {
        code: "black",
        img: "/img/crater.png",
      },
      {
        code: "white",
        img: "/img/crater2.png",
      },
    ],
  },

  {
    id: 5,
    title: "HIPPIE",
    price: 11643,
    colors: [
      {
        code: "lightgray",
        img: "/img/hippie.png",
      },
      {
        code: "gray",
        img: "/img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".prodImg");
const currentProductTitle = document.querySelector(".prodTitle");
const currentProductPrice = document.querySelector(".prodPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // changing the current slide
    sliderWrapper.style.transform = `translatex(${-100 * index}vw)`;
    // change the choosen product
    choosenProduct = products[index];
    // change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    // changing color
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductsizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductsizes.forEach((size, index) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const prodBtn = document.querySelector(".prodBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

prodBtn.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
