import {
  BedDouble,
  CalendarDays,
  Camera,
  Handshake,
  Hotel,
  MessageCircle,
  PenTool,
  Sparkles,
  Utensils,
} from "lucide-react";
import type { GalleryItem, NavItem, ProcessStep, Reason, Service } from "../types/content";
import grandviewEvent from "../assets/grandview-event.jpg";
import grandviewHall from "../assets/grandview-hall.jpg";
import hoCoTien from "../assets/ho-co-tien-social.jpg";
import thienAnh from "../assets/thien-anh-social.jpg";

export const navItems: NavItem[] = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Dự án", href: "#du-an" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const services: Service[] = [
  {
    title: "Thiết kế hình ảnh nhà hàng",
    tag: "Nhà hàng",
    description:
      "Thiết kế menu, hình món, set tiệc và ưu đãi theo cách khách xem là hiểu món nào đáng thử, không gian nào phù hợp và vì sao nên đặt bàn ngay.",
    image: hoCoTien,
    icon: Utensils,
  },
  {
    title: "Thiết kế hình ảnh khách sạn",
    tag: "Khách sạn",
    description:
      "Trình bày phòng nghỉ, sảnh, tiện ích và trải nghiệm lưu trú rõ ràng hơn để khách thấy giá trị trước khi hỏi giá hoặc đặt phòng.",
    image: grandviewHall,
    icon: Hotel,
  },
  {
    title: "Bộ ấn phẩm cho chiến dịch",
    tag: "Marketing",
    description:
      "Thiết kế bài đăng, banner, feedback và ưu đãi cho khai trương, mùa du lịch, tiệc công ty, sinh nhật hoặc gói lưu trú để chiến dịch đồng bộ hơn.",
    image: thienAnh,
    icon: PenTool,
  },
  {
    title: "Tư vấn hướng triển khai",
    tag: "Tư vấn",
    description:
      "DST xem tình trạng hiện tại, mục tiêu và ngân sách dự kiến, rồi gợi ý hạng mục nên ưu tiên để tránh mua gói quá rộng hoặc lệch nhu cầu.",
    image: grandviewEvent,
    icon: Handshake,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "Hình ảnh giới thiệu không gian khách sạn, sảnh phục vụ và trải nghiệm lưu trú để khách dễ hình dung trước khi hỏi phòng.",
    image: grandviewHall,
    wide: true,
  },
  {
    title: "Nhà hàng Hồ Cô Tiên",
    caption: "Ấn phẩm món ăn, ưu đãi đặt bàn và nội dung giúp khách dễ chọn món, chọn dịp và liên hệ nhà hàng.",
    image: hoCoTien,
  },
  {
    title: "Nhà hàng Thiên Anh",
    caption: "Nội dung nhận diện nhà hàng, chương trình ưu đãi và bài đăng giúp thương hiệu xuất hiện chỉn chu hơn trên kênh bán hàng.",
    image: thienAnh,
  },
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "Bộ hình ảnh phục vụ truyền thông cho phòng nghỉ, khu dịch vụ và nhu cầu tổ chức sự kiện tại khách sạn.",
    image: grandviewEvent,
  },
];

export const reasons: Reason[] = [
  {
    title: "Hiểu hành vi khách ngành dịch vụ",
    description:
      "Nội dung tập trung vào điều khách thật sự cân nhắc: món ăn có hấp dẫn không, phòng có đáng tiền không, không gian có phù hợp cho dịp của họ không.",
  },
  {
    title: "Biết hạng mục nào nên ưu tiên",
    description:
      "Bạn không phải tự đoán nên làm menu, ảnh phòng, bài đăng hay hồ sơ sự kiện trước. Buổi tư vấn giúp xác định thứ tự ưu tiên theo mục tiêu bán hàng.",
  },
  {
    title: "Có sản phẩm thực tế",
    description:
      "Khách hàng có thể xem hình ảnh từ các dự án như Grand View Palace Hạ Long Hotel, Nhà hàng Hồ Cô Tiên và Nhà hàng Thiên Anh trước khi trao đổi.",
  },
  {
    title: "Giảm rủi ro khi thuê",
    description:
      "Bạn được trao đổi định hướng trước, xem sản phẩm thực tế và có bước phản hồi để hạn chế rủi ro chi phí bỏ ra không đúng kỳ vọng.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Hiểu mô hình và mục tiêu",
    description: "Bạn chia sẻ loại hình kinh doanh, nhóm khách muốn thu hút và vấn đề đang gặp: ít khách hỏi, ảnh chưa đẹp hay nội dung chưa rõ.",
  },
  {
    title: "Đề xuất thứ tự ưu tiên",
    description: "DST gợi ý phong cách hình ảnh, thông điệp chính và hạng mục nên triển khai trước để phù hợp mục tiêu và ngân sách.",
  },
  {
    title: "Thiết kế ấn phẩm sử dụng được",
    description: "Triển khai hình món, phòng nghỉ, banner, bài đăng, feedback hoặc nội dung đặt bàn, đặt phòng theo hướng đã thống nhất.",
  },
  {
    title: "Hoàn thiện để bàn giao",
    description: "Điều chỉnh câu chữ, bố cục và điểm nhấn để nội dung sẵn sàng dùng trên fanpage, profile, landing page hoặc kênh bán hàng.",
  },
];

export const proofPoints = [
  { label: "Nhà hàng", icon: Utensils },
  { label: "Khách sạn", icon: Hotel },
  { label: "Resort", icon: Sparkles },
  { label: "Quán cafe", icon: Camera },
  { label: "Sự kiện", icon: CalendarDays },
  { label: "Đặt phòng", icon: BedDouble },
  { label: "Social", icon: MessageCircle },
  { label: "Tư vấn miễn phí", icon: Handshake },
];
