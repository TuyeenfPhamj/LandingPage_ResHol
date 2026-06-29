import { processSteps } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="section-shell muted-band" id="quy-trinh">
      <FadeIn>
        <SectionHeading
          label="05 / Quy trình"
          title="Tư vấn nhanh, triển khai rõ, điều chỉnh theo phản hồi thật."
          description="Bạn bắt đầu bằng một buổi trao đổi miễn phí. DST giúp xác định nhu cầu, đề xuất hướng thiết kế và triển khai bộ nội dung phù hợp với mục tiêu kinh doanh."
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
