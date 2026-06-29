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
      "DST thiết kế nội dung giới thiệu món ăn, set menu và ưu đãi, giúp thương hiệu truyền tải thông tin rõ ràng và hỗ trợ khách hàng lựa chọn dễ dàng hơn.",
    image: hoCoTien,
    icon: Utensils,
  },
  {
    title: "Thiết kế hình ảnh khách sạn",
    tag: "Khách sạn",
    description:
      "DST xây dựng hình ảnh sảnh, phòng nghỉ, khu phục vụ và trải nghiệm lưu trú theo đúng tinh thần thương hiệu của khách sạn.",
    image: grandviewHall,
    icon: Hotel,
  },
  {
    title: "Bộ nhận diện chiến dịch",
    tag: "Chiến dịch",
    description:
      "DST phát triển key visual, banner, bài đăng mạng xã hội và ấn phẩm ưu đãi cho từng chiến dịch bán hàng.",
    image: thienAnh,
    icon: PenTool,
  },
  {
    title: "Nội dung hỗ trợ đặt bàn, đặt phòng",
    tag: "Booking",
    description:
      "DST chuẩn hoá thông điệp và hình ảnh, giúp khách hàng nhanh chóng nắm được dịch vụ, ưu đãi và thông tin cần thiết trước khi đặt bàn hoặc đặt phòng.",
    image: grandviewEvent,
    icon: Handshake,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Grand View Palace Hạ Long Hotel",
    caption: "DST triển khai nội dung và hình ảnh giới thiệu không gian, dịch vụ và trải nghiệm lưu trú của khách sạn.",
    image: grandviewHall,
    wide: true,
  },
  {
    title: "Nhà hàng Hồ Cô Tiên",
    caption: "DST phát triển ấn phẩm món ăn, nội dung hỗ trợ đặt bàn và hình ảnh truyền thông cho nhà hàng.",
    image: hoCoTien,
  },
  {
    title: "Nhà hàng Thiên Anh",
    caption:
      "DST xây dựng nội dung giới thiệu, ấn phẩm ưu đãi và các điểm chạm truyền thông giúp nhà hàng duy trì kết nối với khách hàng.",
    image: thienAnh,
  },
  {
    title: "Grand View Palace Hạ Long Hotel — Truyền thông sự kiện",
    caption: "DST phát triển bộ hình ảnh phục vụ truyền thông cho không gian, sự kiện và các hoạt động nổi bật của khách sạn.",
    image: grandviewEvent,
  },
];

export const reasons: Reason[] = [
  {
    title: "Hiểu đúng ngành dịch vụ",
    description: "DST nghiên cứu đặc thù nhà hàng, khách sạn và hành trình khách hàng để lựa chọn đúng nội dung cần truyền thông.",
  },
  {
    title: "Biết hạng mục nào nên ưu tiên",
    description:
      "DST làm rõ các thông tin có khả năng thúc đẩy chuyển đổi: món ăn, không gian, ưu đãi, dịch vụ và hành động khách hàng cần thực hiện tiếp theo.",
  },
  {
    title: "Đồng bộ hình ảnh thương hiệu",
    description: "DST đảm bảo logo, màu sắc, key visual và bố cục được triển khai nhất quán trên từng hạng mục truyền thông.",
  },
  {
    title: "Phù hợp kênh mạng xã hội",
    description:
      "DST tối ưu thiết kế để sử dụng linh hoạt trên bài đăng, banner, chương trình ưu đãi, feedback và nội dung hỗ trợ đặt bàn, đặt phòng.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Tiếp nhận brief dịch vụ",
    description:
      "DST tiếp nhận thông tin về mô hình kinh doanh, khách hàng mục tiêu, dịch vụ chủ lực và các chương trình cần truyền thông.",
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
    title: "Bàn giao và điều chỉnh",
    description: "DST bàn giao bộ ấn phẩm, tiếp nhận phản hồi và điều chỉnh để phù hợp với nhu cầu triển khai thực tế.",
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
