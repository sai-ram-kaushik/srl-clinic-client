import React from "react";
import TransitionEffect from "../../components/TransitionEffect";
import Image from "next/image";
import shweta from "../../public/assets/images/shweta.webp";
import { motion } from "framer-motion";
const About = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 * index,
      },
    }),
  };

  const services = [
    {
      number: "1",
      title: "Gynaecologist",
      description:
        "We cover various adolesent issue, pcos, uterine problems, pregnancy care, high risk pregnancy, contraception, cancer screening, infertility issues etc.",
    },
    {
      number: "2",
      title: "Paediatrics",
      description:
        "From vaccination to growth and metabolic disorder we cover them all.",
    },
    {
      number: "3",
      title: "Orthopaedics",
      description:
        "Expert surgeon to treat any bone, joints or musculo skeletal problems.",
    },
    {
      number: "4",
      title: "General Surgeon",
      description:
        "Provide conservative and surgical management for surgical problems.",
    },
    {
      number: "5",
      title: "General Medicines",
      description:
        "Our team serve for various illness, diabetes, hypertension, respiratory problems, allergies etc.",
    },
    {
      number: "6",
      title: "Urologist",
      description: "For all your urine and kidney related problems.",
    },
  ];

  return (
    <section className="w-full p-3">
      <TransitionEffect />
      <div className="flex items-center justify-center w-full mt-5">
        <h3>
          About <span>SRL Multispeciality Clinic</span>
        </h3>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center mt-4 gap-10">
          <div>
            <Image src={shweta} alt="shweta" className="rounded-lg" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p className="text-xl">WELCOME TO SRL CLINIC</p>
            <p className="text-3xl sm:text-4xl lg:text-5xl  font-heading lg:w-[450px] text-center lg:text-start text-[#1678F2]">
              Best Care for Your Good Health
            </p>
            <div className="flex flex-col lg:flex-row items-center text-lg lg:gap-10">
              <ul
                role="list"
                className="marker:text-background list-disc flex flex-col items-start">
                <li>A Passion of Healing</li>
                <li>All our best</li>
                <li>Always Caring</li>
              </ul>
              <ul
                role="list"
                className="marker:text-background list-disc flex flex-col items-start">
                <li>5-star care</li>
                <li>Belive in us</li>
                <li>A legacy of experience</li>
              </ul>
            </div>
            <p className="lg:w-[700px] text-center  text-lg lg:text-start">
              It is a multispeciality clinic located in Sec 82 Gurgaon that
              focuses on specially base medical care and treatment for our
              patient. The one stop destination for all your health care needs
              including speciallist consultation diagnostic imaging ECG,
              Preventive health checkup anf lab collection facility.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-5">
        <h3>
          Our <span>Services</span>
        </h3>
      </div>

      <div>
        <motion.div
          className="flex flex-wrap items-center justify-center mt-5 gap-5"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}>
          {services?.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-strat border border-secondary p-2 m-2 lg:m-0 rounded-xl w-[400px] lg:w-[550px] h-[200px] lg:h-[200px] cursor-pointer">
              <div className="flex flex-row items-center gap-5">
                <p className="text-2xl rounded-full bg-secondary text-primary w-[50px] h-[50px] flex items-center justify-center">
                  {service.number}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-2 text-span font-heading">
                  {service.title}
                </h3>
              </div>

              <div className="flex items-center ml-5 lg:ml-20 mt-2">
                <p className="text-lg  text-background">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
