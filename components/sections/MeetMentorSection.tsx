import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MeetMentorSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-[56px] mb-8">
              Meet your mentor
            </h2>
            <p className="text-lg leading-relaxed text-[#4B5563] mb-10">
              A medical student with a passion for cardiology and integrating technological advancements into medical practice. With a strong enthusiasm for research, they are eager to collaborate with professionals to explore new frontiers in medicine. Their dedication to innovation and excellence, alongside valuable hands-on experience, positions them to make meaningful contributions to the medical field and public health.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="aspect-[3/4] w-full max-w-[320px] lg:max-w-[380px] overflow-hidden rounded-[24px] bg-[#0A192F] shadow-xl">
              <Image
                src="/mentor_photo.png"
                alt="Rhanderson Cardoso, MD, FACC"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
