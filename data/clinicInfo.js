export const clinicInfo = {
  name: "Truly Derma Clinic & Academy",
  tagline: "Specialized Skin, Hair, Laser, and Fat Loss Treatments by Certified Experts",
  taglineAlt: "Transform Your Beauty and Health with Our Expert Treatments",
  doctor: {
    name: "Dr. Megha Aggarwal",
    title: "Chief Dermatologist & Aesthetic Physician",
    qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy), Fellowship in Aesthetic Medicine (FAM)",
    experience: "14+ Years of Clinical Excellence",
    philosophy: "At Truly Derma, we understand the importance of glowing skin and healthy hair in boosting confidence. To achieve exceptional results, our expert personnel use modern processes and cutting-edge technologies. We believe everyone should feel their best, so we offer a range of treatments tailored just for you.",
    bio: "Truly Derma Clinic & Academy is led by the renowned Aesthetician Dr. Megha Aggarwal. With over 14+ years of clinical excellence and 20,000+ successful procedures, our primary focus is providing comprehensive, scientifically validated solutions for skincare, hair restoration, medical LASER treatments, and non-invasive fat loss.",
    image: "/images/dr-megha.jpg",
    stats: [
      { label: "Procedures Performed", value: "20,000+" },
      { label: "Patient Satisfaction", value: "99.4%" },
      { label: "Years Experience", value: "14+" },
      { label: "Academy Doctors Trained", value: "650+" }
    ]
  },
  contact: {
    phone: "+91 75910 55566",
    phoneNumbers: [
      "+91 75910 55566",
      "+91 75600 55566",
      "+91 75800 55566"
    ],
    whatsapp: "918076926982",
    whatsappDisplay: "+91 80769 26982",
    email: "hello@trulyderma.com",
    hours: "Mon - Sat: 10:30 AM - 7:30 PM | Sunday: By Appointment",
    branches: [
      {
        city: "Pitampura, Delhi",
        name: "Pitampura Clinic",
        address: "1st Floor, Building 46, Harsh Vihar, Above AU Small Finance Bank, Pitampura, New Delhi - 110034",
        mapQuery: "Harsh+Vihar+Pitampura+New+Delhi"
      },
      {
        city: "Rajouri Garden, Delhi",
        name: "Rajouri Garden Clinic",
        address: "J2/16, Basement, Rajouri Garden, New Delhi - 110027",
        mapQuery: "J2/16+Rajouri+Garden+New+Delhi"
      }
    ],
    socials: {
      facebook: "https://www.facebook.com/p/Truly-Derma-100092376566785/",
      instagram: "https://www.instagram.com/trulydermabydrmeghhaa/"
    }
  },
  testimonials: [
    {
      id: 1,
      patientName: "Rohan",
      treatment: "Personalized Hair Restoration",
      rating: 5,
      comment: "I cannot express how grateful I am to TrulyDerma for helping me regain my self-confidence. After struggling with hair loss for years, I finally decided to seek professional help. The experts at TrulyDerma guided me through a personalized hair restoration program that included advanced treatments and nourishing products. The results have been incredible! My hair is thicker, stronger, and I feel like a new person. TrulyDerma is truly a lifesaver!",
      city: "Delhi",
      date: "Verified Patient"
    },
    {
      id: 2,
      patientName: "Veeneta H",
      treatment: "Laser Skin Rejuvenation",
      rating: 5,
      comment: "The team at TrulyDerma is exceptional! From the moment I stepped into their clinic, I felt welcomed and cared for. The laser treatments I received for skin rejuvenation were precisely tailored to my needs, and the results have been remarkable. The improvement in my skin's texture and appearance is beyond what I could have imagined. The staff's expertise, professionalism, and warm approach create an atmosphere that is both relaxing and uplifting. I highly recommend TrulyDerma to anyone seeking top-notch skincare treatments.",
      city: "Delhi NCR",
      date: "Verified Patient"
    },
    {
      id: 3,
      patientName: "Seema M",
      treatment: "Medi-Facial & Skincare Regimen",
      rating: 5,
      comment: "I have been a client of TrulyDerma for several months now, and I am absolutely thrilled with the results. The team at TrulyDerma is not only knowledgeable and skilled, but they genuinely care about their clients' well-being. The personalized skincare regimen and medi-facials have made a world of difference. My skin looks younger, radiant, and healthier than ever before.",
      city: "Delhi",
      date: "Verified Patient"
    }
  ],
  techSteps: [
    {
      stepNumber: "01",
      title: "Digital Epiluminescence Skin Scan",
      subtitle: "Cellular-Level Diagnosis",
      description: "Before any applicator touches your face, multi-spectral polarized light mapping assesses sebum depth, UV photodamage, porphyrins, and baseline epidermal hydration.",
      icon: "Microscope",
      image: "/images/tech-1.jpg"
    },
    {
      stepNumber: "02",
      title: "Resonance Frequency & Vortex Delivery",
      subtitle: "Patented Energy Activation",
      description: "Customized application of 7-frequency microcurrents or Q-switch photo-acoustic shockwaves, tailored precisely to your tissue impedance for non-thermal remodeling.",
      icon: "Cpu",
      image: "/images/tech-2.jpg"
    },
    {
      stepNumber: "03",
      title: "Electroporation & Cold Cryo-Seal",
      subtitle: "Active Lipid Restoration",
      description: "Pulsed micro-current channels open temporary transdermal gates, allowing clinical peptides to penetrate 400% deeper, sealed instantly with -5°C cryotherapy.",
      icon: "ShieldCheck",
      image: "/images/tech-3.jpg"
    }
  ],
  beforeAfter: [
    {
      title: "Skin Radiance & Pore Refining",
      treatment: "Dermapen 4 + Recombinant Growth Factors (4 Sessions)",
      before: "/images/before-skin.jpg",
      after: "/images/after-skin.jpg",
      notes: "Smoothed skin texture, refined open pores, and restored luminous hydration barrier."
    },
    {
      title: "Facial Contouring & Jowl Lift",
      treatment: "TD Glowtech 360° (3 Sessions)",
      before: "/images/before-contour.jpg",
      after: "/images/after-contour.jpg",
      notes: "Sharpened jawline angle, nasolabial softening, and restored mid-face volume."
    }
  ]
};
