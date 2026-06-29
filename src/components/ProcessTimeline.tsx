import { processSteps } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="section-shell muted-band" id="quy-trinh">
      <FadeIn>
        <SectionHeading
          label="05 / Quy trình"
          title="Quy trình rõ từ tư vấn đến bàn giao."
          description="DST bắt đầu từ tình trạng hiện tại, mục tiêu khách hàng và ngân sách dự kiến, rồi đề xuất thứ tự ưu tiên: hình ảnh, menu, bài đăng, hồ sơ sự kiện hay nội dung đặt phòng."
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
