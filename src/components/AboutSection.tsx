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
            label="01 / Giới thiệu"
            title="DST Marketing - Media cho nhà hàng và khách sạn."
            description="Nội dung được chắt lọc từ các bộ ấn phẩm nhà hàng, khách sạn đã cung cấp: món ăn, không gian, ưu đãi đặt bàn, hình ảnh lưu trú và nhận diện truyền thông."
          />
          <div className="mt-8">
            <ActionButton href="#dich-vu">Xem dịch vụ</ActionButton>
          </div>
        </FadeIn>
        <FadeIn className="about-collage" delay={140}>
          <img className="about-main" src={grandviewHall} alt="Không gian khách sạn Grand View Palace Hạ Long" loading="lazy" />
          <img className="about-small" src={hoCoTien} alt="Ấn phẩm truyền thông món ăn nhà hàng Hồ Cô Tiên" loading="lazy" />
          <div className="about-note">
            <ArrowDownRight size={20} />
            <span>Nội dung cần rõ món, rõ phòng, rõ không gian và rõ lý do để khách hành động.</span>
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
