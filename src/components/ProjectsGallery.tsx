import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Full Roof Replacement",
    location: "Manchester, NH",
    description: "Complete tear-off and architectural shingle installation on a two-story colonial.",
    tag: "Replacement",
    image: "/completed-shingle-roof-southern-nh.jpg",
    alt: "Completed architectural shingle roof replacement on a residential home in Southern New Hampshire",
  },
  {
    title: "Storm Damage Restoration",
    location: "Nashua, NH",
    description: "Insurance-covered replacement after wind damage — from claim to completion.",
    tag: "Storm Damage",
    image: "/roof-replacement-in-progress-decking.jpg",
    alt: "Roof tear-off exposing decking during a storm damage restoration project in Nashua NH",
  },
  {
    title: "Chimney Flashing Repair",
    location: "Bedford, NH",
    description: "Step flashing replacement and chimney sealing to stop recurring leaks at the chimney base.",
    tag: "Repair",
    image: "/chimney-flashing-shingle-roof.jpg",
    alt: "Close-up of chimney step flashing and shingle detail on a repaired roof in Bedford NH",
  },
  {
    title: "Roof & Gutter System",
    location: "Derry, NH",
    description: "New roof with seamless gutters and gutter guards installed as one coordinated system.",
    tag: "Replacement",
    image: "/ranch-roof-replacement-completed.jpg",
    alt: "Completed ranch-style roof replacement with new shingles in Derry NH",
  },
  {
    title: "Emergency Tarp & Repair",
    location: "Londonderry, NH",
    description: "Same-day tarp and permanent repair after a fallen tree punctured the roof.",
    tag: "Repair",
    image: "/roofing-crew-protecting-landscaping.jpg",
    alt: "Prescott Roofing crew on roof with protective tarps covering landscaping during emergency repair",
  },
  {
    title: "Multi-Layer Tear-Off",
    location: "Salem, NH",
    description: "Removed two existing shingle layers, replaced rotted decking, and installed GAF Timberline HDZ.",
    tag: "Replacement",
    image: "/roof-replacement-tear-off-crew.jpg",
    alt: "Roofing crew performing a multi-layer shingle tear-off on a split-level home in Salem NH",
  },
];

export function ProjectsGallery() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Every roof we install is built to last. Here are some of the projects we&apos;ve completed across Southern New Hampshire.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-brand-coppertint/20 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2 py-1 text-xs font-bold bg-brand-copper text-white rounded">
                  {project.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-brand-navy group-hover:text-brand-copper transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-copper font-medium mt-1">{project.location}</p>
                <p className="text-sm text-brand-charcoal/70 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/free-inspection"
            className="inline-flex items-center px-6 py-3 bg-brand-copper text-white font-bold rounded-md hover:bg-brand-copper/90 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
