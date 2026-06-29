import { reasons } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section className="section-shell why-section">
      <div className="content-grid why-content-grid">
        <FadeIn>
          <SectionHeading
            label="04 / Khác biệt"
            title={
              <>
                DST giúp thương hiệu của bạn trở thành{" "}
                <span className="gradient-text gradient-text-light">lựa chọn rõ ràng hơn</span>.
              </>
            }
            description="DST xây dựng nội dung và hình ảnh để thương hiệu làm rõ giá trị dịch vụ, tạo thiện cảm và thúc đẩy khách hàng đưa ra quyết định."
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
