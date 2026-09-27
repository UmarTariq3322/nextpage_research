import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small metadata label, e.g. "Research journey". */
  eyebrow?: string;
  /** Optional section index shown before the label, e.g. "02". */
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** stack: label, title, text. split: title left, text + action right. */
  layout?: "stack" | "split";
  align?: "left" | "center";
  action?: React.ReactNode;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionLabel({ index, children, className }: { index?: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("t-label flex items-center gap-3", className)}>
      {index && (
        <>
          <span className="text-accent">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line-strong" />
        </>
      )}
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  layout = "stack",
  align = "left",
  action,
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const heading = (
    <Heading id={id} className={cn(Heading === "h1" ? "t-h1" : "t-h2", eyebrow && "mt-5")}>
      {title}
    </Heading>
  );

  if (layout === "split") {
    return (
      <div className={cn("grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16", className)}>
        <div>
          {eyebrow && <SectionLabel index={index}>{eyebrow}</SectionLabel>}
          {heading}
        </div>
        {(description || action) && (
          <div className="lg:pb-1.5">
            {description && <div className="t-body max-w-md">{description}</div>}
            {action && <div className={cn(description && "mt-5")}>{action}</div>}
          </div>
        )}
      </div>
    );
  }

  const center = align === "center";
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <SectionLabel index={index} className={cn(center && "justify-center")}>
          {eyebrow}
        </SectionLabel>
      )}
      {heading}
      {description && <div className={cn("t-body mt-5 max-w-xl", center && "mx-auto")}>{description}</div>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
