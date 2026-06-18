import React, { useState } from 'react';

function ProductCard({ title, type, items, linkText }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      
      {type === 'single' && (
        <div className="single-layout">
          <img src={items[0].image} alt={title} />
        </div>
      )}

      {type === 'quad' && (
        <div className="quad-layout">
          {items.map((item, index) => (
            <div key={index} className="quad-item">
              <div className="quad-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      <a href="#" className="card-link">{linkText}</a>
    </div>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  const amazonCards = [
    {
      title: "Get your game on",
      type: "single",
      linkText: "Shop gaming",
      items: [
        { image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2026/Gaming_26/Fuji_Gaming_SingleImageCard_C-1._SY304_CB762596570_.jpg" }
      ]
    },
    {
      title: "Shop Fashion for less",
      type: "quad",
      linkText: "See all deals",
      items: [
        { name: "Jeans under ₹1,499", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" },
        { name: "Tops under ₹799", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB624172947_.jpg" },
        { name: "Dresses under ₹1,999", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB624172947_.jpg" },
        { name: "Shoes under ₹2,499", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" }
      ]
    },
    {
      title: "Top categories in Kitchen",
      type: "quad",
      linkText: "Explore all products in Kitchen",
      items: [
        { name: "Cooker", image: "https://m.media-amazon.com/images/I/313wAT6Iy2L._SY160_.jpg" },
        { name: "Mixer Grinder", image: "https://m.media-amazon.com/images/I/21W7-lndINL._SY75_.jpg" },
        { name: "Pots & Pans", image: "https://m.media-amazon.com/images/I/21B-NkA9p-L._SY75_.jpg" },
        { name: "Electric Kettles", image: "https://m.media-amazon.com/images/I/217GQ1a2QzL._SY75_.jpg" }
      ]
    },
    {
      title: "Up to 60% off | Electronics",
      type: "quad",
      linkText: "See all tech items",
      items: [
        { name: "Smartwatches", image: "https://m.media-amazon.com/images/I/71cMPm6h7eL._AC_UY218_.jpg" },
        { name: "Headphones", image: "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_UY218_.jpg" },
        { name: "Speakers", image: "https://m.media-amazon.com/images/I/717mPHAFf6L._AC_UY218_.jpg" },
        { name: "Computer Hard drives", image: "https://m.media-amazon.com/images/I/41OUh0ZU1NL._AC_UY218_.jpg" }
      ]
    },
    {
      title: "Revamp your home | Decor",
      type: "quad",
      linkText: "Explore home collection",
      items: [
        { name: "Cushion Covers", image: "https://m.media-amazon.com/images/I/81XpsL1phCL._AC_UL320_.jpg" },
        { name: "Wall Arts", image: "https://m.media-amazon.com/images/I/71OWjMmpHkL._AC_UL320_.jpg" },
        { name: "Home Lighting", image: "https://m.media-amazon.com/images/I/818rDp7PDmL._AC_UL320_.jpg" },
        { name: "Storage Boxes", image: "https://m.media-amazon.com/images/I/71-K+JK60JL._AC_UL320_.jpg" }
      ]
    },
    {
      title: "Appliances for your home",
      type: "single",
      linkText: "Shop refrigerators & more",
      items: [
        { image: "https://m.media-amazon.com/images/I/61RLdl9-w9L._AC_UY218_.jpg" }
      ]
    },
    {
      title: "Automotive essentials",
      type: "quad",
      linkText: "See car & bike accessories",
      items: [
        { name: "Cleaning Gel", image: "https://m.media-amazon.com/images/I/71TMsCua76L._AC_UL320_.jpg" },
        { name: "Car Vacuum", image: "https://m.media-amazon.com/images/I/61rqqQdU2fL._AC_UY218_.jpg" },
        { name: "Tyre Inflators", image: "https://m.media-amazon.com/images/I/61Nj5ijGAiL._AC_UY218_.jpg" },
        { name: "Air Freshners", image: "https://m.media-amazon.com/images/I/81YGfqtKWEL._AC_UL320_.jpg" }
      ]
    },
    {
      title: "Value packs | Daily essentials",
      type: "single",
      linkText: "Shop grocery essentials",
      items: [
        { image: "https://m.media-amazon.com/images/I/81ak1c-y16L._AC_UY218_.jpg" }
      ]
    }
  ];

  return (
    <div className="app-container">

      <nav className="navbar">
        <img className="nav-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
        <div className="nav-search">
          <input type="text" className="search-input" placeholder="Search Amazon.in..." />
          <button className="search-button">🔍</button>
        </div>
        <div className="nav-links">
          <div className="nav-item">
            <span className="line-one">Hello, Sign in</span>
            <span className="line-two">Account & Lists</span>
          </div>
          <div className="nav-item">
            <span className="line-one">Returns</span>
            <span className="line-two">& Orders</span>
          </div>
          <div className="nav-cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </nav>

      <div className="banner-container">
        <img className="banner-image" src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="Banner" />
      </div>

      <main className="product-grid">
        {amazonCards.map((card, index) => (
          <ProductCard 
            key={index}
            title={card.title}
            type={card.type}
            items={card.items}
            linkText={card.linkText}
          />
        ))}
      </main>
    </div>
  );
}

export default App;