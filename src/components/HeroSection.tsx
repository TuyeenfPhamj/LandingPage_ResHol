import { CalendarDays, Hotel, Utensils } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";
import { HeroShaderBackground } from "./HeroShaderBackground";

const heroSignals = [
  { label: "Nhà hàng", icon: Utensils },
  { label: "Khách sạn", icon: Hotel },
  { label: "Sự kiện", icon: CalendarDays },
];

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <HeroShaderBackground />
      <div className="hero-content mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-4 pb-10 pt-32 sm:px-6 lg:px-10 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div>
            <FadeIn delay={180}>
              <p className="hero-kicker">Tư vấn thiết kế cho nhà hàng - khách sạn</p>
            </FadeIn>
            <AnimatedHeading
              text="Khách nhìn vào là muốn đặt bàn, đặt phòng."
              className="hero-title"
            />
            <FadeIn delay={620}>
              <p className="hero-copy">
                Nếu nhà hàng, khách sạn hoặc resort của bạn có dịch vụ tốt nhưng hình ảnh chưa đủ thuyết phục,
                DST giúp bạn chọn đúng hướng thiết kế, làm rõ điểm đáng tiền và tạo bộ nội dung để khách dễ tin,
                dễ hỏi giá, dễ đặt lịch.
              </p>
            </FadeIn>
            <FadeIn className="mt-7 flex flex-wrap gap-3" delay={760}>
              <ActionButton href="#lien-he">Đặt lịch tư vấn miễn phí</ActionButton>
              <ActionButton href="#du-an" variant="light">
                Xem sản phẩm thực tế
              </ActionButton>
            </FadeIn>
          </div>
          <FadeIn className="hero-side" delay={840}>
            <div className="hero-side-card">
              <span className="hero-side-label">Dành cho chủ cơ sở dịch vụ</span>
              <strong>Không bắt đầu bằng “làm cho đẹp”. Bắt đầu bằng “khách cần thấy gì để chọn bạn”.</strong>
              <p>
                Buổi tư vấn giúp bạn biết nên ưu tiên menu, hình ảnh phòng nghỉ, bài đăng ưu đãi,
                hồ sơ sự kiện hay bộ nhận diện trước để không chi tiền lan man.
              </p>
              <div className="hero-signal-grid">
                {heroSignals.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span key={item.label}>
                      <Icon size={17} />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="hero-mini-card">
              <span>Tư vấn miễn phí</span>
              <strong>Nhận hướng đi rõ trước khi chọn gói thiết kế</strong>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
