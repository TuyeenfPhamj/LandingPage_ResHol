import { ArrowDownRight } from "lucide-react";
import grandviewHall from "../assets/grandview-hall.jpg";
import hoCoTien from "../assets/ho-co-tien-social.jpg";
import { proofPoints } from "../data/siteData";
import { ActionButton } from "./ActionButton";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="section-shell" id="gioi-thieu">
      <div className="content-grid">
        <FadeIn>
          <SectionHeading
            label="01 / Vấn đề"
            title="Cơ sở đẹp nhưng hình ảnh chưa đủ thuyết phục, khách vẫn lướt qua."
            description="Nhiều nhà hàng, khách sạn và quán cafe có sản phẩm tốt nhưng thiếu bộ hình ảnh, thông điệp và ấn phẩm đủ rõ để khách tin tưởng. DST giúp bạn biến món ăn, phòng nghỉ, không gian và dịch vụ thành nội dung dễ hiểu, dễ chọn và dễ liên hệ."
          />
          <div className="mt-8">
            <ActionButton href="#lien-he">Nhận định hướng miễn phí</ActionButton>
          </div>
        </FadeIn>
        <FadeIn className="about-collage" delay={140}>
          <img className="about-main" src={grandviewHall} alt="Không gian khách sạn Grand View Palace Hạ Long" loading="lazy" />
          <img className="about-small" src={hoCoTien} alt="Ấn phẩm truyền thông món ăn nhà hàng Hồ Cô Tiên" loading="lazy" />
          <div className="about-note">
            <ArrowDownRight size={20} />
            <span>Rõ món, rõ phòng, rõ không gian, rõ lý do để khách hành động.</span>
          </div>
        </FadeIn>
      </div>
      <div className="proof-strip">
        {proofPoints.map((point) => {
          const Icon = point.icon;
          return (
            <span key={point.label}>
              <Icon size={16} />
              {point.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
