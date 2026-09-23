const productImage = new URL('../assets/headphones.jpg', import.meta.url).href;

const specs = [
  { label: 'Dimensions', value: '18.5 x 12.3 x 4.5 cm' },
  { label: 'Weight', value: '420 g' },
  { label: 'Battery', value: '32 hours' },
  { label: 'Connectivity', value: 'Bluetooth 5.3' },
  { label: 'Color', value: 'Midnight Black' },
];

export function ProductLayout() {
  return (
    <>
      <section className="product-layout" id="products">
        <div className="gallery-panel">
          <div className="product-badge-row">
            <span className="sale-pill">Top Rated</span>
            <span className="stock-pill">In stock</span>
          </div>

          <div className="product-image-frame">
            <img src={productImage} alt="Premium wireless headphones" />
          </div>

          <div className="thumb-row" aria-label="Product image thumbnails">
            <span className="thumb active" />
            <span className="thumb thumb-two" />
            <span className="thumb thumb-three" />
          </div>
        </div>

        <aside className="purchase-panel">
          <div className="product-heading">
            <span className="eyebrow">New Arrival</span>
            <h1>Luna X1 Wireless Headphones</h1>
          </div>

          <div className="rating-row">
            <span className="stars">★★★★★</span>
            <span>4.8 (2,184 reviews)</span>
          </div>

          <div className="price-block">
            <span className="price">$299</span>
            <span className="old-price">$399</span>
          </div>

          <div className="shipping-box">
            <strong>Free shipping</strong>
            <span>Delivered in 2-4 days</span>
          </div>

          <div className="summary-box">
            <h3>Summary</h3>
            <p>
              Premium wireless audio with rich bass, noise isolation, and a lightweight
              design built for everyday comfort.
            </p>
          </div>

          <div className="buy-actions">
            <button className="primary-btn large-btn">Buy now</button>
            <button className="secondary-btn large-btn">Add to cart</button>
          </div>
        </aside>
      </section>

      <section className="specs-section" id="specifications">
        <div className="specs-header">
          <span className="eyebrow">Further Details</span>
          <h3>Product specifications</h3>
        </div>

        <div className="specs-grid">
          {specs.map((item) => (
            <div className="spec-item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
