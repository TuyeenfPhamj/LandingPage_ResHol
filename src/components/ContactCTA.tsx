import { Mail, Send } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { FadeIn } from "./FadeIn";

export function ContactCTA() {
  return (
    <section className="contact-section" id="lien-he">
      <FadeIn className="contact-panel">
        <div className="contact-copy">
          <p className="section-label">06 / Liên hệ</p>
          <h2>Đặt lịch tư vấn miễn phí cho nhà hàng, khách sạn của bạn.</h2>
          <p>
            Gửi vài thông tin cơ bản về mô hình, nhu cầu và kênh liên hệ. DST sẽ giúp bạn xác định
            hướng thiết kế phù hợp trước khi chọn gói triển khai.
          </p>
          <div className="contact-proof">
            <span>Tư vấn miễn phí</span>
            <span>Phù hợp nhà hàng, khách sạn, resort, cafe</span>
            <span>Phản hồi theo thông tin bạn để lại</span>
          </div>
          <div className="contact-actions">
            <ActionButton href="#top" variant="light">
              Về đầu trang
            </ActionButton>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <p className="form-intro">Điền form trong khoảng 30 giây. Chỉ cần thông tin đủ để DST tư vấn đúng hướng.</p>
          <label>
            <span>Tên thương hiệu / cơ sở</span>
            <input type="text" name="brand" autoComplete="organization" placeholder="VD: Khách sạn ABC, Nhà hàng XYZ" />
          </label>
          <label>
            <span>Email hoặc số điện thoại</span>
            <input type="text" name="contact" autoComplete="email" placeholder="Email, số điện thoại hoặc Zalo" />
          </label>
          <label>
            <span>Nhu cầu chính</span>
            <select name="need" defaultValue="">
              <option value="" disabled>
                Chọn nhóm dịch vụ
              </option>
              <option>Tư vấn gói thiết kế phù hợp</option>
              <option>Thiết kế hình ảnh nhà hàng</option>
              <option>Thiết kế hình ảnh khách sạn / resort</option>
              <option>Bộ nhận diện chiến dịch / sự kiện</option>
              <option>Nội dung đặt bàn, đặt phòng</option>
            </select>
          </label>
          <label>
            <span>Điều bạn đang muốn cải thiện</span>
            <textarea name="message" rows={4} placeholder="VD: ít khách đặt bàn, hình ảnh chưa đẹp, chưa biết bắt đầu marketing từ đâu..." />
          </label>
          <button className="submit-button" type="submit">
            <Send size={16} />
            Gửi thông tin tư vấn
          </button>
          <p className="form-privacy">
            <Mail size={14} />
            Có thể bổ sung email, số điện thoại và fanpage chính thức tại đây.
          </p>
        </form>
      </FadeIn>
    </section>
  );
}
