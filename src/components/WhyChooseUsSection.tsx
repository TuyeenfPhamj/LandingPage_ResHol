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
            title="Làm rõ lý do để khách chọn nơi ăn và nơi ở."
            description="Từ món ăn, phòng nghỉ, đặt bàn, đặt phòng đến giới thiệu không gian, mỗi nội dung cần có vai trò rõ trong hành trình ra quyết định."
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
