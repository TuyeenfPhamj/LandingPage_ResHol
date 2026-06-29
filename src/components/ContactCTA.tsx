import { Send } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { FadeIn } from "./FadeIn";

export function ContactCTA() {
  return (
    <section className="contact-section" id="lien-he">
      <FadeIn className="contact-panel">
        <div className="contact-copy">
          <p className="section-label">06 / Liên hệ</p>
          <h2>Bắt đầu một bộ nội dung nhà hàng, khách sạn chỉn chu.</h2>
          <p>
            Cho DST biết mô hình dịch vụ, nhóm khách mục tiêu và điều bạn muốn khách cảm nhận.
            Đội ngũ sẽ định hướng nội dung, hình ảnh và nhịp triển khai phù hợp với thương hiệu.
          </p>
          <div className="contact-actions">
            <ActionButton href="#top" variant="light">
              Về đầu trang
            </ActionButton>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>Tên thương hiệu</span>
            <input type="text" name="brand" />
          </label>
          <label>
            <span>Nhu cầu chính</span>
            <select name="need" defaultValue="">
              <option value="" disabled>
                Chọn nhóm dịch vụ
              </option>
              <option>Ấn phẩm món ăn</option>
              <option>Hình ảnh khách sạn</option>
              <option>Bộ nhận diện chiến dịch</option>
              <option>Nội dung đặt bàn, đặt phòng</option>
            </select>
          </label>
          <label>
            <span>Ghi chú</span>
            <textarea name="message" rows={4} />
          </label>
          <button className="submit-button" type="submit">
            <Send size={16} />
            Gửi yêu cầu
          </button>
        </form>
      </FadeIn>
    </section>
  );
}
