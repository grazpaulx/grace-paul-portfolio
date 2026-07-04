import { galleryPhotos } from "@/lib/data";

export default function Gallery() {
  // Duplicate the list so the CSS marquee can loop seamlessly.
  const loop = [...galleryPhotos, ...galleryPhotos];

  return (
    <section className="gallery" aria-label="Photo gallery">
      <div className="container" style={{ marginBottom: 28 }}>
        <span className="section__index">08 — Moments</span>
        <h2 className="section__title">From the field</h2>
      </div>

      <div className="gallery__track">
        {loop.map((photo, i) => (
          <div className="gallery__item" key={i}>
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <p className="gallery__caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
