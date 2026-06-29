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
          title={
            <>
              Những hạng mục truyền thông giúp khách hàng ra quyết định{" "}
              <span className="gradient-text">đặt bàn</span>,{" "}
              <span className="gradient-text">đặt phòng</span>.
            </>
          }
          description="DST Group triển khai các hạng mục truyền thông cho nhà hàng và khách sạn, từ ấn phẩm món ăn, hình ảnh không gian đến nhận diện chiến dịch và nội dung hỗ trợ đặt bàn, đặt phòng."
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
