import React, { type ReactNode } from "react";

const categories = [
  "Fashion",
  "Elektronik",
  "Kecantikan",
  "Sepatu",
  "Tas",
  "Aksesoris",
  "Rumah Tangga",
  "Lainnya",
];

const products = [
  {
    name: "Tas Wanita Casual Premium",
    price: "Rp129.000",
    oldPrice: "Rp199.000",
    discount: "35%",
    rating: "4.9",
    sold: "1,2rb",
    image: "https://placehold.co/300x300?text=Product+1",
  },
  {
    name: "Sepatu Sneakers Casual",
    price: "Rp189.000",
    oldPrice: "Rp250.000",
    discount: "24%",
    rating: "4.8",
    sold: "850",
    image: "https://placehold.co/300x300?text=Product+2",
  },
  {
    name: "Jam Tangan Fashion",
    price: "Rp99.000",
    oldPrice: "Rp150.000",
    discount: "34%",
    rating: "4.9",
    sold: "2rb",
    image: "https://placehold.co/300x300?text=Product+3",
  },
  {
    name: "Kaos Basic Premium",
    price: "Rp79.000",
    oldPrice: "Rp120.000",
    discount: "34%",
    rating: "4.7",
    sold: "500",
    image: "https://placehold.co/300x300?text=Product+4",
  },
];

type LayoutMode = "app" | "standalone";

type AppProps = {
  layout?: LayoutMode;
};

export default function App({ layout = "app" }: AppProps) {
  return (
    <>
      <style>{`
        /* Layout Baseline V1: 100% height, no viewport-height units */

        html,
        body,
        #root {
          width: 100%;
          height: 100%;
          margin: 0;
        }

        #root {
          display: flex;
          flex-direction: column;
          max-width: 500px;
          margin-inline: auto;
          overflow: hidden;
          font-family: Arial, sans-serif;
          background: #f5f5f5;
          color: #222;
        }

        .app-shell {
          display: flex;
          width: 100%;
          height: 100%;
          flex: 1 1 0%;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }

        .app-main,
        .standalone-main {
          flex: 1 1 0%;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .app-header {
          flex-shrink: 0;
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
        }

        .app-header h1 {
          margin: 0;
          font-size: 20px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-actions button {
          border: none;
          background: transparent;
          padding: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .content {
          padding: 12px;
        }

        .search-bar {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 14px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          font-size: 14px;
          outline: none;
        }

        .banner {
          margin-top: 14px;
          padding: 24px 18px;
          min-height: 110px;
          border-radius: 10px;
          background: linear-gradient(120deg, #ee4d2d, #ff9a45);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .banner h2 {
          margin: 0 0 8px;
          font-size: 24px;
        }

        .banner p {
          margin: 0;
          font-size: 14px;
        }

        .section {
          margin-top: 18px;
          padding: 14px;
          border-radius: 10px;
          background: white;
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 17px;
        }

        .section-title span {
          font-size: 12px;
          color: #ee4d2d;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px 8px;
        }

        .category-item {
          text-align: center;
          font-size: 12px;
          color: #444;
        }

        .category-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 8px;
          border-radius: 50%;
          background: #fff1ed;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .product-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #eee;
          border-radius: 8px;
          background: white;
        }

        .product-image {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
          background: #f5f5f5;
        }

        .product-info {
          padding: 10px;
        }

        .product-name {
          min-height: 36px;
          margin: 0 0 8px;
          font-size: 13px;
          line-height: 1.4;
        }

        .product-price {
          font-size: 16px;
          font-weight: bold;
          color: #ee4d2d;
        }

        .product-old-price {
          margin-top: 4px;
          font-size: 11px;
          color: #999;
          text-decoration: line-through;
        }

        .product-discount {
          margin-left: 5px;
          color: #ee4d2d;
          font-size: 11px;
        }

        .product-meta {
          margin-top: 8px;
          font-size: 11px;
          color: #777;
        }

        .app-footer {
          flex-shrink: 0;
          padding: 16px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          background: white;
        }

        .app-footer p {
          margin: 0;
          font-size: 13px;
          color: #666;
        }

        .bottom-nav {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 12px 8px;
          border-top: 1px solid #e5e7eb;
          background: white;
        }

        .bottom-nav button {
          flex: 1;
          padding: 8px;
          border: none;
          background: transparent;
          color: #666;
          font-size: 14px;
          cursor: pointer;
        }
      `}</style>

      {layout === "standalone" ? (
        <StandalonePage>
          <StorefrontContent />
        </StandalonePage>
      ) : (
        <AppShell>
          <StorefrontContent />
        </AppShell>
      )}
    </>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>My App</h1>
        <div className="header-actions">
          <button type="button">Cart</button>
          <button type="button">Profile</button>
        </div>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <p>© 2026 My App</p>
      </footer>

      <nav className="bottom-nav">
        <button type="button">Home</button>
        <button type="button">Catalog</button>
        <button type="button">Livechat</button>
      </nav>
    </div>
  );
}

export function StandalonePage({ children }: { children: ReactNode }) {
  return <main className="standalone-main">{children}</main>;
}

function StorefrontContent() {
  return (
    <section className="content">
      <input
        className="search-bar"
        type="search"
        placeholder="Cari produk, merek, dan lainnya..."
      />

      <section className="banner">
        <h2>Big Sale!</h2>
        <p>Temukan produk favorit dengan harga terbaik.</p>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Kategori</h2>
          <span>Lihat Semua</span>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-item" key={category}>
              <div className="category-icon">
                {["👗", "📱", "💄", "👟", "👜", "⌚", "🏠", "•••"][index]}
              </div>
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>⚡ Flash Sale</h2>
          <span>Lihat Semua</span>
        </div>

        <div className="product-grid">
          {products.slice(0, 2).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Rekomendasi Untukmu</h2>
          <span>Lihat Semua</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="product-card">
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <p className="product-name">{product.name}</p>

        <div className="product-price">{product.price}</div>

        <div className="product-old-price">
          {product.oldPrice}
          <span className="product-discount">-{product.discount}</span>
        </div>

        <div className="product-meta">
          ⭐ {product.rating} · Terjual {product.sold}
        </div>
      </div>
    </article>
  );
}
