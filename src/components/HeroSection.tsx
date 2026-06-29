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
              <p className="hero-kicker">Thiết kế truyền thông cho nhà hàng - khách sạn</p>
            </FadeIn>
            <AnimatedHeading
              text="Làm hình ảnh đủ rõ để khách muốn đặt bàn, đặt phòng."
              className="hero-title"
            />
            <FadeIn delay={620}>
              <p className="hero-copy">
                DST giúp nhà hàng, khách sạn, resort và quán cafe trình bày món ăn, phòng nghỉ, không gian,
                ưu đãi và sự kiện theo cách khách hiểu nhanh giá trị, tin tưởng hơn và dễ để lại thông tin liên hệ.
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
              <strong>Không chỉ làm hình cho đẹp. Mỗi ấn phẩm cần giúp khách ra quyết định nhanh hơn.</strong>
              <p>
                Buổi tư vấn giúp bạn xác định hạng mục nên làm trước: menu, hình ảnh phòng nghỉ,
                bài đăng ưu đãi, hồ sơ sự kiện hay bộ nhận diện chiến dịch.
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
              <strong>Có hướng triển khai rõ trước khi đầu tư thiết kế</strong>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
