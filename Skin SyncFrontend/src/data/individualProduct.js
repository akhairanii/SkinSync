// src/data/individualProducts.js

// --- IMPORT GAMBAR SATUAN ---
import centellaFW from "../assets/satuan/centella/facewash.jpg";
import centellaSS from "../assets/satuan/centella/sunscreen.jpg";
import centellaMZ from "../assets/satuan/centella/moisturizer.jpg";
import centellaSM from "../assets/satuan/centella/serum.jpg";

import gladFW from "../assets/satuan/glad2glow/facewash.jpg";
import gladSS from "../assets/satuan/glad2glow/sunscreen.jpg";
import gladMZ from "../assets/satuan/glad2glow/moisturizer.jpg";
import gladSM from "../assets/satuan/glad2glow/serum.jpg";

import scarlettFW from "../assets/satuan/scarlett/facewash.jpg";
import scarlettSS from "../assets/satuan/scarlett/sunscreen.jpg";
import scarlettMZ from "../assets/satuan/scarlett/moisturizer.jpg";
import scarlettSM from "../assets/satuan/scarlett/serum.jpg";

import skintificFW from "../assets/satuan/skintific/facewash.jpg";
import skintificSS from "../assets/satuan/skintific/sunscreen.jpg";
import skintificMZ from "../assets/satuan/skintific/moisturizer.jpg";
import skintificSM from "../assets/satuan/skintific/serum.jpg";

import wardahFW from "../assets/satuan/wardah/facewash.jpg";
import wardahSS from "../assets/satuan/wardah/sunscreen.jpg";
import wardahMZ from "../assets/satuan/wardah/moisturizer.jpg";
import wardahSM from "../assets/satuan/wardah/serum.jpg";

const individualProducts = {
    SKIN1004: {
        cleanser: { name: "Madagascar Centella Ampoule Foam", price: "Mulai Rp 115.000", link: "https://id.shp.ee/RfD96LL", img: centellaFW },
        sunscreen: { name: "Hyalu-Cica Water-Fit Sun Serum", price: "Mulai Rp 135.000", link: "https://id.shp.ee/vjwYK21", img: centellaSS },
        moisturizer: { name: "Centella Soothing Cream", price: "Mulai Rp 155.000", link: "https://id.shp.ee/MhsK18u", img: centellaMZ },
        serum: { name: "Madagascar Centella Ampoule", price: "Mulai Rp 145.000", link: "https://id.shp.ee/KbdpDnA", img: centellaSM }
    },
    Glad2Glow: {
        cleanser: { name: "Milk Amino Acid Cleanser", price: "Mulai Rp 39.000", link: "https://id.shp.ee/odWVA8m", img: gladFW },
        sunscreen: { name: "Ultra Light Sunscreen SPF 50", price: "Mulai Rp 39.000", link: "https://id.shp.ee/dNMZyad", img: gladSS },
        moisturizer: { name: "Pomegranate Niacinamide 5%", price: "Mulai Rp 42.000", link: "https://id.shp.ee/ZCpYPzy", img: gladMZ },
        serum: { name: "Pomegranate 10% Niacinamide", price: "Mulai Rp 45.000", link: "https://id.shp.ee/cTN9eAb", img: gladSM }
    },
    Scarlett: {
        cleanser: { name: "Brightening Facial Wash", price: "Mulai Rp 55.000", link: "https://id.shp.ee/gFnCtdu", img: scarlettFW },
        sunscreen: { name: "Ultra Light Daily Sunscreen", price: "Mulai Rp 55.000", link: "https://id.shp.ee/Q881rJH", img: scarlettSS },
        moisturizer: { name: "Brightly Ever After Cream", price: "Mulai Rp 58.000", link: "https://id.shp.ee/cg81XLk", img: scarlettMZ },
        serum: { name: "Brightly Ever After Serum", price: "Mulai Rp 58.000", link: "https://id.shp.ee/RBmbFNF", img: scarlettSM }
    },
    Skintific: {
        cleanser: { name: "5X Ceramide Low pH Cleanser", price: "Mulai Rp 89.000", link: "https://id.shp.ee/hh6c9Sv", img: skintificFW },
        sunscreen: { name: "5X Ceramide Serum Sunscreen", price: "Mulai Rp 89.000", link: "https://id.shp.ee/bFhyeV5", img: skintificSS },
        moisturizer: { name: "5X Ceramide Barrier Gel", price: "Mulai Rp 119.000", link: "https://id.shp.ee/iTUF5Ky", img: skintificMZ },
        serum: { name: "Symwhite 377 Dark Spot", price: "Mulai Rp 115.000", link: "https://id.shp.ee/RfD96LL", img: skintificSM }
    },
    Wardah: {
        cleanser: { name: "Crystal Secret Foaming Cleanser", price: "Mulai Rp 32.000", link: "https://id.shp.ee/uT8J8tJ", img: wardahFW },
        sunscreen: { name: "UV Shield Airy Smooth", price: "Mulai Rp 35.000", link: "https://id.shp.ee/msGzDu8", img: wardahSS },
        moisturizer: { name: "Crystal Secret Brightening Cream", price: "Mulai Rp 48.000", link: "https://id.shp.ee/dSbLxtp", img: wardahMZ },
        serum: { name: "Crystal Secret Dark Spot Serum", price: "Mulai Rp 75.000", link: "https://id.shp.ee/YDso9wj", img: wardahSM }
    }
};

export default individualProducts;