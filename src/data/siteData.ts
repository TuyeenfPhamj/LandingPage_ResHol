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
      "Định hướng bộ ảnh, menu, set tiệc, ưu đãi đặt bàn và ấn phẩm social để khách nhìn vào là hiểu món, hiểu không gian và muốn liên hệ.",
    image: hoCoTien,
    icon: Utensils,
  },
  {
    title: "Thiết kế hình ảnh khách sạn",
    tag: "Khách sạn",
    description:
      "Làm rõ phòng nghỉ, sảnh, tiện ích, dịch vụ lưu trú và cảm giác cao cấp mà khách cần thấy trước khi quyết định đặt phòng.",
    image: grandviewHall,
    icon: Hotel,
  },
  {
    title: "Bộ nhận diện chiến dịch",
    tag: "Marketing",
    description:
      "Thiết kế key visual, banner, bài đăng, feedback và chương trình ưu đãi theo từng mục tiêu: khai trương, mùa du lịch, đặt tiệc, đặt phòng.",
    image: thienAnh,
    icon: PenTool,
  },
  {
    title: "Tư vấn gói phù hợp",
    tag: "Tư vấn",
    description:
      "Buổi tư vấn miễn phí giúp chủ nhà hàng, khách sạn chọn đúng hướng thiết kế, phạm vi triển khai và mức đầu tư phù hợp.",
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
      "Copy và hình ảnh tập trung vào thứ khách thật sự cân nhắc: món ăn, phòng nghỉ, không gian, dịch vụ, ưu đãi và cảm giác tin tưởng.",
  },
  {
    title: "Tư vấn trước khi triển khai",
    description:
      "Bạn không phải mua một gói chung chung. DST bắt đầu bằng việc hiểu mô hình, mục tiêu và ngân sách để đề xuất hướng phù hợp.",
  },
  {
    title: "Có sản phẩm thực tế",
    description:
      "Landing page sử dụng các dự án đã triển khai như Grand View Palace Hạ Long Hotel, Nhà hàng Hồ Cô Tiên và Nhà hàng Thiên Anh.",
  },
  {
    title: "Giảm rủi ro khi thuê",
    description:
      "Quy trình có bước định hướng, thiết kế, nhận phản hồi và điều chỉnh để hạn chế lo lắng về chi phí và chất lượng đầu ra.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Chẩn đoán nhu cầu",
    description: "Xác định mô hình nhà hàng, khách sạn, resort hoặc quán cafe, nhóm khách mục tiêu và vấn đề đang cần xử lý.",
  },
  {
    title: "Đề xuất hướng thiết kế",
    description: "Chọn phong cách hình ảnh, thông điệp chủ đạo, nhóm ấn phẩm cần có và thứ tự ưu tiên triển khai.",
  },
  {
    title: "Triển khai nội dung",
    description: "Thiết kế key visual, hình ảnh món ăn/phòng nghỉ, bài đăng, banner, feedback và nội dung đặt bàn, đặt phòng.",
  },
  {
    title: "Tối ưu sau phản hồi",
    description: "Hoàn thiện bộ nội dung theo phản hồi thực tế để thương hiệu có thể dùng ngay trên fanpage, profile hoặc kênh bán hàng.",
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
