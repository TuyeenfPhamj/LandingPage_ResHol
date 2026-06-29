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
          title="Bạn cần khách đặt bàn, đặt phòng hay hỏi lịch sự kiện?"
          description="Mỗi gói thiết kế được định hướng theo mục tiêu kinh doanh cụ thể. Không chỉ làm hình cho đẹp, mà giúp khách nhìn thấy lý do để chọn nhà hàng, khách sạn hoặc địa điểm của bạn."
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
