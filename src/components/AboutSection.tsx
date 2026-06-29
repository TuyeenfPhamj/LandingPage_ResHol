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
            label="01 / Vấn đề cần giải quyết"
            title="Khách không chỉ xem ảnh đẹp. Họ cần đủ lý do để chọn bạn."
            description="Một tấm hình mờ, menu khó đọc hoặc bài đăng thiếu thông tin có thể làm khách bỏ qua dù dịch vụ tốt. DST giúp bạn trình bày món ăn, phòng nghỉ, không gian và ưu đãi rõ ràng hơn để khách hiểu giá trị trước khi nhắn tin."
          />
          <div className="mt-8">
            <ActionButton href="#lien-he">Nhận tư vấn miễn phí</ActionButton>
          </div>
        </FadeIn>
        <FadeIn className="about-collage" delay={140}>
          <img className="about-main" src={grandviewHall} alt="Không gian khách sạn Grand View Palace Hạ Long" loading="lazy" />
          <img className="about-small" src={hoCoTien} alt="Ấn phẩm truyền thông món ăn nhà hàng Hồ Cô Tiên" loading="lazy" />
          <div className="about-note">
            <ArrowDownRight size={20} />
            <span>Rõ món, rõ phòng, rõ giá trị, rõ bước liên hệ.</span>
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
