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
              <p className="hero-kicker">DST Marketing - Media | Restaurant & Hotel Design</p>
            </FadeIn>
            <AnimatedHeading
              text="Chọn đúng gói thiết kế cho nhà hàng, khách sạn của bạn."
              className="hero-title"
            />
            <FadeIn delay={620}>
              <p className="hero-copy">
                DST tư vấn miễn phí và thiết kế bộ hình ảnh, ấn phẩm, nội dung truyền thông cho nhà hàng,
                khách sạn, resort và quán cafe. Bạn có định hướng rõ trong thời gian ngắn trước khi đầu tư
                vào menu, social post, chương trình đặt bàn, đặt phòng hoặc tổ chức sự kiện.
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
              <strong>Từ hình ảnh rời rạc đến bộ nhận diện có thể bán hàng.</strong>
              <p>
                Làm rõ món ăn, phòng nghỉ, không gian, ưu đãi và lý do để khách đặt bàn,
                đặt phòng hoặc hỏi lịch tổ chức sự kiện.
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
              <strong>Chọn hướng thiết kế phù hợp trước khi chi tiền</strong>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
