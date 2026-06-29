import { processSteps } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="section-shell muted-band" id="quy-trinh">
      <FadeIn>
        <SectionHeading
          label="05 / Quy trình"
          title={
            <>
              Quy trình gọn để nội dung sớm được <span className="gradient-text">đưa vào sử dụng</span>.
            </>
          }
          description="DST triển khai từ bước tiếp nhận thông tin dịch vụ, định hướng hình ảnh, thiết kế ấn phẩm đến tinh chỉnh theo nhu cầu sử dụng thực tế của từng thương hiệu."
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
