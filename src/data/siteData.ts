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
      "Làm menu, hình món, set tiệc và ưu đãi dễ hiểu hơn để khách thấy món nào đáng thử, không gian nào phù hợp và nên đặt bàn lúc nào.",
    image: hoCoTien,
    icon: Utensils,
  },
  {
    title: "Thiết kế hình ảnh khách sạn",
    tag: "Khách sạn",
    description:
      "Trình bày phòng nghỉ, sảnh, tiện ích và trải nghiệm lưu trú theo cách giúp khách yên tâm hơn trước khi hỏi giá hoặc đặt phòng.",
    image: grandviewHall,
    icon: Hotel,
  },
  {
    title: "Bộ nhận diện chiến dịch",
    tag: "Marketing",
    description:
      "Thiết kế bài đăng, banner, feedback và ưu đãi cho từng dịp như khai trương, mùa du lịch, tiệc công ty, sinh nhật hoặc gói lưu trú.",
    image: thienAnh,
    icon: PenTool,
  },
  {
    title: "Tư vấn gói phù hợp",
    tag: "Tư vấn",
    description:
      "Bạn nói rõ tình trạng hiện tại, DST gợi ý nên làm phần nào trước để tránh mua gói quá rộng hoặc không đúng nhu cầu.",
    image: grandviewEvent,
    icon: Handshake,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "Hình ảnh giới thiệu không gian khách sạn, sảnh phục vụ và trải nghiệm lưu trú cao cấp.",
    image: grandviewHall,
    wide: true,
  },
  {
    title: "Nhà hàng Hồ Cô Tiên",
    caption: "Ấn phẩm món ăn, ưu đãi đặt bàn và nội dung giúp khách dễ hình dung trước khi đến nhà hàng.",
    image: hoCoTien,
  },
  {
    title: "Nhà hàng Thiên Anh",
    caption: "Nội dung nhận diện nhà hàng, chương trình ưu đãi và bài đăng tăng tương tác với khách hàng.",
    image: thienAnh,
  },
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "Bộ hình ảnh phục vụ truyền thông cho phòng nghỉ, khu vực dịch vụ và nhu cầu tổ chức sự kiện.",
    image: grandviewEvent,
  },
];

export const reasons: Reason[] = [
  {
    title: "Hiểu đúng ngành dịch vụ",
    description:
      "Nội dung tập trung vào thứ khách thật sự cân nhắc: món ăn có hấp dẫn không, phòng có đáng tiền không, không gian có phù hợp không.",
  },
  {
    title: "Biết nên làm gì trước",
    description:
      "Bạn không phải đoán nên làm menu, ảnh phòng, bài đăng hay hồ sơ sự kiện trước. Buổi tư vấn giúp xác định thứ tự ưu tiên.",
  },
  {
    title: "Có sản phẩm thực tế",
    description:
      "Landing page sử dụng các dự án đã triển khai như Grand View Palace Hạ Long Hotel, Nhà hàng Hồ Cô Tiên và Nhà hàng Thiên Anh.",
  },
  {
    title: "Giảm rủi ro khi thuê",
    description:
      "Bạn được trao đổi định hướng trước, xem sản phẩm thực tế và có bước phản hồi để hạn chế nỗi lo chi phí bỏ ra không xứng đáng.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Chẩn đoán nhu cầu",
    description: "Bạn chia sẻ mô hình, nhóm khách muốn thu hút và vấn đề đang gặp: ít khách hỏi, ảnh chưa đẹp hay nội dung chưa rõ.",
  },
  {
    title: "Đề xuất hướng thiết kế",
    description: "DST gợi ý phong cách hình ảnh, thông điệp chính và hạng mục nên làm trước để phù hợp mục tiêu và ngân sách.",
  },
  {
    title: "Triển khai nội dung",
    description: "Thiết kế hình món, phòng nghỉ, banner, bài đăng, feedback hoặc nội dung đặt bàn, đặt phòng theo hướng đã thống nhất.",
  },
  {
    title: "Tối ưu sau phản hồi",
    description: "Điều chỉnh lại câu chữ, bố cục và điểm nhấn để nội dung có thể dùng ngay trên fanpage, profile hoặc kênh bán hàng.",
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
