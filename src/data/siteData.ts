import {
  BedDouble,
  CalendarDays,
  Camera,
  Handshake,
  Hotel,
  Images,
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
];

export const services: Service[] = [
  {
    title: "Ấn phẩm món ăn",
    tag: "Nhà hàng",
    description:
      "Thiết kế nội dung giới thiệu món ăn, set menu, ưu đãi đặt bàn và hình ảnh bàn tiệc cho nhà hàng.",
    image: hoCoTien,
    icon: Utensils,
  },
  {
    title: "Hình ảnh khách sạn",
    tag: "Khách sạn",
    description:
      "Trình bày không gian sảnh, phòng nghỉ, khu phục vụ và trải nghiệm lưu trú theo nhận diện thương hiệu.",
    image: grandviewHall,
    icon: Hotel,
  },
  {
    title: "Bộ nhận diện chiến dịch",
    tag: "Marketing",
    description:
      "Triển khai key visual, banner, bài đăng mạng xã hội và ấn phẩm ưu đãi theo từng chương trình bán hàng.",
    image: thienAnh,
    icon: PenTool,
  },
  {
    title: "Nội dung đặt bàn, đặt phòng",
    tag: "Booking",
    description:
      "Chuẩn bị thông điệp và hình ảnh giúp khách dễ hình dung dịch vụ trước khi đặt bàn hoặc đặt phòng.",
    image: grandviewEvent,
    icon: CalendarDays,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "Nội dung giới thiệu khách sạn, không gian phục vụ và trải nghiệm lưu trú.",
    image: grandviewHall,
    wide: true,
  },
  {
    title: "Nhà hàng Hồ Cô Tiên",
    caption: "Ấn phẩm món ăn, ưu đãi đặt bàn và hình ảnh truyền thông cho nhà hàng.",
    image: hoCoTien,
  },
  {
    title: "Nhà hàng Thiên Anh",
    caption: "Nội dung nhận diện nhà hàng, chương trình ưu đãi và tương tác khách hàng.",
    image: thienAnh,
  },
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "Bộ hình ảnh phục vụ truyền thông cho không gian khách sạn.",
    image: grandviewEvent,
  },
];

export const reasons: Reason[] = [
  {
    title: "Bám đúng ngành dịch vụ",
    description:
      "Nội dung tập trung vào nhà hàng, khách sạn, món ăn, không gian và trải nghiệm trước khi khách ra quyết định.",
  },
  {
    title: "Làm rõ điểm cần bán",
    description:
      "Mỗi ấn phẩm ưu tiên thông tin khách cần thấy: món gì, không gian ra sao, ưu đãi nào và hành động tiếp theo.",
  },
  {
    title: "Đồng bộ hình ảnh thương hiệu",
    description:
      "Logo, màu sắc, key visual và bố cục được giữ nhất quán trong từng bộ nội dung truyền thông.",
  },
  {
    title: "Phù hợp kênh mạng xã hội",
    description:
      "Các thiết kế có thể dùng cho bài đăng, banner, chương trình ưu đãi, feedback và nội dung đặt bàn.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Nhận thông tin dịch vụ",
    description: "Xác định mô hình nhà hàng hoặc khách sạn, nhóm khách mục tiêu, món/phòng chủ lực và chương trình cần truyền thông.",
  },
  {
    title: "Lên hướng hình ảnh",
    description: "Chọn phong cách thị giác, bố cục nội dung, màu sắc và thông điệp phù hợp với thương hiệu.",
  },
  {
    title: "Thiết kế ấn phẩm",
    description: "Triển khai key visual, hình ảnh món ăn, không gian, caption và biến thể nội dung cho các kênh sử dụng.",
  },
  {
    title: "Bàn giao và điều chỉnh",
    description: "Hoàn thiện bộ nội dung, tiếp nhận phản hồi và tối ưu để phù hợp nhu cầu đăng tải thực tế.",
  },
];

export const proofPoints = [
  { label: "Nhà hàng", icon: Utensils },
  { label: "Khách sạn", icon: Hotel },
  { label: "Phòng nghỉ", icon: BedDouble },
  { label: "Ẩm thực", icon: Sparkles },
  { label: "Hình ảnh", icon: Camera },
  { label: "Social", icon: MessageCircle },
  { label: "Ấn phẩm", icon: Images },
  { label: "Tư vấn", icon: Handshake },
];
