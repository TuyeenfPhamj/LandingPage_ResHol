import { useState } from "react";
import { X } from "lucide-react";
import { galleryItems } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function ExperienceGallery() {
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);

  return (
    <section className="section-shell" id="du-an">
      <div className="gallery-heading">
        <FadeIn>
          <SectionHeading
            label="03 / Dự án tiêu biểu"
            title="Các dự án truyền thông DST đã triển khai cho nhà hàng và khách sạn."
            description="Từ hình ảnh, ấn phẩm đến nội dung truyền thông, DST đồng hành cùng các thương hiệu nhà hàng và khách sạn trong việc xây dựng trải nghiệm thương hiệu rõ ràng, nhất quán."
          />
        </FadeIn>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <button
            className={`gallery-card ${item.wide ? "wide" : ""}`}
            key={item.title}
            type="button"
            onClick={() => setActive(item)}
          >
            <img src={item.image} alt={item.title} loading={index === 0 ? "eager" : "lazy"} />
            <span>
              <strong>{item.title}</strong>
              {item.caption}
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title}>
          <button className="icon-button" type="button" onClick={() => setActive(null)} aria-label="Đóng ảnh">
            <X size={20} />
          </button>
          <img src={active.image} alt={active.title} />
          <p>{active.caption}</p>
        </div>
      ) : null}
    </section>
  );
}
