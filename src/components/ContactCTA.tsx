import { Mail, Send } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { FadeIn } from "./FadeIn";

export function ContactCTA() {
  return (
    <section className="contact-section" id="lien-he">
      <FadeIn className="contact-panel">
        <div className="contact-copy">
          <p className="section-label">06 / Liên hệ</p>
          <h2>Nhận tư vấn miễn phí cho hạng mục nên làm trước.</h2>
          <p>
            Gửi thông tin cơ bản về nhà hàng, khách sạn, resort hoặc quán cafe của bạn. DST sẽ xem nhu cầu hiện tại,
            mục tiêu khách hàng và gợi ý hướng thiết kế phù hợp trước khi bạn quyết định chi phí.
          </p>
          <div className="contact-proof">
            <span>Không mất phí tư vấn ban đầu</span>
            <span>Phù hợp nhà hàng, khách sạn, resort, quán cafe</span>
            <span>Biết nên ưu tiên hạng mục nào trước</span>
          </div>
          <div className="contact-actions">
            <ActionButton href="#top" variant="light">
              Về đầu trang
            </ActionButton>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <p className="form-intro">Điền nhanh trong khoảng 30 giây. Càng rõ tình trạng, phần tư vấn càng sát nhu cầu.</p>
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
              <option>Tư vấn hướng thiết kế phù hợp</option>
              <option>Thiết kế hình ảnh nhà hàng</option>
              <option>Thiết kế hình ảnh khách sạn / resort</option>
              <option>Bộ ấn phẩm chiến dịch / sự kiện</option>
              <option>Nội dung đặt bàn, đặt phòng</option>
            </select>
          </label>
          <label>
            <span>Vấn đề bạn muốn cải thiện</span>
            <textarea name="message" rows={4} placeholder="VD: ít khách đặt bàn, hình ảnh chưa đẹp, chưa biết bắt đầu marketing từ đâu..." />
          </label>
          <button className="submit-button" type="submit">
            <Send size={16} />
            Nhận tư vấn miễn phí
          </button>
          <p className="form-privacy">
            <Mail size={14} />
            Thông tin này chỉ dùng để liên hệ tư vấn theo yêu cầu của bạn.
          </p>
        </form>
      </FadeIn>
    </section>
  );
}
