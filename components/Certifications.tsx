import SectionTitle from "./SectionTitle";
import { FaAward, FaCertificate } from "react-icons/fa";
import { SiTensorflow, SiKubernetes } from "react-icons/si";
import { MdScience } from "react-icons/md";

const certifications = [
  {
    title: "ISTQB Certified Tester – Foundation Level (CTFL)",
    issuer: "ISTQB",
    description:
      "Foundation-level software testing certification covering test design, STLC, and quality practices.",
    icon: FaAward,
  },
  {
    title: "Test Automation in DevOps",
    issuer: "Test Automation University",
    description:
      "Continuous testing in CI/CD pipelines, integrating automated checks into DevOps workflows.",
    icon: FaCertificate,
  },
  {
    title: "The Whole Team Approach to Continuous Testing",
    issuer: "Test Automation University",
    description:
      "Collaborative quality ownership across developers, testers, and product teams.",
    icon: MdScience,
  },
  {
    title: "TensorFlow for Beginners",
    issuer: "TensorFlow",
    description:
      "Introductory machine learning with TensorFlow, covering model basics and practical workflows.",
    icon: SiTensorflow,
  },
  {
    title: "Introduction to Kubernetes",
    issuer: "Kubernetes",
    description:
      "Core Kubernetes concepts including pods, deployments, services, and cluster operations.",
    icon: SiKubernetes,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="max-w-container mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Certifications" titleNo="06" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <article
              key={cert.title}
              className="rounded-lg bg-[#112240] p-7 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-md bg-hoverColor text-textGreen flex items-center justify-center text-2xl">
                <Icon />
              </div>
              <h3 className="text-lg text-bodyColor font-titleFont font-semibold leading-snug">
                {cert.title}
              </h3>
              <p className="text-textGreen text-sm">{cert.issuer}</p>
              <p className="text-sm text-bodyColor/90">{cert.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
