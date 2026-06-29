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
          title="Các nhóm thiết kế giúp khách hiểu nhanh và quyết định nhanh hơn."
          description="Từ tư vấn định hướng đến thiết kế ấn phẩm, DST tập trung vào đúng những điểm ảnh hưởng tới quyết định đặt bàn, đặt phòng, tổ chức sự kiện và đánh giá chất lượng thương hiệu."
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
