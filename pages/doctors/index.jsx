import Image from "next/image";
import React from "react";
import TransitionEffect from "../../components/TransitionEffect";
// import News from "../../sections/News";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Shweta Malhotra",
      // photo: "/assets/doctors/shweta.jpeg",
      designation:
        "MBBS, MS(OBS & Gynae), FMAS ",
      description: "Consultant Gynaecologist, Lap Surgeon & Infertility Specialist",
      experience: "10 years of experience",
    },
    {
      name: "Dr. Mayur Chopra",
      // photo: "/assets/doctors/vatsal1.jpeg",
      experience: "6 years of experience",
      designation: "MBBS DNB (Ortho) MNAMS",
      description: "Consultant Orthopadics, Trauma & Joints Replacement Surgeon"
    },
    {
      name: "Dr. Sumit Malhotra",
      // photo: "/assets/doctors/vatsal1.jpeg",
      // experience: "6 years of experience",
      designation: "MBBS DA (Anaesthetist)",
      description: "Family Physician and Critical Care Specialist"
    },
    {
      name: "Dr. Tennis Kaushik",
      // photo: "/assets/doctors/vatsal1.jpeg",
      // experience: "6 years of experience",
      designation: "BAMS",
      description: "General Physician"
    },
    {
      name: "Dr. Vastal Bajaj",
      // photo: "/assets/doctors/vatsal1.jpeg",
      // experience: "6 years of experience",
      designation: "MBBS MD Paedistrics",
      description: "PGPN - Paediatric Nutrition (Boston University)"
    },
    {
      name: "Dr. M.A Mir",
      // photo: "/assets/doctors/vatsal1.jpeg",
      experience: "6 years of experience",
      designation: "MBBS MS, MCH",
      description: "Urologist and Kidney Transplant Surgeon"
    },
    {
      name: "Dr. Nilesh",
      // photo: "/assets/doctors/vatsal1.jpeg",
      // experience: "6 years of experience",
      designation: "MBBS MS MCH",
      description: "Gen & Onco Surgeon"
    },
    {
      name: "Dr. Sandeep Kumar",
      // photo: "/assets/doctors/vatsal1.jpeg",
      experience: "6 years of experience",
      designation: "MBBS MD Paediatrics",
      description: "Consultant Paediatrics & Neonatology"
    },
  ];

  return (
    <div className="w-full p-3">
        <TransitionEffect />
      <div>
        <div className="flex items-center justify-center w-full">
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-primary">
            Our <span>Doctors</span>
          </h3>
        </div>

        <div className="flex items-center justify-center w-full h-full mt-5">
          <div className="flex items-center justify-center flex-wrap gap-10">
            {doctors.map((doctor, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center">
                {/* <div>
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div> */}

                <div className="flex flex-col items-center mt-3">
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-primary font-heading">{doctor.name}</h3>
                  <p className="lg:w-[500px] text-center text-lg">{doctor.designation}</p>
                  <p className="text-center">{doctor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <News /> */}
      </div>
    </div>
  );
};

export default Doctors;