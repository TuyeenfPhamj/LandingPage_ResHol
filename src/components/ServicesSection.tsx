import { services } from "../data/siteData";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section className="section-shell muted-band" id="dich-vu">
      <FadeIn>
        <SectionHeading
          label="02 / Dịch vụ"
          title="Chọn đúng hạng mục cho mục tiêu hiện tại của bạn."
          description="Mỗi nhóm dịch vụ được định hướng theo mục tiêu cụ thể: tăng khách đặt bàn, tăng hỏi phòng, giới thiệu không gian sự kiện hoặc làm chiến dịch ưu đãi chỉn chu hơn."
          align="center"
        />
      </FadeIn>
      <div className="services-grid">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 90}>
            <ServiceCard service={service} index={index} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
