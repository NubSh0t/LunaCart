export function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-summary">
        <div className="summary-score">
          <strong>4.4</strong>
          <span>Average rating</span>
        </div>

        <div className="score-breakdown">
          <div><span>5 star</span><div className="bar"><i style={{ width: '72%' }} /></div><b>72%</b></div>
          <div><span>4 star</span><div className="bar"><i style={{ width: '18%' }} /></div><b>18%</b></div>
          <div><span>3 star</span><div className="bar"><i style={{ width: '7%' }} /></div><b>7%</b></div>
          <div><span>2 star</span><div className="bar"><i style={{ width: '2%' }} /></div><b>2%</b></div>
          <div><span>1 star</span><div className="bar"><i style={{ width: '1%' }} /></div><b>1%</b></div>
        </div>
      </div>

      <div className="review-grid compact-grid">
        <article className="review-card">
          <div className="stars">★★★★★</div>
          <p>“Great sound and very comfortable for all-day wear.”</p>
          <div className="reviewer">
            <strong>Sarah M.</strong>
            <span>Verified buyer</span>
          </div>
        </article>

        <article className="review-card">
          <div className="stars">★★★★★</div>
          <p>“Looks premium and feels lighter than expected.”</p>
          <div className="reviewer">
            <strong>James T.</strong>
            <span>Verified buyer</span>
          </div>
        </article>

        <article className="review-card">
          <div className="stars">★★★★☆</div>
          <p>“Excellent for commuting and work calls.”</p>
          <div className="reviewer">
            <strong>Aisha R.</strong>
            <span>Verified buyer</span>
          </div>
        </article>
      </div>
    </section>
  );
}
