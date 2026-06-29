import { reasons } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section className="section-shell why-section">
      <div className="content-grid why-content-grid">
        <FadeIn>
          <SectionHeading
            label="04 / Vì sao chọn DST"
            title="Giảm rủi ro khi thuê thiết kế, tăng sự rõ ràng trước khi triển khai."
            description="Điều khiến chủ nhà hàng, khách sạn băn khoăn thường không chỉ là đẹp hay không đẹp, mà là chi phí có xứng đáng không và sản phẩm có dùng được trong bán hàng thực tế không."
          />
        </FadeIn>
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <FadeIn className="why-card" key={reason.title} delay={index * 100}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
