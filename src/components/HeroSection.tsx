import { BedDouble, Hotel, Utensils } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";
import { HeroShaderBackground } from "./HeroShaderBackground";

const heroSignals = [
  { label: "Nhà hàng", icon: Utensils },
  { label: "Khách sạn", icon: Hotel },
  { label: "Phòng nghỉ", icon: BedDouble },
];

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <HeroShaderBackground />
      <div className="hero-content mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-4 pb-10 pt-32 sm:px-6 lg:px-10 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div>
            <FadeIn delay={180}>
              <p className="hero-kicker">DST Marketing - Media</p>
            </FadeIn>
            <AnimatedHeading
              text="Nâng tầm hình ảnh nhà hàng và khách sạn."
              className="hero-title"
            />
            <FadeIn delay={620}>
              <p className="hero-copy">
                Dịch vụ tận tâm - nâng tầm thương hiệu qua các bộ nội dung cho món ăn,
                không gian khách sạn, chương trình ưu đãi và truyền thông mạng xã hội.
              </p>
            </FadeIn>
            <FadeIn className="mt-7 flex flex-wrap gap-3" delay={760}>
              <ActionButton href="#dich-vu">Khám phá dịch vụ</ActionButton>
              <ActionButton href="#du-an" variant="light">
                Xem dự án
              </ActionButton>
            </FadeIn>
          </div>
          <FadeIn className="hero-side" delay={840}>
            <div className="hero-side-card">
              <span className="hero-side-label">Định vị</span>
              <strong>Dịch vụ tận tâm - Nâng tầm thương hiệu</strong>
              <p>Truyền thông hình ảnh cho nhà hàng, khách sạn, ẩm thực và dịch vụ lưu trú.</p>
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
              <span>Restaurant & Hotel</span>
              <strong>Visual - Content - Social</strong>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
