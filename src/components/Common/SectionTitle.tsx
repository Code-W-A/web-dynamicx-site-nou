export default function SectionTitle({
  title,
  mainTitle,
  paragraph,
  center,
  width = "600px",
  marginBottom = "50px",
  color,
  titleWidth,
  paragraphWidth,
  className,
}: any) {
  return (
    <div
      className={`${center ? "mx-auto text-center" : ""} ${className || ""}`}
      style={
        className
          ? undefined
          : { maxWidth: width, marginBottom: marginBottom }
      }
    >
      <span
        className={`mb-2 block text-lg font-semibold ${color === "white" ? "text-[#8fa2ff]" : "text-primary"}`}
      >
        {mainTitle}
      </span>
      <h3
        className={`text-3xl font-bold sm:text-4xl md:text-[45px]/[55px] ${color === "white" ? "text-white" : "text-black"} ${paragraph && "mb-5"} ${titleWidth && center && "mx-auto"}`}
        style={{ maxWidth: titleWidth }}
      >
        {title}
      </h3>
      {paragraph && (
        <p
          className={`text-lg font-medium ${color === "white" ? "text-[#b4bdd0]" : "text-body-color"} ${paragraphWidth && center && "mx-auto"}`}
          style={{ maxWidth: paragraphWidth }}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
}
