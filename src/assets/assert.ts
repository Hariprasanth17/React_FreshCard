import logo from "./freshcart-logo (1).svg";
import slide_1 from "./slide-1.jpg";
import slide_2 from "./slide-2.jpg";

import Snack_Munchies from "./category-snack-munchies.jpg";
import Backery_Biscuites from "./category-bakery-biscuits.jpg";
import Instant_Food from "./category-instant-food.jpg";
import tea_coff from "./category-tea-coffee-drinks.jpg";
import Atta_Rice_Dal from "./category-atta-rice-dal.jpg";
import Baby_Care from "./category-baby-care.jpg";
import Chicken_Fish from "./category-chicken-meat-fish.jpg";
import Cleaning_Essentials from "./category-cleaning-essentials.jpg";
import Pet_care from "./category-pet-care.jpg";
import Vegetables_Fruits from "./category-fruits-vegetables.jpg";
import cold_drinks from "./category-cold-drinks-juices.jpg";
import Dairy_Bread_Eggs from "./category-dairy-bread-eggs.jpg";


import product_1 from "./product-img-1.jpg";
import product_2 from "./product-img-2.jpg";
import product_3 from "./product-img-3.jpg";
import product_4 from "./product-img-4.jpg";
import product_5 from "./product-img-5.jpg";
import product_6 from "./product-img-6.jpg";
import product_7 from "./product-img-7.jpg";
import product_8 from "./product-img-8.jpg";
import product_9 from "./product-img-9.jpg";
import product_10 from "./product-img-10.jpg";
import product_11 from "./product-img-11.jpg";
import product_12 from "./product-img-12.jpg";
import product_13 from "./product-img-13.jpg";
import product_14 from "./product-img-14.jpg";
import product_15 from "./product-img-15.jpg";

export const ass_list = {
    logo,
    slide_1,
    slide_2,
    Chicken_Fish
}

export const category_list = [
    {
        category_name: "Snack & Munchies",
        category_image: Snack_Munchies,
    },
    {
        category_name: "Backery & Biscuites",
        category_image: Backery_Biscuites,
    }, {
        category_name: "Instant Food",
        category_image: Instant_Food,
    }, {
        category_name: "Tea, Coffee & Drinks",
        category_image: tea_coff,
    }, {
        category_name: "Atta, Rice & Dal",
        category_image: Atta_Rice_Dal,
    }, {
        category_name: "Baby Care",
        category_image: Baby_Care,
    }, {
        category_name: "Chicken, Meat & Fish",
        category_image: Chicken_Fish,
    }, {
        category_name: "Cleaning Essentials",
        category_image: Cleaning_Essentials,
    }, {
        category_name: "Pet care",
        category_image: Pet_care,
    }, {
        category_name: "Vegetables & Fruits",
        category_image: Vegetables_Fruits,
    }, {
        category_name: "Cold Drinks Juices",
        category_image: cold_drinks,
    }, {
        category_name: "Dairy, Bread & Eggs",
        category_image: Dairy_Bread_Eggs,
    }
]

export const product_list = [
    {
        _id: "1",
        image: product_1,
        category: "Snack & Munchies",
        name: "Haldiram's Sev Bhujia",
        disc_price: 21.6,
        price: 24,
        offer: "sale",
        discount: "10%",
    },
    {
        _id: "2",
        image: product_2,
        category: "Backery & Biscuites",
        name: "NutriChoice Digestive",
        disc_price: 24,
        price: 24,
        offer: "",
        discount: "",
    }, {
        _id: "3",
        image: product_3,
        category: "Backery & Biscuites",
        name: "Cadbury 5 Star Chocolate",
        disc_price: 35,
        price: 35,
        offer: "Buy 1Get $4.00 off",
        discount: "",
    }, {
        _id: "4",
        image: product_4,
        category: "Snack & Munchies",
        name: "Onion Flavour Potato",
        disc_price: 3,
        price: 5,
        offer: "Hot",
        discount: "40%",
    }, {
        _id: "5",
        image: product_5,
        category: "Instant Food",
        name: "Salted Instant Popcorn",
        disc_price: 11.7,
        price: 18,
        offer: "",
        discount: "35%",
    }, {
        _id: "6",
        image: product_6,
        category: "Backery & Biscuites",
        name: "Cadbury 5 Star Chocolate",
        disc_price: 35,
        price: 35,
        offer: "Buy 1Get $4.00 off",
        discount: "",
    }, {
        _id: "7",
        image: product_7,
        category: "Snack & Munchies",
        name: "Haldiram's Sev Bhujia",
        disc_price: 21.6,
        price: 24,
        offer: "Sale",
        discount: "10%",
    }, {
        _id: "8",
        image: product_8,
        category: "Dairy, Bread & Eggs",
        name: "Blueberry Greek Yogurt",
        disc_price: 14.2,
        price: 24,
        offer: "",
        discount: "40%",
    }, {
        _id: "9",
        image: product_9,
        category: "Dairy, Bread & Eggs",
        name: "Britannia Cheese Slices",
        disc_price: 24,
        price: 24,
        offer: "",
        discount: "",
    }, {
        _id: "10",
        image: product_10,
        category: "Instant Food",
        name: "Kellogg's Original Cereals",
        disc_price: 29.75,
        price: 35,
        offer: "",
        discount: "15%",
    }, {
        _id: "11",
        image: product_11,
        category: "Backery & Biscuites",
        name: "NutriChoice Digestive",
        disc_price: 24,
        price: 24,
        offer: "",
        discount: "",
    }, {
        _id: "12",
        image: product_12,
        category: "Snack & Munchies",
        name: "Slurrp Millet Chocolate",
        disc_price: 12,
        price: 12,
        offer: "",
        discount: "",
    }, {
        _id: "13",
        image: product_13,
        category: "Dairy, Bread & Eggs",
        name: "Amul Butter - 500g",
        disc_price: 13.5,
        price: 18,
        offer: "",
        discount: "25%",
    }, {
        _id: "14",
        image: product_14,
        category: "Backery & Biscuites",
        name: "NutriChoice Digestive",
        disc_price: 24,
        price: 24,
        offer: "",
        discount: "",
    }, {
        _id: "15",
        image: product_15,
        category: "Snack & Munchies",
        name: "Slurrp Millet Chocolate",
        disc_price: 12,
        price: 12,
        offer: "",
        discount: "",
    },
]