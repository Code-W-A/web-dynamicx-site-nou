type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold text-black sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-body-color">{description}</p> : null}
    </div>
  );
}
