import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../../components/TransitionEffect";
// import News from '../../sections/News'
const Facilities = () => {
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

  const pregnancy_care_facilities = [
    {
      number: "1",
      label: "Normal Delivery",
      description:
        "It refers to the natural birth of a baby through the vaginal passage, without surgical intervention. It involves labor contractions and the baby's passage through the birth canal.",
    },
    {
      number: "2",
      label: "C-Section",
      description:
        "A C-section, or cesarean section, is a surgical procedure where the baby is delivered through an incision in the mother's abdomen and uterus, typically done when a vaginal birth is not possible or safe.",
    },
    {
      number: "3",
      label: "Obstetrics & Gynae cases",
      description:
        "Obstetrics involves medical care during pregnancy, childbirth, and postpartum, ensuring maternal and fetal health. Gynecology focuses on women's reproductive health, covering issues like menstrual disorders, contraception, and reproductive system disorders.",
    },
    {
      number: "4",
      label: "Antenatal",
      description:
        "Antenatal refers to the period of medical care and attention given to a pregnant woman and her developing baby before childbirth, encompassing regular check-ups, screenings, and guidance to promote a healthy pregnancy.",
    },
    {
      number: "5",
      label: "Postnatal Care",
      description:
        "Postnatal care refers to medical and supportive attention provided to mothers and newborns in the period immediately following childbirth to ensure their health, recovery, and successful transition to parenthood.",
    },
    {
      number: "6",
      label: "Procenceptional Counselling",
      description:
        "Preconceptional counseling involves providing individuals or couples with guidance and information about optimizing their health before attempting pregnancy to promote a healthy pregnancy and baby.",
    },
    {
      number: "7",
      label: "Contraception & Advice",
      description:
        "Contraception and guidance involve offering methods and information to prevent unplanned pregnancies, accommodating various choices and health factors.",
    },
    {
      number: "8",
      label: "Multiload Insertion & Removal",
      description:
        "Multiload insertion and removal refer to the placement and extraction of an intrauterine device (IUD) used for long-acting contraception.",
    },
    {
      number: "9",
      label: "Infertility Clinic",
      description:
        "An infertility clinic is a medical facility specializing in diagnosing and treating reproductive challenges and difficulties in conceiving.",
    },
    {
      number: "10",
      label: "Adolescent & Menopausal Problem",
      description:
        "Adolescent and menopausal problems pertain to medical issues and hormonal changes experienced by young individuals entering puberty and women transitioning through menopause, respectively.",
    },
  ];

  const new_born_baby_care_facilities = [
    {
      number: "1",
      label: "Vaccination",
      description:
        "Vaccination is the administration of a weakened or inactive form of a microorganism to stimulate the immune system and confer immunity against a particular disease.",
    },
    {
      number: "2",
      label: "Nebulization",
      description:
        "Nebulization is a method of delivering medication in the form of a fine mist, which is inhaled into the lungs for respiratory treatment.",
    },
    {
      number: "3",
      label: "Oxygenation",
      description:
        "Oxygenation refers to the process of supplying oxygen to the body's cells and tissues for proper functioning and metabolism.",
    },
    {
      number: "4",
      label: "ECG",
      description:
        "An electrocardiogram (ECG or EKG) is a medical test that records the electrical activity of the heart over a period of time, helping to diagnose cardiac conditions.",
    },
    {
      number: "5",
      label: "Lab Investigation",
      description:
        "Lab investigation refers to the analysis of medical samples, such as blood or tissue, to diagnose and monitor health conditions and diseases.",
    },
    {
      number: "6",
      label: "Catheterization",
      description:
        "Catheterization is a medical procedure involving the insertion of a thin tube (catheter) into a body vessel or cavity, often used for various diagnostic or therapeutic purposes.",
    },
    {
      number: "7",
      label: "Home Care Services",
      description:
        "Home care services involve providing medical assistance, personal care, or support to individuals who require assistance while remaining in their own homes.",
    },
    {
      number: "8",
      label: "Day Care Services",
      description:
        "Day care services involve providing supervised care, activities, and support to individuals, typically children or the elderly, during daytime hours while their primary caregivers are unavailable.",
    },
    {
      number: "9",
      label: "Plaster Applications",
      description:
        "Plaster application is the process of applying a cast made of plaster of Paris to immobilize and support a fractured or injured body part for healing.",
    },
  ];

  return (
    <div className="w-full px-4 lg:px-10">
        <TransitionEffect />
      <div>
        <div className="flex items-center justify-center w-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-2 text-background font-heading">
            Facilities
          </h3>
        </div>

        <div className="flex items-center justify-center mt-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-span">
            Pregnancy Care
          </h3>
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center mt-5 gap-5"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}>
          {pregnancy_care_facilities?.map((facility, i) => (
            <div
              key={i}
              className="flex flex-col items-strat border border-secondary p-2 rounded-xl max-w-[550px] h-[350px] lg:h-[250px] cursor-pointer">
              <div className="flex flex-row items-center gap-5">
                <p className="text-2xl rounded-full bg-secondary text-primary w-[50px] h-[50px] flex items-center justify-center">
                  {facility.number}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-2 text-span font-heading">
                  {facility.label}
                </h3>
              </div>

              <div className="flex items-center ml-5 lg:ml-16 mt-2">
                <p className="text-lg  text-background">{facility.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center justify-center mt-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-primary">
            New Born Baby Care
          </h3>
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center mt-5 gap-5"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}>
          {new_born_baby_care_facilities?.map((facility, i) => (
            <div
              key={i}
              className="flex flex-col items-strat border border-secondary p-2 rounded-xl max-w-[550px] h-[350px] lg:h-[250px] cursor-pointer">
              <div className="flex flex-row items-center gap-5">
                <p className="text-2xl rounded-full bg-secondary text-primary w-[50px] h-[50px] flex items-center justify-center">
                  {facility.number}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-2 text-span font-heading">
                  {facility.label}
                </h3>
              </div>

              <div className="flex items-center ml-5 lg:ml-16 mt-2">
                <p className="text-lg  text-background">{facility.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* <News /> */}
      </div>
    </div>
  );
};

export default Facilities;