"use client";

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  duration?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  ariaLabel?: string;
}

export default function Timeline({ items, className = "", ariaLabel = "Timeline" }: TimelineProps) {
  return (
    <div className={`relative mb-12 ${className}`} role="list" aria-label={ariaLabel}>
      {/* Timeline line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-primary/30 md:left-8"></div>
      
      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex items-start" role="listitem">
            <div className="absolute left-4 flex h-4 w-4 items-center justify-center rounded-full bg-primary md:left-6 md:h-6 md:w-6">
              <div className="h-2 w-2 rounded-full bg-white md:h-3 md:w-3"></div>
            </div>
            <div className="ml-12 md:ml-16">
              <div className="mb-2 flex items-center">
                <h3 className="text-lg font-bold text-black md:text-xl">
                  <span className="text-primary">{index + 1}. {item.title}</span>
                  {item.duration && (
                    <span className="ml-3 text-sm font-normal text-body-color">{item.duration}</span>
                  )}
                </h3>
              </div>
              <p className="mb-3 text-base text-body-color">
                {item.subtitle && <strong>{item.subtitle}</strong>} {item.description}
              </p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
