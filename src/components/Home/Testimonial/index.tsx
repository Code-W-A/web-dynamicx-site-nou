import { testimonialData } from "@/static-data/testimonial";
import SingleTestimonial from "./SingleTestimonial";

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-white pb-20 pt-[90px]">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[50px] max-w-[600px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                TESTIMONIALE
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]">
                Ce spun clienții noștri
              </h2>
              <p className="text-lg font-medium text-body-color">
                Parteneriate pe termen lung și rezultate măsurabile în online.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial
              key={testimonial?.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
