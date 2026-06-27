import { ArrowUpRight } from "lucide-react";
import type { Service } from "../types/content";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-image-wrap">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-body">
        <div className="service-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{service.tag}</span>
        </div>
        <div className="service-icon" aria-hidden="true">
          <Icon size={20} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a href="#lien-he">
          Trao đổi nhu cầu
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
