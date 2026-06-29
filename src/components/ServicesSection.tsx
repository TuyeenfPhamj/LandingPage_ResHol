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
          title="Nội dung cho món ăn, không gian và trải nghiệm lưu trú."
          description="Các nhóm dịch vụ được thu hẹp vào đúng mảng nhà hàng - khách sạn: ấn phẩm món ăn, hình ảnh khách sạn, bộ nhận diện chiến dịch và nội dung đặt bàn, đặt phòng."
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
