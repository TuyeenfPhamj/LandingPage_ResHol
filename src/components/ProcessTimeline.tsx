import { processSteps } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="section-shell muted-band" id="quy-trinh">
      <FadeIn>
        <SectionHeading
          label="05 / Quy trình"
          title="Một nhịp triển khai gọn cho nội dung nhà hàng, khách sạn."
          description="Quy trình tập trung vào việc nhận thông tin dịch vụ, định hướng hình ảnh, thiết kế ấn phẩm và điều chỉnh theo nhu cầu đăng tải thực tế."
          align="center"
        />
      </FadeIn>
      <div className="timeline">
        {processSteps.map((step, index) => (
          <FadeIn className="timeline-item" key={step.title} delay={index * 90}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
