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
            title="Thiết kế cần giúp khách hiểu và hành động, không chỉ nhìn cho đẹp."
            description="Điều chủ nhà hàng, khách sạn thường lo là chi phí có xứng đáng không, sản phẩm có đúng gu khách hàng không và có hỗ trợ bán hàng thật không. DST làm rõ nhu cầu, ưu tiên và hướng thể hiện trước khi triển khai."
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
