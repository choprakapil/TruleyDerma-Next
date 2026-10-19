// =============================================================================
// TRULY DERMA CLINIC & ACADEMY — MASTER CENTRAL CONTENT REGISTRY (SINGLE SOURCE OF TRUTH)
// =============================================================================
// This file contains the complete, authoritative content for EVERY section, page,
// treatment, blog, FAQ, and metadata across the entire Truly Derma website.
// Sourced authentically from https://trulyderma.com/ under Dr. Megha Aggarwal.
//
// RULE: Never hardcode clinical copy, phone numbers, addresses, doctor stats, or
// treatment details in components. Always import from this file.
// =============================================================================

// =============================================================================
// 1. BRAND & SITE METADATA
// =============================================================================
export const siteMeta = {
  name: "Truly Derma Clinic & Academy",
  shortName: "Truly Derma",
  tagline: "Specialized Skin, Hair, Laser, and Fat Loss Treatments by Certified Experts",
  taglineAlt: "Transform Your Beauty and Health with Our Expert Treatments",
  domain: "https://trulyderma.com",
  canonicalUrl: "https://trulyderma.com",
  established: 2014,
  city: "New Delhi, India",
  googleRating: 4.9,
  googleReviewCount: "520+",
  proceduresCount: "20,000+",
  satisfactionRate: "99.4%",
  doctorsTrainedCount: "650+",
  yearsOfExcellence: "10+",
  defaultTitle: "Truly Derma Clinic & Academy | Dr. Megha Aggarwal | Aesthetic Dermatology Delhi",
  defaultDescription: "Leading aesthetic dermatology clinic led by Gold Medalist Dr. Megha Aggarwal in Pitampura & Rajouri Garden, New Delhi. Specialized in TD Glowtech 360°, Hydra Facial MD, Laser Toning, FUE Hair Transplant, PRP, and Fat Loss.",
  keywords: [
    "Truly Derma",
    "Dr Megha Aggarwal",
    "Dermatologist Delhi",
    "Skin Clinic Pitampura",
    "Skin Clinic Rajouri Garden",
    "TD Glowtech 360",
    "Hydra Facial Delhi",
    "Laser Hair Reduction Delhi",
    "PRP Hair Rejuvenation",
    "Hair Transplant Delhi",
    "Q Switch Laser Toning",
    "Botox Delhi",
    "Lip Fillers Delhi",
    "Truly Derma Aesthetic Academy"
  ],
  copyright: `© ${new Date().getFullYear()} Truly Derma Clinic & Academy. All Rights Reserved.`
};

// =============================================================================
// 2. CONTACT INFORMATION & CLINIC SUITES
// =============================================================================
export const clinicContact = {
  phone: "+91 75910 55566",
  phoneFormatted: "+91 75910 55566",
  phoneClean: "+917591055566",
  phoneNumbers: [
    "+91 75910 55566",
    "+91 75600 55566",
    "+91 75800 55566"
  ],
  whatsapp: "918076926982",
  whatsappNumber: "918076926982",
  whatsappDisplay: "+91 80769 26982",
  whatsappFormatted: "+91 80769 26982",
  whatsappUrl: "https://wa.me/918076926982?text=Hello%20Truly%20Derma%2C%20I%20would%20like%20to%20book%20a%20consultation",
  email: "hello@trulyderma.com",
  hours: "Mon - Sat: 10:30 AM - 7:30 PM | Sunday: By Appointment",
  openingHours: "Mon - Sat: 10:30 AM - 7:30 PM | Sunday: By Appointment",
  branches: [
    {
      id: "pitampura",
      slug: "pitampura",
      city: "Pitampura, Delhi",
      name: "Pitampura Clinic",
      fullName: "Truly Derma Clinic — Pitampura Suite",
      address: "1st Floor, Building 46, Harsh Vihar, Above AU Small Finance Bank, Pitampura, New Delhi, PinCode :- 110034",
      shortAddress: "1st Floor, Building 46, Harsh Vihar, Pitampura, New Delhi - 110034",
      landmark: "Above AU Small Finance Bank, Harsh Vihar",
      pincode: "110034",
      phone: "+91 75910 55566",
      mapQuery: "Harsh+Vihar+Pitampura+New+Delhi",
      mapEmbedUrl: "https://maps.google.com/?q=Truly+Derma+Clinic+Pitampura",
      metroStation: "Pitampura / Kohat Enclave (Red Line)",
      parking: "Valet and reserved clinic parking available"
    },
    {
      id: "rajouri-garden",
      slug: "rajouri-garden",
      city: "Rajouri Garden, Delhi",
      name: "Rajouri Garden Clinic",
      fullName: "Truly Derma Clinic — Rajouri Garden Suite",
      address: "J2/16, Basement, Rajouri Garden, New Delhi, PinCode :- 110027",
      shortAddress: "J2/16, Basement, Rajouri Garden, New Delhi - 110027",
      landmark: "Near Main Market / J-Block",
      pincode: "110027",
      phone: "+91 75600 55566",
      mapQuery: "J2/16+Rajouri+Garden+New+Delhi",
      mapEmbedUrl: "https://maps.google.com/?q=Truly+Derma+Clinic+Rajouri+Garden",
      metroStation: "Rajouri Garden Metro (Blue & Pink Line interchange)",
      parking: "Dedicated patient parking in front of premises"
    }
  ],
  socials: {
    facebook: "https://www.facebook.com/p/Truly-Derma-100092376566785/",
    instagram: "https://www.instagram.com/trulydermabydrmeghhaa/",
    instagramHandle: "@trulydermabydrmeghhaa",
    whatsapp: "https://wa.me/918076926982"
  }
};

// =============================================================================
// 3. PHYSICIAN LEADERSHIP — DR. MEGHA AGGARWAL
// =============================================================================
export const doctorProfile = {
  name: "Dr. Megha Aggarwal",
  honorific: "Dr.",
  role: "Founder, Chief Dermatologist & Aesthetic Director",
  title: "Chief Dermatologist & Aesthetic Physician",
  qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy), Fellowship in Aesthetic Medicine (FAM)",
  credentials: [
    "MBBS — Gold Medalist",
    "MD (Dermatology, Venereology & Leprosy)",
    "Fellowship in Aesthetic Medicine (FAM)",
    "Certified by Board of Plastic Surgery Protocols",
    "Member of IADVL (Indian Association of Dermatologists)"
  ],
  experience: "10+ Years of Clinical Excellence",
  image: "/images/Doctor.png",
  imageAlt: "Dr. Megha Aggarwal - Chief Dermatologist at Truly Derma Clinic",
  secondaryImage: "/images/dr-megha.jpg",
  stats: [
    { label: "Successful Procedures", value: "20,000+", highlight: true },
    { label: "Patient Satisfaction", value: "99.4%", highlight: true },
    { label: "Years Experience", value: "10+", highlight: false },
    { label: "Academy Doctors Trained", value: "650+", highlight: false }
  ],
  philosophy: "At Truly Derma, we understand the importance of glowing skin and healthy hair in boosting confidence. To achieve exceptional results, our expert personnel use modern processes and cutting-edge technologies. We believe everyone should feel their best, so we offer a range of treatments tailored just for you.",
  bio: "Welcome to Truly Derma, Clinic & Academy, led by the famous Aesthetician Dr. Megha Aggarwal where our primary focus is on providing comprehensive solutions for skincare, hair care, LASER treatments, and fat loss. At Truly Derma, we understand the importance of glowing skin and healthy hair in boosting confidence. To achieve exceptional results, our expert personnel use modern processes and cutting-edge technologies. We believe everyone should feel their best, so we offer a range of treatments just for you.",
  personalNote: "Welcome to Truly Derma Clinic and Academy, where I, Dr. Megha, am dedicated to transforming your skin and hair with over ten years of experience. Whether you're dealing with pesky breakouts or seeking to renew mature skin, I offer personalized treatments and caring advice to help reveal your natural beauty. Skincare isn't just about the surface; it's about understanding yourself and promoting overall well-being. As your partner, I create a nurturing space where self-love is celebrated. I'm committed to staying updated with the latest advancements in beauty to provide you with the best possible care. If you're ready to start your journey of self-discovery and self-care, let's connect at Truly Derma Clinic and Academy in Delhi. Together, we'll help you to shine from the inside out.",
  signatureTitle: "Dr. Megha Aggarwal, MD (Dermatology)",
  availability: [
    { branch: "Pitampura Clinic", days: "Monday, Wednesday, Friday, Saturday", time: "10:30 AM - 7:30 PM" },
    { branch: "Rajouri Garden Clinic", days: "Tuesday, Thursday, Saturday", time: "10:30 AM - 7:30 PM" }
  ]
};

// =============================================================================
// 4. WHY CHOOSE TRULY DERMA (CORE CLINICAL PILLARS)
// =============================================================================
export const whyChooseUsList = [
  {
    id: "board-certified",
    title: "Certified by The Board of Plastic Surgery",
    subtitle: "Hospital-Grade Clinical Protocols",
    description: "Highest clinical safety, sterilization standards, and certified aesthetic dermatology protocols backed by verified medical boards.",
    icon: "Award",
    tag: "Medical Safety"
  },
  {
    id: "ten-years-training",
    title: "10+ Years of Surgical & Aesthetic Training",
    subtitle: "Over 20,000 Completed Procedures",
    description: "Extensive hands-on clinical and surgical expertise across all skin, laser, and hair therapies led personally by Dr. Megha Aggarwal.",
    icon: "Clock",
    tag: "Proven Mastery"
  },
  {
    id: "advanced-technology",
    title: "Experienced in all Plastic Surgery & Clinical Procedures",
    subtitle: "US-FDA Cleared Instrumentation",
    description: "State-of-the-art non-invasive technologies including TD Glowtech 360°, US-FDA cleared Q-Switch Nd:YAG Laser, and Cryo-lipolysis.",
    icon: "ShieldCheck",
    tag: "US-FDA Cleared"
  }
];

// =============================================================================
// 5. 3-STEP CELLULAR DIAGNOSIS & TREATMENT PROCESS
// =============================================================================
export const threeStepProcess = [
  {
    stepNumber: "01",
    title: "Digital Epiluminescence Skin Scan",
    subtitle: "Cellular-Level Diagnosis",
    description: "Before any applicator touches your face, multi-spectral polarized light mapping assesses sebum depth, UV photodamage, porphyrins, and baseline epidermal hydration.",
    icon: "Microscope",
    image: "/images/tech-1.jpg",
    details: "Identifies hidden dermal pigmentation, lipid barrier integrity, and biological skin age."
  },
  {
    stepNumber: "02",
    title: "Resonance Frequency & Vortex Delivery",
    subtitle: "Patented Energy Activation",
    description: "Customized application of 7-frequency microcurrents or Q-switch photo-acoustic shockwaves, tailored precisely to your tissue impedance for non-thermal remodeling.",
    icon: "Cpu",
    image: "/images/tech-2.jpg",
    details: "Restructures deep collagen networks without burning, ablating, or damaging delicate epidermal tissues."
  },
  {
    stepNumber: "03",
    title: "Electroporation & Cold Cryo-Seal",
    subtitle: "Active Lipid Restoration",
    description: "Pulsed micro-current channels open temporary transdermal gates, allowing clinical peptides to penetrate 400% deeper, sealed instantly with -5°C cryotherapy.",
    icon: "ShieldCheck",
    image: "/images/tech-3.jpg",
    details: "Locks active growth factors and moisture into cell membranes with zero post-procedure downtime."
  }
];

// =============================================================================
// 6. VERIFIED BEFORE & AFTER CLINICAL OUTCOMES
// =============================================================================
export const beforeAfterCases = [
  {
    id: "case-1",
    title: "Skin Radiance & Pore Refining",
    treatment: "Dermapen 4 + Recombinant Growth Factors (4 Sessions)",
    treatmentSlug: "dermapen-4",
    before: "/images/before-skin.jpg",
    after: "/images/after-skin.jpg",
    concern: "Dull Skin & Enlarged Pores",
    result: "Refined open pores, smooth glass texture, and restored lipid barrier.",
    timeframe: "8 Weeks",
    notes: "Smoothed skin texture, refined open pores, and restored luminous hydration barrier with zero peeling."
  },
  {
    id: "case-2",
    title: "Facial Contouring & Jowl Lift",
    treatment: "TD Glowtech 360° (3 Sessions)",
    treatmentSlug: "td-glowtech-360",
    before: "/images/before-contour.jpg",
    after: "/images/after-contour.jpg",
    concern: "Mid-Face Laxity & Jowls",
    result: "Sharpened jawline definition, lifted cheeks, and plump smile lines.",
    timeframe: "3 Weeks",
    notes: "Sharpened jawline angle, nasolabial softening, and restored mid-face volume through micro-current toning."
  },
  {
    id: "case-3",
    title: "Melasma & Pigmentation Clearing",
    treatment: "Q-Switch Laser Toning (4 Sessions)",
    treatmentSlug: "laser-toning",
    before: "/images/before-skin.jpg",
    after: "/images/after-skin.jpg",
    concern: "Deep Dermal Melasma & Sun Tan",
    result: "Cleared stubborn melasma patches and revealed balanced radiant complexion.",
    timeframe: "6 Weeks",
    notes: "Photoacoustic laser pulses cleared deep melasma without burning, shedding, or post-inflammatory hyperpigmentation."
  },
  {
    id: "case-4",
    title: "Acne Scar Revision & Tissue Smoothing",
    treatment: "Dermapen 4™ + Active Exosomes (3 Sessions)",
    treatmentSlug: "dermapen-4",
    before: "/images/before-contour.jpg",
    after: "/images/after-contour.jpg",
    concern: "Pitted Rolling Acne Scars",
    result: "Deep scar indentation filled in with natural new collagen growth.",
    timeframe: "10 Weeks",
    notes: "Filled in pitted acne scars and stimulated natural neo-collagenesis with medical-grade microneedling."
  }
];

// =============================================================================
// 7. PATIENT TESTIMONIALS & GOOGLE REVIEWS
// =============================================================================
export const testimonialsList = [
  {
    id: 1,
    author: "Rohan Kapoor",
    patientName: "Rohan Kapoor",
    category: "hair",
    badge: "Verified Google Review • Local Guide",
    treatment: "Personalized Hair Restoration",
    treatmentSlug: "hair-rejuvenation",
    rating: 5,
    branch: "Pitampura Suite, Delhi",
    city: "Pitampura Clinic",
    relativeTime: "2 weeks ago",
    date: "Verified Patient",
    reviewCount: "48 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#4285F4]",
    comment: "I cannot express how grateful I am to TrulyDerma for helping me regain my self-confidence. After struggling with hair loss for years, I finally decided to seek professional help. The experts at TrulyDerma guided me through a personalized hair restoration program that included advanced treatments and nourishing products. The results have been incredible! My hair is thicker, stronger, and I feel like a new person. TrulyDerma is truly a lifesaver!",
    doctorReply: "Thank you so much, Rohan! It was an absolute pleasure guiding you through your personalized hair restoration roadmap. Delighted to see your confidence restored!",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Thank you so much, Rohan! It was an absolute pleasure guiding you through your personalized hair restoration roadmap. Delighted to see your confidence restored!"
    }
  },
  {
    id: 2,
    author: "Veeneta Harjai",
    patientName: "Veeneta Harjai",
    category: "laser",
    badge: "Verified Google Review • Local Guide",
    treatment: "Laser Skin Rejuvenation (Q-Switch)",
    treatmentSlug: "laser-toning",
    rating: 5,
    branch: "Rajouri Garden Suite, Delhi",
    city: "Rajouri Garden Clinic",
    relativeTime: "1 month ago",
    date: "Verified Patient",
    reviewCount: "29 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#EA4335]",
    comment: "The team at TrulyDerma is exceptional! From the moment I stepped into their clinic, I felt welcomed and cared for. The laser treatments I received for skin rejuvenation were precisely tailored to my needs, and the results have been remarkable. The improvement in my skin's texture and appearance is beyond what I could have imagined. The staff's expertise, professionalism, and warm approach create an atmosphere that is both relaxing and uplifting. I highly recommend TrulyDerma to anyone seeking top-notch skincare treatments.",
    doctorReply: "Warm thanks, Veeneta! We are overjoyed that you experienced visible skin renewal with our precision laser protocols. Looking forward to seeing you at your next maintenance visit!",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Warm thanks, Veeneta! We are overjoyed that you experienced visible skin renewal with our precision laser protocols. Looking forward to seeing you at your next maintenance visit!"
    }
  },
  {
    id: 3,
    author: "Seema Malhotra",
    patientName: "Seema Malhotra",
    category: "skin",
    badge: "Verified Google Review",
    treatment: "Medi-Facial & Skincare Regimen",
    treatmentSlug: "medi-facial",
    rating: 5,
    branch: "Pitampura Suite, Delhi",
    city: "Pitampura Clinic",
    relativeTime: "3 weeks ago",
    date: "Verified Patient",
    reviewCount: "12 reviews",
    isLocalGuide: false,
    avatarBg: "bg-[#FBBC05]",
    comment: "I have been a client of TrulyDerma for several months now, and I am absolutely thrilled with the results. The team at TrulyDerma is not only knowledgeable and skilled, but they genuinely care about their clients' well-being. The personalized skincare treatments and advice I received have transformed my complexion. My skin is now healthier, more radiant, and I feel more confident than ever. TrulyDerma is my go-to destination for all things skincare!",
    doctorReply: "Thank you for your generous words, Seema! Protecting your skin barrier and boosting natural radiance is always our top clinical priority.",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Thank you for your generous words, Seema! Protecting your skin barrier and boosting natural radiance is always our top clinical priority."
    }
  },
  {
    id: 4,
    author: "Pooja Sharma",
    patientName: "Pooja Sharma",
    category: "skin",
    badge: "Verified Google Review • Local Guide",
    treatment: "TD Glowtech 360° Facial",
    treatmentSlug: "td-glowtech-360",
    rating: 5,
    branch: "Rajouri Garden Suite, Delhi",
    city: "Rajouri Garden Clinic",
    relativeTime: "1 month ago",
    date: "Verified Patient",
    reviewCount: "63 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#34A853]",
    comment: "I had an upcoming family wedding and booked the TD Glowtech 360 session. The immediate lift on my jawline and the intense glow were stunning. No redness at all! Dr. Megha personally examined my skin beforehand and explained every step so gently. Best aesthetic clinic in West Delhi without doubt.",
    doctorReply: "Thank you Pooja! The TD Glowtech 360° was specially formulated for red carpet radiance and instant contour without any downtime.",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Thank you Pooja! The TD Glowtech 360° was specially formulated for red carpet radiance and instant contour without any downtime."
    }
  },
  {
    id: 5,
    author: "Dr. Amit Roy",
    patientName: "Dr. Amit Roy",
    category: "hair",
    badge: "Physician Patient Review",
    treatment: "PRP & GFC Hair Rejuvenation",
    treatmentSlug: "hair-rejuvenation",
    rating: 5,
    branch: "Pitampura Suite, Delhi",
    city: "Pitampura Clinic",
    relativeTime: "2 months ago",
    date: "Verified Patient",
    reviewCount: "34 reviews",
    isLocalGuide: false,
    avatarBg: "bg-[#9333EA]",
    comment: "Being a physician myself, sterilization standards and clinical ethics matter greatly to me. Dr. Megha’s clinic follows strict hospital-grade hygiene, US-FDA cleared machinery, and evidence-based protocols. My hair shedding reduced noticeably after just two sessions.",
    doctorReply: "Appreciate your esteemed feedback, Dr. Roy. Clinical integrity and scientific efficacy remain our foundational ethos.",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Appreciate your esteemed feedback, Dr. Roy. Clinical integrity and scientific efficacy remain our foundational ethos."
    }
  },
  {
    id: 6,
    author: "Ananya Saxena",
    patientName: "Ananya Saxena",
    category: "skin",
    badge: "Verified Google Review • Local Guide",
    treatment: "Medical Hydra Facial MD",
    treatmentSlug: "hydra-facial",
    rating: 5,
    branch: "Pitampura Suite, Delhi",
    city: "Pitampura Clinic",
    relativeTime: "3 weeks ago",
    date: "Verified Patient",
    reviewCount: "19 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#2563EB]",
    comment: "My skin felt completely decongested and radiant right after the Medical Hydra Facial. The suction vortex genuinely extracted blackheads without pinching or painful squeezing. The clinic aesthetic is stunning, clean, and so calming. Dr. Megha's staff is courteous and knowledgeable.",
    doctorReply: "So happy you enjoyed the gentle vortex deep cleanse, Ananya! Consistent hydration is the cornerstone of healthy dermal renewal.",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "So happy you enjoyed the gentle vortex deep cleanse, Ananya! Consistent hydration is the cornerstone of healthy dermal renewal."
    }
  },
  {
    id: 7,
    author: "Karan Singhal",
    patientName: "Karan Singhal",
    category: "laser",
    badge: "Verified Google Review",
    treatment: "Painless Laser Hair Reduction",
    treatmentSlug: "laser-hair-reduction",
    rating: 5,
    branch: "Rajouri Garden Suite, Delhi",
    city: "Rajouri Garden Clinic",
    relativeTime: "1 month ago",
    date: "Verified Patient",
    reviewCount: "15 reviews",
    isLocalGuide: false,
    avatarBg: "bg-[#0D9488]",
    comment: "Was very skeptical about laser hair removal hurting, but Truly Derma's triple-wavelength machine with chilled contact cooling was completely painless. Just finished session 4 for beard shaping and the reduction is over 80%. Highly recommended!",
    doctorReply: "Thank you Karan! Ice-contact sapphire cooling technology makes our laser protocols painless even on sensitive areas.",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Thank you Karan! Ice-contact sapphire cooling technology makes our laser protocols painless even on sensitive areas."
    }
  },
  {
    id: 8,
    author: "Ritu Chawla",
    patientName: "Ritu Chawla",
    category: "skin",
    badge: "Verified Google Review • Local Guide",
    treatment: "Dermapen 4™ Acne Scar Revision",
    treatmentSlug: "dermapen-4",
    rating: 5,
    branch: "Pitampura Suite, Delhi",
    city: "Pitampura Clinic",
    relativeTime: "5 weeks ago",
    date: "Verified Patient",
    reviewCount: "51 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#D97706]",
    comment: "I had stubborn acne scars from my college years that makeup could never hide. Three sessions of Dermapen 4 with exosomes at Truly Derma smoothed out the pitted texture dramatically. Dr. Megha gave realistic expectations and delivered beyond them.",
    doctorReply: "Dear Ritu, watching your skin texture smooth out naturally through collagen induction has been so rewarding for our entire team!",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Dear Ritu, watching your skin texture smooth out naturally through collagen induction has been so rewarding for our entire team!"
    }
  }
];

// =============================================================================
// 8. ALL 18 CLINICAL PROCEDURES DIRECTORY
// =============================================================================
export const allTreatments = [
  // --- Category A: Skin & Medi-Facials ---
  {
    id: "td-glowtech-360",
    slug: "td-glowtech-360",
    name: "TD Glowtech 360°",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Instant Face Lift & Skin Gym",
    tagline: "Truly Derma Exclusive in India — Patented Electroporation & 7 Micro-Current Frequencies",
    badge: "Exclusive In India",
    description: "TD Glowtech 360° uses a patented electroporation method with seven scientifically proven micro-current frequencies. This non-invasive skin gym offers customized treatments that lift, tone, and contour the skin with no downtime. It’s a painless, relaxing experience that delivers instant, long-lasting results.",
    heroImage: "/banners/banner-facial.orig.jpg",
    sessionDuration: "60 - 75 Mins",
    downtime: "No downtime (Walkout Glow)",
    suitableFor: "Skin Laxity, Sagging Contours, Dull Skin, Facial Tone & Muscle Sculpting",
    highlights: [
      "Exclusive proprietary treatment in India only at Truly Derma",
      "Patented 7-microcurrent resonance frequencies",
      "Cellular electroporation drives nutrients 400% deeper",
      "Instant face lift and jawline contouring with zero downtime"
    ],
    procedureSteps: [
      { step: 1, title: "Skin Diagnosis & Cleansing", description: "Comprehensive analysis of skin condition and preparation." },
      { step: 2, title: "7-Frequency Micro-Currents", description: "Targeted bio-frequencies stimulate facial muscles and lift contours." },
      { step: 3, title: "Patented Electroporation Infusion", description: "Pulsed micro-current channels drive active revitalizing nutrients deep into dermis." },
      { step: 4, title: "Cryo-Shield Finish", description: "Seals in hydration and firms the skin with zero recovery time." }
    ],
    preCareTips: [
      "Avoid harsh chemical peels or exfoliants 48 hours prior",
      "Stay hydrated before your session",
      "Inform the doctor if you have pacemakers or metal implants"
    ],
    postCareTips: [
      "Apply broad-spectrum mineral SPF 50+ daily",
      "You can apply makeup immediately if desired",
      "Maintain hydration with peptide-based moisturizers"
    ]
  },
  {
    id: "hydra-facial",
    slug: "hydra-facial",
    name: "Medical Hydra Facial MD",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Deep Pore Cleanse & Glass Skin Glow",
    tagline: "Exfoliation, Extraction, and Hydration Using Specialized Vortex Technology",
    badge: "Most Popular",
    description: "Our Hydrafacial combines exfoliation, extraction, and hydration using specialized vortex technology. It removes dead skin cells, clears pores, and extracts impurities, revealing a smoother complexion. Plus, it infuses nourishing serums for intense hydration, improving skin tone, reducing fine lines, and giving you a youthful glow. It is a popular non-invasive treatment that helps to refresh the skin. You can see a noticeable improvement in your skin, texture, and tone immediately after the treatment.",
    heroImage: "/images/tech-3.jpg",
    sessionDuration: "45 Mins",
    downtime: "No downtime",
    suitableFor: "Dead Skin Cells, Clogged Pores, Impurities, Fine Lines, Dehydration, Dull Tone",
    highlights: [
      "Specialized 3-step vortex technology extraction",
      "Painless vacuum suction unclogs pores and blackheads",
      "Infuses nourishing hyaluronic acid and antioxidant serums",
      "Noticeable improvement in glass-skin texture immediately"
    ],
    procedureSteps: [
      { step: 1, title: "Cleanse & Peel", description: "Uncovers a new layer of skin with gentle exfoliation and relaxing resurfacing." },
      { step: 2, title: "Extract & Hydrate", description: "Removes debris from pores with painless vortex suction while delivering intense moisturizers." },
      { step: 3, title: "Fuse & Protect", description: "Saturates the skin’s surface with antioxidants and peptides to maximize your glow." }
    ],
    preCareTips: ["Discontinue topical retinoids 48 hours before treatment"],
    postCareTips: ["Avoid washing face with hot water for 6 hours", "Wear sunscreen"]
  },
  {
    id: "medi-facial",
    slug: "medi-facial",
    name: "Prescription Medi-Facial",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Customized Doctor Facial for Acne & Glow",
    tagline: "Customized Medical-Grade Facials Tailored for Specific Skin Conditions",
    badge: "Doctor Formulated",
    description: "At our clinic, we offer customized medi facials to refresh your skin. We use medical-grade ingredients to address particular conditions such as acne, hyperpigmentation, and ageing, leaving you with a luminous complexion. Results can be long-lasting, especially with a consistent skincare routine and periodic maintenance facials.",
    heroImage: "/banners/banner-glow.jpg",
    sessionDuration: "50 Mins",
    downtime: "No downtime",
    suitableFor: "Active Acne, Hyperpigmentation, Ageing Skin, Dullness, Environmental Pollution",
    highlights: [
      "Customized after thorough polarized dermoscopy diagnosis",
      "Pharmaceutical-grade medical active ingredients",
      "Targets stubborn acne, sun damage, and premature ageing",
      "Leaves you with a luminous, calm, long-lasting complexion"
    ],
    procedureSteps: [
      { step: 1, title: "Skin Assessment", description: "Doctor evaluates skin condition and customizes the treatment formula." },
      { step: 2, title: "Medical-Grade Exfoliation", description: "Gentle medical exfoliation to remove cellular debris without irritation." },
      { step: 3, title: "Active Serum Ionization", description: "Pharmaceutical-grade active ingredients penetrated deep into skin layers." }
    ],
    preCareTips: ["No waxing or threading 3 days prior"],
    postCareTips: ["Avoid swimming or heavy sauna for 24 hours"]
  },
  {
    id: "mesotherapy",
    slug: "mesotherapy",
    name: "Mesotherapy Rejuvenation",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Direct Vitamin & Moisture Infusion",
    tagline: "Nutrient Injection into Mesoderm for Hair Loss & Skin Rejuvenation",
    badge: "Cellular Nutrition",
    description: "In today’s fast-paced world, hair thinning and baldness are becoming increasingly common due to stress and lifestyle factors. Mesotherapy emerges as a popular solution, offering a fruitful treatment for hair loss, alopecia, and male-pattern baldness caused by hormonal imbalances. Unlike topical treatments like Minoxidil, our mesotherapy treatment yields superior results. This painless procedure involves injecting a specialised solution into the scalp’s mesoderm layer, including vitamins, amino acids, and growth factors. It can also be performed on various parts of the body, including the face, neck, and hands to improve skin texture, tone, and overall appearance.",
    heroImage: "/images/tech-2.jpg",
    sessionDuration: "30 - 60 Mins",
    downtime: "None",
    suitableFor: "Hair Thinning, Alopecia, Male-Pattern Baldness, Facial Skin Texture, Dull Tone",
    highlights: [
      "Painless micro-injection into the targeted mesoderm layer",
      "Formulated with vitamins, amino acids, and vital growth factors",
      "Yields superior results compared to standard topical treatments",
      "Versatile therapy for scalp, face, neck, and hands"
    ],
    procedureSteps: [
      { step: 1, title: "Target Area Mapping", description: "Physician maps the treatment zone on scalp or face." },
      { step: 2, title: "Mesoderm Injection", description: "Painless delivery of specialized vitamin, amino acid, and peptide cocktail." },
      { step: 3, title: "Scalp / Skin Calming", description: "Soothing application to enhance absorption and patient comfort." }
    ],
    preCareTips: ["Cleanse hair or skin on morning of treatment"],
    postCareTips: ["Avoid washing hair/face for 6 hours"]
  },
  {
    id: "party-pop-facial",
    slug: "party-pop-facial",
    name: "Party Pop Facial",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Red Carpet Instant Radiance",
    tagline: "Fun and Refreshing Facial Treatment Designed for an Instant Radiant Glow",
    badge: "Instant Glow",
    description: "It is a fun and refreshing facial treatment. Designed to leave you with a radiant glow, it is perfect for any occasion. Details may vary depending on the person and individual outcomes needed, but the focus is on skin cleansing analysis, exfoliation, resurfacing, hydration, brightening, radiance boost, lip treatment, massage, and relaxation, with some final touches and additional enhancement, depending on personal goals.",
    heroImage: "/banners/banner-facial.orig.jpg",
    sessionDuration: "45 Mins",
    downtime: "No downtime",
    suitableFor: "Pre-Event Radiance, Parties, Weddings, Dull Complexion, Dry Lips",
    highlights: [
      "Designed for an instant, photo-ready radiant glow",
      "Exfoliation, resurfacing, and deep hydration in one session",
      "Includes brightening boost, lip rejuvenation, and relaxing massage",
      "Perfect for any occasion with zero recovery time"
    ],
    procedureSteps: [
      { step: 1, title: "Skin Cleansing Analysis", description: "Evaluation of skin needs and gentle purification." },
      { step: 2, title: "Exfoliation & Resurfacing", description: "Buffs away dull surface cells to uncover fresh glow." },
      { step: 3, title: "Hydration & Radiance Boost", description: "Infusion of brightening actives, lip treatment, and massage." }
    ],
    preCareTips: ["Schedule 1-2 days before your big event"],
    postCareTips: ["Makeup can be worn right after!"]
  },
  {
    id: "photo-facial",
    slug: "photo-facial",
    name: "Photo Facial (IPL Light Therapy)",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Light Therapy Skin Brightening",
    tagline: "Targeting Sun Damage, Age Spots, Redness & Fine Lines with Specialized Light",
    badge: "Clinical Phototherapy",
    description: "Our Photofacial treatment is designed to target and diminish the signs of sun damage, age spots, redness, and fine lines. Using specialized light wavelengths, we precisely penetrate the skin’s surface, stimulating collagen production and promoting cellular renewal. It requires little to no recovery time. You can resume normal activities immediately after the treatment. When done correctly, minimal risks are involved.",
    heroImage: "/images/tech-1.jpg",
    sessionDuration: "35 Mins",
    downtime: "Little to no recovery time",
    suitableFor: "Sun Damage, Age Spots, Facial Redness, Fine Lines, Dull Skin",
    highlights: [
      "Specialized light wavelengths penetrate the skin's surface safely",
      "Targets sun damage, age spots, redness, and fine lines",
      "Stimulates collagen production and cellular renewal",
      "Little to no recovery time — resume normal activities immediately"
    ],
    procedureSteps: [
      { step: 1, title: "Protective Cleansing", description: "Skin cleansing and application of optical protective shields." },
      { step: 2, title: "Calibrated Light Delivery", description: "Targeted light pulses treat pigmentation and redness." },
      { step: 3, title: "Cooling Application", description: "Post-treatment soothing balm and mineral sun protection." }
    ],
    preCareTips: ["Avoid direct sun exposure or tanning beds for 2 weeks prior"],
    postCareTips: ["Strict SPF 50+ application is mandatory"]
  },
  {
    id: "laser-toning",
    slug: "laser-toning",
    name: "Laser Toning (Q-Switch Nd:YAG Laser)",
    category: "Laser Treatment",
    categoryKey: "laser",
    plainHeadline: "Pigmentation, Melasma & Sun Tan Removal",
    tagline: "Advanced Q-Switch LASER & Carbon Peel for Sunspots, Melasma & Acne Scars",
    badge: "Clinical Gold Standard",
    description: "In LASER toning, we employ advanced techniques like Q-Switch LASER and Carbon Peel to improve your skin’s tone and texture by targeting issues like sunspots, freckles, melasma, and acne scars. It is a non-invasive cosmetic procedure. The heat that is generated by the LASER helps with collagen production and breaks down pigment particles. It needs little to no recovery time, and it is effective in reducing acne, blemishes, and other types of scarring. Very short pulses of high energy are delivered to the skin, absorbed by pigments in the skin, breaking them down into smaller particles and gradually removing them. You can see a noticeable improvement in pigmentation and skin texture only after a few sessions.",
    heroImage: "/banners/banner-laser.orig.jpg",
    sessionDuration: "40 Mins",
    downtime: "Little to no recovery time (Zero peeling)",
    suitableFor: "Sunspots, Freckles, Melasma, Acne Scars, Blemishes, Uneven Pigmentation",
    highlights: [
      "Advanced Q-Switch LASER and Hollywood Carbon Peel techniques",
      "Sub-nanosecond photoacoustic shockwaves shatter pigment particles",
      "Stimulates deep collagen production and shrinks open pores",
      "Safe for Indian skin types without burning or hyperpigmentation"
    ],
    procedureSteps: [
      { step: 1, title: "Skin Preparation", description: "Cleansing and optional carbon lotion application for Hollywood peel." },
      { step: 2, title: "Q-Switch Laser Pulses", description: "Short pulses of high energy shatter pigment particles painlessly." },
      { step: 3, title: "Calming Barrier Finish", description: "Hydrating serum and sun protection applied to treated area." }
    ],
    preCareTips: ["Avoid harsh scrubs 48 hours prior"],
    postCareTips: ["Do not rub skin; use mild cleanser and sunscreen"]
  },
  {
    id: "under-eye-dark-circle",
    slug: "under-eye-dark-circle",
    name: "Under-Eye Dark Circle Therapy",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Under-Eye Dark Circles & Bags Relief",
    tagline: "Vanishing Under-Eye Dark Circles & Restoring Brightness to the Eye Area",
    badge: "Clinic Speciality",
    description: "Vanishing under-eye dark circles is one of our specialities. Using advanced treatments and techniques, we address the root causes of dark circles to restore brightness to your under-eye area. Under the eye dark circles or shadows, while typically not a sign of a serious medical condition, can affect one’s appearance and self-confidence. Dark circles can have various causes, including genetics, ageing, fatigue, allergies, etc. Treatment options range from topical creams and cosmetic procedures to lifestyle modifications aimed at reducing pigment and improving skin texture. At Truly Derma, Clinic & Academy, we prioritize patient safety, comfort, and satisfaction.",
    heroImage: "/images/gorgeous-visage.jpg",
    sessionDuration: "35 Mins",
    downtime: "Zero downtime",
    suitableFor: "Under-Eye Dark Circles, Shadows, Fatigue Eyes, Pigment Accumulation, Fine Wrinkles",
    highlights: [
      "Vanishing dark circles is one of Truly Derma's clinical specialities",
      "Addresses root causes: genetics, ageing, fatigue, and vascular pooling",
      "Reduces dark pigment while improving delicate periorbital skin texture",
      "Personalized care prioritizing patient safety, comfort, and satisfaction"
    ],
    procedureSteps: [
      { step: 1, title: "Periorbital Diagnosis", description: "Physician evaluates vascular vs. pigmented root causes of dark circles." },
      { step: 2, title: "Targeted Depigmentation", description: "Safe clinical active formulations to disperse pigment accumulation." },
      { step: 3, title: "Rejuvenating Eye Hydration", description: "Soothing eye contour therapy restoring brightness and elasticity." }
    ],
    preCareTips: ["Arrive with clean, makeup-free eye area"],
    postCareTips: ["Keep periorbital skin well moisturized"]
  },
  {
    id: "dermapen-4",
    slug: "dermapen-4",
    name: "Dermapen 4™ Microneedling",
    category: "Skin Treatment",
    categoryKey: "skin",
    plainHeadline: "Acne Scar Smoothing & Pore Tightening",
    tagline: "Virtually Painless Microneedling with Patented Hylafuse Complex Formula",
    badge: "Advanced Microneedling",
    description: "Dermapen 4 offers a virtually painless microneedling experience, gliding smoothly over the skin and making treatments comfortable even without anesthetics. By creating microchannels in the skin, it stimulates collagen production to address concerns like fine lines, acne scars, and uneven texture. The patented Hylafuse Complex formula enhances the delivery of topical nutrients, carrying up to 80% more into the skin for optimal results. This microneedling treatment effectively reduces age and sunspots, lines and wrinkles, as well as thinning and sagging skin. Additionally, Dermapen 4 is highly effective for reducing unwanted pigmentation and stretch marks by reaching depths of up to 3 mm.",
    heroImage: "/images/hero-skin.jpg",
    sessionDuration: "50 Mins",
    downtime: "Mild transient redness (12 - 24 hours)",
    suitableFor: "Pitted Acne Scars, Enlarged Pores, Uneven Texture, Age & Sunspots, Stretch Marks",
    highlights: [
      "Virtually painless microneedling gliding smoothly over the skin",
      "Patented Hylafuse Complex carries up to 80% more nutrients into skin",
      "Stimulates natural neo-collagenesis to flatten and plump pitted scars",
      "Safe and effective for pigmentation, wrinkles, and stretch marks up to 3mm"
    ],
    procedureSteps: [
      { step: 1, title: "Skin Cleansing & Preparation", description: "Preparation with gentle antiseptic solution." },
      { step: 2, title: "Smooth Gliding Microneedling", description: "Dermapen 4 creates precise microchannels while infusing Hylafuse Complex." },
      { step: 3, title: "Cooling & Barrier Repair", description: "Calming mask applied to accelerate recovery and lock in moisture." }
    ],
    preCareTips: ["Stop topical actives (retinoids, AHA/BHA) 3 days before"],
    postCareTips: ["Avoid touching face for 4 hours; apply prescribed barrier balm"]
  },

  // --- Category B: Laser & Hair Care ---
  {
    id: "laser-hair-reduction",
    slug: "laser-hair-reduction",
    name: "Triple-Wavelength Laser Hair Reduction",
    category: "Hair Treatment",
    categoryKey: "hair",
    plainHeadline: "Painless Laser Hair Reduction",
    tagline: "US-FDA Approved 4D Tec LASER with 4 Wavelengths for Smooth, Hair-Free Skin",
    badge: "US-FDA Approved",
    description: "Looking for smooth, hair-free skin? Our US-FDA approved 4D Tec LASER with 4 wavelengths ensures lasting results for all skin types. Our skilled professionals curate treatments for your specific needs, whether your face, underarms, legs, or bikini line. This method targets dark-coarse hair while leaving the skin undamaged, and in comparison to other hair removal methods, it is less painful. Using precise LASER energy, we disable hair follicles, offering a quick, painless procedure with no downtime.",
    heroImage: "/banners/banner-laser.orig.jpg",
    sessionDuration: "30 - 60 Mins",
    downtime: "No downtime",
    suitableFor: "Unwanted Hair on Face, Underarms, Arms, Legs, Bikini Line, Back, Full Body",
    highlights: [
      "US-FDA approved 4D Tec LASER featuring 4 synchronized wavelengths",
      "Sub-zero sapphire contact cooling for a painless experience",
      "Permanently disables hair follicles across all Indian skin types",
      "Quick, smooth, significantly less painful procedure with zero downtime"
    ],
    procedureSteps: [
      { step: 1, title: "Consultation & Area Prep", description: "Assessment of skin and hair type, followed by gentle grid marking." },
      { step: 2, title: "4D Tec Laser Application", description: "Contact cooling tip glides across skin delivering precise laser energy." },
      { step: 3, title: "Post-Laser Soothing", description: "Application of soothing cream to ensure complete comfort." }
    ],
    preCareTips: ["Shave area 24 hours prior; do not wax or pluck for 3 weeks"],
    postCareTips: ["Avoid hot showers and direct sun for 24 hours"]
  },
  {
    id: "hair-rejuvenation",
    slug: "hair-rejuvenation",
    name: "Hair Rejuvenation Therapy (PRP & Growth Factors)",
    category: "Hair Treatment",
    categoryKey: "hair",
    plainHeadline: "Hair Fall Control & Natural Regrowth",
    tagline: "Stimulating Hair Follicles, Growth & Scalp Revitalization with PRP Therapy",
    badge: "Follicle Revival",
    description: "At our clinic, we offer hair rejuvenation treatments to help you achieve luscious, healthy locks. Using advanced techniques and specialized products, our hair rejuvenation treatment stimulates hair follicles, promotes hair growth, and revitalizes your scalp. Whether you’re dealing with hair loss or simply want to enhance the health and vitality of your hair, our customized treatments can help you achieve the beautiful hair you’ve always wanted. Losing 10-100 strands of hair daily is normal, but if you’re noticing excessive shedding, it’s advisable to consult for PRP treatment for hair loss. At our clinic, we draw your blood, process it, and inject it into the scalp to stimulate hair growth. This treatment is beneficial for individuals going through thinning or sparse hair and is suitable for both men and women.",
    heroImage: "/images/particle-lady.jpg",
    sessionDuration: "60 Mins",
    downtime: "No downtime",
    suitableFor: "Excessive Hair Shedding, Thinning Hair, Sparse Patches, Dull Scalp Vitality",
    highlights: [
      "PRP and GFC growth factor concentrate therapies for hair loss",
      "Draws, concentrates, and injects autologous biostimulatory factors into scalp",
      "Beneficial for thinning crown or widening parting in both men and women",
      "Customized treatment plans with microscopic dermoscopy progress monitoring"
    ],
    procedureSteps: [
      { step: 1, title: "Scalp Health Assessment", description: "Physician evaluates shedding pattern and hair density." },
      { step: 2, title: "PRP Processing", description: "Blood sample processed in specialized centrifuge to concentrate platelets." },
      { step: 3, title: "Targeted Scalp Injection", description: "Painless micro-injection into scalp areas needing hair revival." }
    ],
    preCareTips: ["Wash hair on morning of treatment; stay well hydrated"],
    postCareTips: ["Do not wash hair for 12 hours post treatment"]
  },
  {
    id: "hair-transplant",
    slug: "hair-transplant",
    name: "FUE Natural Hair Transplant",
    category: "Hair Treatment",
    categoryKey: "hair",
    plainHeadline: "Natural Lifetime Hair Transplant",
    tagline: "Transformative Advanced Follicular Transplantation for Full, Lush, Permanent Hair",
    badge: "Permanent Results",
    description: "We offer a transformative solution for those seeking to restore fullness and confidence to their hair! Our skilled aestheticians specialize in this advanced procedure, transplanting healthy hair follicles to areas of thinning or balding. Whether you’re dealing with male pattern baldness, thinning hair, or receding hairlines, our hair transplantation treatment can help you achieve the full, lush hair you desire. Typically, the back or sides of the scalp go to the balding or thinner areas. Transplanted hair growth typically begins within a few weeks after the surgery, and over several months, the transplanted hair grows thicker, fuller, and more permanent. Patients can achieve natural-looking results that last for years to come.",
    heroImage: "/images/radiant-woman.png",
    sessionDuration: "4 - 6 Hours (Day Procedure)",
    downtime: "2 - 3 Days Rest",
    suitableFor: "Male Pattern Baldness, Receding Hairlines, Crown Balding, Thinning Scalp",
    highlights: [
      "Transplanting healthy permanent follicles from genetic donor zone",
      "Individual micro-motor Follicular Unit Extraction (FUE)",
      "Artistic hairline design complementing facial symmetry",
      "Transplanted hair grows permanently and can be cut, styled, and washed naturally"
    ],
    procedureSteps: [
      { step: 1, title: "Consultation & Hairline Design", description: "Designing natural hairline matching facial harmony and donor density." },
      { step: 2, title: "Follicle Harvesting", description: "Painless extraction of healthy follicular units from donor area." },
      { step: 3, title: "Precision Implantation", description: "Follicles placed with exact natural angle and depth for seamless density." }
    ],
    preCareTips: ["Stop blood thinners and smoking 1 week before as advised"],
    postCareTips: ["Follow post-op wash protocol with clinic spray solution"]
  },
  {
    id: "hair-detox-therapy",
    slug: "hair-detox-therapy",
    name: "Hair Detox & Scalp Therapy",
    category: "Hair Treatment",
    categoryKey: "hair",
    plainHeadline: "Scalp Deep Cleanse & Dandruff Defense",
    tagline: "Deeply Cleansing & Fortifying Hair and Scalp, Removing Buildup & Impurities",
    badge: "Scalp Purification",
    description: "Hair detox therapy treatment is designed to deeply cleanse and fortify your hair and scalp, removing impurities and buildup to reveal healthy locks. Whether you’re dealing with product buildup or environmental pollutants, or just want to give your hair a reset, our hair detox therapy is the perfect solution. The combination of deep cleansing shampoo, stimulating massages, nourishing conditions, and hair detox therapy can help restore balance and vitality to your scalp and hair.",
    heroImage: "/banners/banner-glow.jpg",
    sessionDuration: "45 Mins",
    downtime: "No downtime",
    suitableFor: "Product Buildup, Environmental Pollutants, Itchy Scalp, Dandruff, Oily Roots",
    highlights: [
      "Deeply cleanses and fortifies hair follicles and scalp tissue",
      "Removes stubborn product buildup and environmental toxic pollutants",
      "Stimulating scalp massage with medical-grade conditioning",
      "Restores natural scalp microbiome balance, vitality, and freshness"
    ],
    procedureSteps: [
      { step: 1, title: "Scalp Buildup Assessment", description: "Evaluating scalp congestion and pollutant accumulation." },
      { step: 2, title: "Deep Cleansing Shampoo", description: "Purifying wash to strip away toxic residues and product buildup." },
      { step: 3, title: "Stimulating Massage & Conditioning", description: "Scalp therapy restoring micro-circulation and hair shaft vitality." }
    ],
    preCareTips: ["No specific prep needed"],
    postCareTips: ["Maintain clean scalp with gentle sulfate-free shampoo"]
  },

  // --- Category C: Body Contouring & Aesthetics ---
  {
    id: "fat-loss",
    slug: "fat-loss",
    name: "Non-Surgical Fat Loss & Contouring",
    category: "Fat Loss",
    categoryKey: "body",
    plainHeadline: "Non-Surgical Fat Loss & Body Contouring",
    tagline: "Result-Oriented Treatments Targeting Stubborn Fat Deposits & Sculpting Physique",
    badge: "Physique Contouring",
    description: "Looking to shed those stubborn fat pockets and get closer to your dream body? Well, you’re in luck! Here at our clinic, we’ve got some result-oriented fat loss treatments that can help you do just that. We offer services designed to target stubborn fat deposits and contour your physique. At Truly Derma, we understand the importance of glowing skin and healthy hair in boosting confidence, and we believe everyone should feel their best, so we offer a range of fat loss treatments just for you.",
    heroImage: "/images/after-contour.jpg",
    sessionDuration: "50 - 60 Mins",
    downtime: "No downtime",
    suitableFor: "Stubborn Fat Pockets, Tummy Pouch, Love Handles, Thighs, Upper Arms, Double Chin",
    highlights: [
      "Result-oriented fat loss treatments for stubborn localized fat pockets",
      "Cryolipolysis and ultrasound cavitation destroy stubborn fat cells",
      "Helps you contour your physique safely without surgery or incisions",
      "Painless walk-in, walk-out procedure with zero recovery downtime"
    ],
    procedureSteps: [
      { step: 1, title: "Physique & Target Zone Mapping", description: "Assessment of stubborn fat deposits and aesthetic goals." },
      { step: 2, title: "Targeted Fat Reduction Session", description: "Application of specialized non-invasive contouring technology." },
      { step: 3, title: "Metabolic Firming & Guidance", description: "Post-session firming and personalized advice to maximize results." }
    ],
    preCareTips: ["Drink 1-2 liters of water before the session"],
    postCareTips: ["Increase daily water intake to help lymphatic clearance"]
  },
  {
    id: "semi-permanent",
    slug: "semi-permanent",
    name: "Semi-Permanent Makeup (BB Glow & Microblading)",
    category: "Semi-Permanent Makeup",
    categoryKey: "cosmetic",
    plainHeadline: "Microblading Eyebrows & BB Glow",
    tagline: "BB Glow Korean Beauty Treatment, Eyebrow Microblading & Micro-Pigmentation",
    badge: "Korean Beauty Glow",
    description: "We offer a wide range of treatments to ensure that you don’t miss out on a party or function. Who isn’t a fan of Korean Beauty? Get it with our BB Glow treatment! This procedure helps you get that coveted “no-makeup” look using a micro-needling process. It is a semi-permanent make-up treatment that aims to improve skin tone, texture, and overall appearance. It involves the application of a specialized BB cream formulation containing skin-enhancing ingredients via microneedling or micro-pigmentation techniques. Immediate improvement in skin tone, texture, and radiance is seen following the treatment.",
    heroImage: "/images/gorgeous-visage.jpg",
    sessionDuration: "60 - 90 Mins",
    downtime: "No downtime (3-5 days mild healing for brows)",
    suitableFor: "Dull Complexion, Sparse Eyebrows, Pale Lips, Desired 'No-Makeup' Look, Parties & Weddings",
    highlights: [
      "Coveted Korean Beauty 'glass skin no-makeup' look with BB Glow",
      "Specialized organic pigments with skin-enhancing peptides",
      "Precision feather-stroke microblading for natural eyebrows",
      "Immediate visible improvement in skin tone, texture, and radiance"
    ],
    procedureSteps: [
      { step: 1, title: "Shade & Symmetry Analysis", description: "Selecting the matching BB formulation and mapping natural eyebrow lines." },
      { step: 2, title: "Micro-Pigmentation Delivery", description: "Gentle delivery of organic medical pigment for seamless coverage." },
      { step: 3, title: "Radiance Seal Mask", description: "Soothing mask locking in porcelain radiance and instant glow." }
    ],
    preCareTips: ["Avoid alcohol and blood thinners 24 hours prior"],
    postCareTips: ["Keep area dry for 24 hours; apply healing balm"]
  },

  // --- Category D: Cosmetic Solutions ---
  {
    id: "botox",
    slug: "botox",
    name: "Advanced Botox Treatment",
    category: "Cosmetic Solutions",
    categoryKey: "cosmetic",
    plainHeadline: "Wrinkle Smoothing & Natural Expression",
    tagline: "Reduce Fine Lines, Crows Feet & Forehead Wrinkles for a Refreshed Natural Look",
    badge: "Doctor Performed",
    description: "Reduce the appearance of fine lines and achieve a naturally refreshed look with expert Botox treatment performed exclusively by Dr. Megha Aggarwal. Targets crow's feet, forehead furrows, and frown lines while preserving your natural emotional expressions without freezing.",
    heroImage: "/banners/d-3.jpg",
    sessionDuration: "20 - 30 Mins",
    downtime: "Zero downtime",
    suitableFor: "Forehead Lines, Frown Lines (11s), Crow's Feet, Bunny Lines, Jawline Slimming (Masseter)",
    highlights: [
      "Administered exclusively by certified MD Dermatologist Dr. Megha Aggarwal",
      "US-FDA approved genuine botulinum toxin formulations",
      "Preserves natural facial dynamics — never looks stiff or frozen",
      "Results emerge in 3-5 days and last 4-6 months"
    ],
    procedureSteps: [
      { step: 1, title: "Facial Dynamic Mapping", description: "Doctor evaluates dynamic expression lines in motion." },
      { step: 2, title: "Micro-Precision Injections", description: "Ultra-fine insulin needles target precise muscle coordinates." },
      { step: 3, title: "Post-Injection Calming", description: "Cooling compress applied with immediate return to work." }
    ],
    preCareTips: ["Avoid blood thinners, green tea, and alcohol 48 hours before"],
    postCareTips: ["Stay upright for 4 hours; do not rub or massage injection sites"]
  },
  {
    id: "lip-filler",
    slug: "lip-filler",
    name: "Lip Augmentation & Dermal Fillers",
    category: "Cosmetic Solutions",
    categoryKey: "cosmetic",
    plainHeadline: "Plump, Hydrated & Defined Natural Lips",
    tagline: "Enhance Lip Volume, Shape & Facial Symmetry with US-FDA Hyaluronic Acid Fillers",
    badge: "Natural Definition",
    description: "Enhance lip volume, define your cupid’s bow, and achieve a beautifully balanced, natural-looking smile. Using premium cross-linked hyaluronic acid gels, Dr. Megha sculpts subtle hydration and proportion tailored to your facial anatomy.",
    heroImage: "/banners/d-2.jpg",
    sessionDuration: "30 - 45 Mins",
    downtime: "1 - 2 Days mild swelling",
    suitableFor: "Thin Lips, Asymmetry, Volume Loss, Smoker Lines, Hydration Deficit",
    highlights: [
      "Premium US-FDA approved cross-linked Hyaluronic Acid gels",
      "Doctor-curated Russian lip or natural French hydration techniques",
      "Reversible and biocompatible for maximum patient peace of mind",
      "Results visible immediately, lasting 9 to 12 months"
    ],
    procedureSteps: [
      { step: 1, title: "Anatomy & Volume Assessment", description: "Mapping lip proportions against golden ratio facial aesthetics." },
      { step: 2, title: "Topical Anesthetic Numbing", description: "Medical-grade numbing cream ensures virtually painless experience." },
      { step: 3, title: "Micro-Cannula Sculpting", description: "Smooth micro-droplet placement for symmetrical, pillowy definition." }
    ],
    preCareTips: ["Avoid aspirin, ibuprofen, and fish oil 5 days prior"],
    postCareTips: ["Avoid touching lips and hot drinks for 24 hours"]
  },
  {
    id: "hair-patch",
    slug: "hair-patch",
    name: "Natural Hair Patch System",
    category: "Hair Treatment",
    categoryKey: "hair",
    plainHeadline: "Instant Hair Density & Undetectable Hairline",
    tagline: "Natural-Looking Hair Transformation with Breathable, Customized Hair Systems",
    badge: "Instant Transformation",
    description: "Get an instant, natural-looking hair transformation with a comfortable, customized hair patch designed to complement your personal look. Made with 100% natural human hair on breathable lace or ultra-thin skin base, allowing swimming, showering, and active sports.",
    heroImage: "/banners/d-1.jpg",
    sessionDuration: "60 - 90 Mins",
    downtime: "Zero downtime",
    suitableFor: "Advanced Stage Baldness, Alopecia Totalis, Thinning Crown, Non-Surgical Candidates",
    highlights: [
      "100% natural virgin human hair customized to your hair texture and color",
      "Ultra-thin breathable Swiss lace or micro-skin base",
      "Completely undetectable hairline even in bright outdoor lighting",
      "Allows normal showering, shampooing, swimming, and gym workouts"
    ],
    procedureSteps: [
      { step: 1, title: "Scalp Measurement & Contour Matching", description: "Custom measurement of balding area and hair color analysis." },
      { step: 2, title: "Base Preparation & Breathable Bonding", description: "Application with dermatologically tested skin-safe adhesive tape or glue." },
      { step: 3, title: "Styling & Blend Cut", description: "Professional salon styling blending patch seamlessly with natural hair." }
    ],
    preCareTips: ["Arrive with clean scalp free of oils"],
    postCareTips: ["Schedule maintenance re-servicing every 3-4 weeks"]
  }
];

// =============================================================================
// 9. BLOGS & CLINICAL JOURNAL ARTICLES
// =============================================================================
export const allBlogs = [
  {
    id: "hair-restoration-vs-transplant",
    slug: "nonsurgical-hair-restoration-vs-hair-transplant",
    title: "Nonsurgical Hair Restoration vs. Hair Transplant: Choosing the Right Solution for You",
    category: "Hair Restoration",
    date: "November 13, 2023",
    readTime: "5 min read",
    author: "Dr. Megha Aggarwal",
    authorTitle: "Chief Dermatologist & Aesthetician",
    image: "/images/tech-1.jpg",
    excerpt: "Hair loss is a common concern affecting men and women across various ages. Explore the key differences between nonsurgical hair restoration and hair transplants to determine the best clinical approach for your needs.",
    content: [
      {
        type: "paragraph",
        text: "Hair loss is a common concern for many individuals, affecting men and women of various ages. As technology advances, so do the options for addressing hair loss. Two popular approaches are nonsurgical hair restoration and hair transplants. In this blog post, we’ll explore the differences between these two methods and help you determine the best solution for you."
      },
      {
        type: "heading",
        text: "Nonsurgical Hair Restoration"
      },
      {
        type: "paragraph",
        text: "Nonsurgical hair restoration encompasses a variety of treatments and products designed to slow down hair loss and promote hair regrowth without the need for surgery. These approaches are often more accessible, less invasive, and suitable for individuals in the early stages of hair loss."
      },
      {
        type: "subheading",
        text: "1. Oral & Topical Medications"
      },
      {
        type: "paragraph",
        text: "Prescription medications such as Finasteride inhibit dihydrotestosterone (DHT), the hormone strongly linked to follicular miniaturization. Topically, Minoxidil stimulates blood flow and cellular activity around hair roots, helping to preserve and thicken existing hairs when used consistently."
      },
      {
        type: "subheading",
        text: "2. Low-Level Laser Therapy (LLLT)"
      },
      {
        type: "paragraph",
        text: "Low-level light therapy and medical laser diodes stimulate cellular respiration in follicular mitochondria, promoting active anagen phase prolongation and improving overall hair shaft caliber."
      },
      {
        type: "subheading",
        text: "3. Autologous Growth Factor (GFC) & PRP Therapy"
      },
      {
        type: "paragraph",
        text: "Platelet-Rich Plasma and concentrated Growth Factor Concentrate (GFC) therapies isolate natural biostimulatory proteins from the patient's own blood. Injected directly into the scalp around weakened follicles, they awaken dormant hair bulbs, boost microcirculation, and significantly reduce active hair shedding."
      },
      {
        type: "heading",
        text: "Surgical Hair Transplantation (FUE & FUT)"
      },
      {
        type: "paragraph",
        text: "For individuals with established, permanent baldness or a receded hairline where follicles have entirely ceased production, surgical hair transplantation offers a definitive solution. Follicular Unit Extraction (FUE) harvests individual healthy grafts from the genetic donor zone at the back of the head and transplants them artistically into the thinning recipient area for permanent, natural regrowth."
      },
      {
        type: "heading",
        text: "Which Approach Is Right For You?"
      },
      {
        type: "paragraph",
        text: "If you have mild to moderate thinning or diffuse hair fall with surviving follicles, non-surgical therapies such as PRP, GFC, and mesotherapy are ideal first-line treatments. If you have permanent bald patches, a receded hairline, or mature Norwood 3-6 patterns, an FUE transplant provides the permanent, natural density you desire."
      }
    ]
  },
  {
    id: "td-glowtech-360-guide",
    slug: "td-glowtech-360-why-doctors-choose-non-invasive-electroporation",
    title: "TD Glowtech 360°: Why India's Leading Doctors Choose Non-Invasive Electroporation Over Traditional Facials",
    category: "Skin Rejuvenation",
    date: "December 4, 2023",
    readTime: "6 min read",
    author: "Dr. Megha Aggarwal",
    authorTitle: "Chief Dermatologist & Aesthetician",
    image: "/banners/banner-facial.orig.jpg",
    excerpt: "Discover how the patented TD Glowtech 360° system harnesses 7 microcurrent frequencies and electroporation to lift, contour, and deeply infuse active serums without thermal injury or downtime.",
    content: [
      {
        type: "paragraph",
        text: "Traditional salon facials often provide only fleeting, superficial hydration. TD Glowtech 360°, exclusive to Truly Derma in India, represents a revolutionary paradigm shift in aesthetic dermatology by combining physiological muscle toning with cellular electroporation."
      },
      {
        type: "heading",
        text: "The Science of 7-Frequency Resonance"
      },
      {
        type: "paragraph",
        text: "Each muscle group and dermal layer responds to distinct bio-electrical frequencies. TD Glowtech 360° cycles through seven scientifically proven resonance channels that gently exercise facial muscles, retrain tissue tone, and tighten lax jawlines."
      },
      {
        type: "heading",
        text: "Electroporation: 400% Deeper Peptide Absorption"
      },
      {
        type: "paragraph",
        text: "Electroporation temporarily reorganizes cell membrane lipids, creating micro-pores that allow large hyaluronic acid and active peptide molecules to enter cells directly rather than sitting atop the skin. Once sealed with cryotherapy, the walkout glow is immediate, luminous, and long-lasting."
      }
    ]
  },
  {
    id: "hyperpigmentation-and-melasma-guide",
    slug: "what-really-works-for-hyperpigmentation-and-melasma",
    title: "Hyperpigmentation & Melasma: What Really Works According to Evidence-Based Dermatology",
    category: "Pigmentation & Laser",
    date: "January 18, 2024",
    readTime: "7 min read",
    author: "Dr. Megha Aggarwal",
    authorTitle: "Chief Dermatologist & Aesthetician",
    image: "/banners/banner-laser.orig.jpg",
    excerpt: "Stubborn dark patches on Indian skin require careful clinical handling. Learn why aggressive peels can worsen melasma and why low-fluence Q-Switch laser toning combined with barrier repair is the gold standard.",
    content: [
      {
        type: "paragraph",
        text: "Melasma and sunspots are among the most frequent clinical concerns seen at our Delhi suites. Indian skin is rich in reactive melanocytes, making it susceptible to Post-Inflammatory Hyperpigmentation (PIH) when exposed to aggressive acids or heat."
      },
      {
        type: "heading",
        text: "Why Low-Fluence Q-Switch Nd:YAG Laser Is Superior"
      },
      {
        type: "paragraph",
        text: "Rather than generating burning thermal heat, Q-Switch lasers use photoacoustic shockwaves. These sub-nanosecond pulses shatter melanin granules into microscopic dust that your body's immune cells naturally eliminate, preserving the epidermal barrier intact."
      },
      {
        type: "heading",
        text: "The Role of Sunscreen and Barrier Support"
      },
      {
        type: "paragraph",
        text: "No laser treatment is complete without meticulous photoprotection. We recommend mineral iron-oxide broad-spectrum sunscreens that block both UV rays and high-energy visible blue light."
      }
    ]
  }
];

// =============================================================================
// 10. COMPREHENSIVE FAQS REPOSITORY
// =============================================================================
export const allFaqs = [
  {
    category: "General & Clinic",
    questions: [
      {
        q: "Who conducts the consultations and procedures at Truly Derma?",
        a: "All medical consultations and advanced clinical procedures are personally conducted or directly supervised by Dr. Megha Aggarwal (MBBS, MD Dermatology, Gold Medalist). Our clinical staff consists solely of certified nurses and trained aestheticians."
      },
      {
        q: "Where are Truly Derma clinics located in New Delhi?",
        a: "We have two flagship clinic suites in West/North-West Delhi: 1) Pitampura (Harsh Vihar, 1st Floor, Above AU Small Finance Bank) and 2) Rajouri Garden (J2/16, Basement). Both clinics offer easy metro access and dedicated parking."
      },
      {
        q: "Do I need an appointment before visiting?",
        a: "Yes, to ensure individual attention and zero waiting time, we strictly operate by prior appointment. You can book directly via WhatsApp (+91 80769 26982), call our reception (+91 75910 55566), or use our online booking form."
      }
    ]
  },
  {
    category: "Skin & Medi-Facials",
    questions: [
      {
        q: "What makes TD Glowtech 360° different from a regular salon facial?",
        a: "TD Glowtech 360° is a medical-grade, non-invasive skin gym utilizing 7 micro-current bio-frequencies and patented electroporation. Unlike surface salon creams, it penetrates active peptides 400% deeper and tones underlying facial muscles for an instant, lifted jawline with zero recovery time."
      },
      {
        q: "Is there any downtime or peeling after Medical Hydra Facial MD?",
        a: "None whatsoever. You walk out immediately with glowing, deeply cleansed, hydrated skin. You can return to work, social events, or even apply makeup right after your session."
      },
      {
        q: "How many sessions are typically required for acne scar reduction?",
        a: "For pitted acne scars (boxcar or rolling scars), we generally recommend 3 to 5 sessions of Dermapen 4™ microneedling spaced 4 weeks apart. Noticeable smoothing occurs within 6 to 8 weeks as natural collagen remodels."
      }
    ]
  },
  {
    category: "Hair Restoration & Laser",
    questions: [
      {
        q: "Is Laser Hair Reduction truly permanent and safe for Indian skin tones?",
        a: "Yes. Our US-FDA approved 4D Tec laser operates across synchronized 755nm, 810nm, and 1064nm wavelengths with a -4°C contact sapphire tip. It safely targets deep hair follicles while protecting the melanin in Indian skin from burns or discoloration."
      },
      {
        q: "How soon can I see results from PRP or GFC Hair Rejuvenation?",
        a: "Excessive hair shedding typically decreases within 2 to 3 weeks after the first session. Visible new baby hair regrowth and shaft thickening become apparent after 2 to 3 sessions scheduled monthly."
      },
      {
        q: "Is Hair Transplant surgery painful?",
        a: "No. The procedure is performed under local anesthesia, so you will feel no pain during follicle extraction or implantation. Most patients watch TV, listen to music, or relax comfortably throughout the day session."
      }
    ]
  }
];

// =============================================================================
// 11. NAVIGATION & SITE ARCHITECTURE
// =============================================================================
export const siteNavigation = {
  headerNav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Treatments",
      href: "/treatments",
      isDropdown: true,
      categories: [
        {
          title: "Skin Treatments",
          href: "/treatments?category=skin",
          items: [
            { name: "TD Glowtech 360°", slug: "td-glowtech-360", tag: "Exclusive in India" },
            { name: "Medical Hydra Facial", slug: "hydra-facial", tag: "Most Popular" },
            { name: "Prescription Medi-Facial", slug: "medi-facial", tag: "Doctor Curated" },
            { name: "Laser Toning (Q-Switch)", slug: "laser-toning", tag: "Pigmentation" },
            { name: "Dermapen 4™ Microneedling", slug: "dermapen-4", tag: "Acne Scars" },
            { name: "Under-Eye Dark Circle", slug: "under-eye-dark-circle", tag: "Eye Care" },
            { name: "Party Pop Facial", slug: "party-pop-facial", tag: "Instant Radiance" },
            { name: "Photo Facial IPL", slug: "photo-facial", tag: "Sun Damage" },
            { name: "Mesotherapy", slug: "mesotherapy", tag: "Vitamin Infusion" }
          ]
        },
        {
          title: "Hair Care & Restoration",
          href: "/treatments?category=hair",
          items: [
            { name: "Triple-Wavelength Laser Hair Reduction", slug: "laser-hair-reduction", tag: "Painless" },
            { name: "PRP & GFC Hair Rejuvenation", slug: "hair-rejuvenation", tag: "Anti-Hair Fall" },
            { name: "FUE Natural Hair Transplant", slug: "hair-transplant", tag: "Permanent" },
            { name: "Hair Detox & Scalp Therapy", slug: "hair-detox-therapy", tag: "Dandruff Relief" },
            { name: "Natural Hair Patch System", slug: "hair-patch", tag: "Instant Density" }
          ]
        },
        {
          title: "Body & Cosmetic",
          href: "/treatments?category=cosmetic",
          items: [
            { name: "Non-Surgical Fat Loss & Contouring", slug: "fat-loss", tag: "Body Sculpting" },
            { name: "Semi-Permanent Makeup (BB Glow)", slug: "semi-permanent", tag: "Korean Beauty" },
            { name: "Advanced Botox Treatment", slug: "botox", tag: "Wrinkle Relaxing" },
            { name: "Lip Fillers & Augmentation", slug: "lip-filler", tag: "Natural Volume" }
          ]
        }
      ]
    },
    { label: "Journal", href: "/blogs" },
    { label: "Contact", href: "/contact" }
  ],
  footerLinks: {
    treatments: [
      { name: "TD Glowtech 360°", href: "/treatments/td-glowtech-360" },
      { name: "Medical Hydra Facial", href: "/treatments/hydra-facial" },
      { name: "Laser Hair Reduction", href: "/treatments/laser-hair-reduction" },
      { name: "Q-Switch Laser Toning", href: "/treatments/laser-toning" },
      { name: "PRP Hair Rejuvenation", href: "/treatments/hair-rejuvenation" },
      { name: "Dermapen 4™ Microneedling", href: "/treatments/dermapen-4" },
      { name: "Fat Loss & Body Contouring", href: "/treatments/fat-loss" }
    ],
    company: [
      { name: "About Dr. Megha", href: "/about-us#doctor" },
      { name: "Brand Philosophy", href: "/about-us" },
      { name: "Before & After Results", href: "/#results" },
      { name: "Clinical Journal", href: "/blogs" },
      { name: "Our Clinic Suites", href: "/contact" },
      { name: "Book Consultation", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Patient Safety Charter", href: "/about-us" }
    ]
  }
};

// =============================================================================
// 12. FULL PAGE-BY-PAGE CONTENT DICTIONARY
// =============================================================================
export const pagesContent = {
  // ---------------------------------------------------------------------------
  // A. HOME PAGE
  // ---------------------------------------------------------------------------
  home: {
    hero: {
      badge: "TRULY DERMA CLINIC & ACADEMY",
      pill: "Aesthetic Dermatology & Trichology",
      mainTitle: "Specialized Skin, Hair, Laser & Fat Loss by Certified Experts",
      subtitle: "Transform your beauty and health with evidence-based treatments and US-FDA cleared technologies, led by Gold Medalist Dr. Megha Aggarwal in New Delhi.",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Explore Treatments",
      phoneDirect: "+91 75910 55566",
      whatsappDirect: "+91 80769 26982",
      slides: [
        {
          index: 0,
          image: "/banners/d-3.jpg",
          badge: "TRULY DERMA CLINIC & ACADEMY",
          title: "Reveal Your Best Look with Advanced Botox",
          subtitle: "Reduce the appearance of fine lines and achieve a naturally refreshed look with expert Botox treatment.",
          ctaText: "BOOK APPOINTMENT",
          treatmentSlug: "botox",
          trustBadges: [
            { label: "10+ Yrs Expertise", icon: "Award" },
            { label: "20,000+ Procedures", icon: "Users" },
            { label: "US-FDA Approved Tech", icon: "ShieldCheck" }
          ]
        },
        {
          index: 1,
          image: "/banners/d-2.jpg",
          badge: "EXCLUSIVE IN INDIA",
          title: "Enhance Your Lips, Elevate Your Confidence",
          subtitle: "Enhance lip volume, define your shape, and achieve a beautifully balanced, natural-looking smile.",
          ctaText: "EXPLORE TD GLOWTECH",
          treatmentSlug: "lip-filler",
          trustBadges: [
            { label: "7 Micro-Currents", icon: "Sparkles" },
            { label: "Cellular Electroporation", icon: "ShieldCheck" },
            { label: "Zero Downtime", icon: "Award" }
          ]
        },
        {
          index: 2,
          image: "/banners/d-1.jpg",
          badge: "ADVANCED HAIR CARE CLINIC",
          title: "Regain Your Look with a Natural-Looking Hair Patch",
          subtitle: "Get a natural-looking hair transformation with a comfortable, customized hair patch designed to complement your look.",
          ctaText: "SCHEDULE HAIR VISIT",
          treatmentSlug: "hair-patch",
          trustBadges: [
            { label: "Q-Switch Nd:YAG", icon: "Award" },
            { label: "Vortex-Fusion Hydra", icon: "Heart" },
            { label: "Pore Tightening", icon: "ShieldCheck" }
          ]
        }
      ],
      quickForm: {
        title: "Request a Consultation",
        subtitle: "Direct Physician Callback within 15 Minutes",
        fields: {
          namePlaceholder: "Your Full Name",
          phonePlaceholder: "Phone / WhatsApp Number",
          serviceLabel: "Select Clinical Concern",
          branchLabel: "Select Preferred Clinic Suite",
          submitButton: "Request Priority Callback"
        },
        successMessage: "Thank you! Our clinic desk will connect with you immediately."
      }
    },
    brandPhilosophy: {
      pill: "The Truly Derma Philosophy",
      headlineQuote: "“At Truly Derma, we understand the importance of glowing skin and healthy hair in boosting confidence. To achieve exceptional results, our expert personnel use modern processes and cutting-edge technologies tailored just for you.”",
      authorName: "Dr. Megha Aggarwal",
      authorTitle: "MD (Dermatology, Venereology & Leprosy), Gold Medalist",
      pillars: [
        {
          num: "01",
          category: "DIAGNOSTICS",
          title: "Microscopic Tissue Analysis",
          description: "Every clinical consultation commences with multi-spectral polarized dermoscopy, mapping cellular histology, lipid barrier integrity, and melanin depth before any treatment.",
          tag: "Polarized Dermoscopy"
        },
        {
          num: "02",
          category: "TECHNOLOGY",
          title: "Bio-Calibrated Energy",
          description: "From authentic TD Glowtech 360° microcurrent resonance to US-FDA cleared Q-Switch Nd:YAG lasers, all instrumentation is calibrated to protect natural facial volume.",
          tag: "US-FDA Cleared"
        },
        {
          num: "03",
          category: "EXPERIENCE",
          title: "Zero-Downtime Luxury",
          description: "Experience boutique calm paired with clinical potency. Walk out with visible cellular luminosity and zero peeling, allowing an effortless return to your life.",
          tag: "Immediate Radiance"
        }
      ]
    },
    whyChooseUs: {
      pill: "Why We Are Distinct",
      title: "Why Choose Truly Derma",
      subtitle: "Leading dermatology and aesthetic clinic combining medical safety, certified physician oversight, and gentle personalized care.",
      items: whyChooseUsList
    },
    pinnedShowcase: {
      pill: "Clinical Directory",
      title: "Specialized Procedures",
      subtitle: "Explore our comprehensive range of skin, hair, laser, and body contouring treatments performed with certified medical expertise.",
      filterTabs: [
        { id: "all", label: "All Procedures" },
        { id: "skin", label: "Skin & Medi-Facials" },
        { id: "hair", label: "Hair & Trichology" },
        { id: "laser", label: "Laser & Body" }
      ]
    },
    technologyShowcase: {
      pill: "Scientific Innovation",
      title: "Our 3-Step Cellular Transformation",
      subtitle: "Evidence-based clinical protocols that protect your skin barrier while maximizing regenerative cellular activity.",
      steps: threeStepProcess
    },
    beforeAfter: {
      pill: "Documented Clinical Outcomes",
      title: "Real Patients, Proven Results",
      subtitle: "Drag the slider to examine verified clinical transformations achieved with our customized dermatological regimens.",
      cases: beforeAfterCases
    },
    doctorBio: {
      pill: "Physician Leadership",
      title: "Meet Our Chief Dermatologist",
      doctor: doctorProfile
    },
    skinQuiz: {
      pill: "Interactive Skin Assessment",
      title: "Discover Your Tailored Treatment Protocol",
      subtitle: "Answer three quick clinical questions to receive an evidence-based recommendation personalized to your skin and hair aspirations.",
      step1Title: "What is your primary skin or hair aspiration?",
      step2Title: "What is your recovery preference?",
      step3Title: "How would you describe your skin sensitivity?",
      questions: [
        {
          id: "goal",
          step: 1,
          title: "What is your primary skin or hair aspiration?",
          subtitle: "Select the primary condition you wish to address with Dr. Megha.",
          options: [
            { id: "glow", label: "Dullness & Instant Party Radiance", description: "Looking for glass-skin hydration, cellular plumpness, and zero peeling.", slug: "td-glowtech-360" },
            { id: "pores", label: "Enlarged Pores & Congestion", description: "Deep sebum plugs, uneven texture, and blackheads requiring vacuum hydro-peeling.", slug: "hydra-facial" },
            { id: "pigmentation", label: "Melasma, Dark Spots & Sun Damage", description: "Targeting deeper dermal pigmentation with photoacoustic laser accuracy.", slug: "laser-toning" },
            { id: "scars", label: "Acne Scars & Texture Remodeling", description: "Rolling or boxcar scars requiring automated collagen induction.", slug: "dermapen-4" },
            { id: "laxity", label: "Facial Firmness & Jowl Sculpting", description: "Loosened contours and nasolabial folds seeking non-invasive microcurrent lift.", slug: "td-glowtech-360" },
            { id: "hair", label: "Hair Thinning & Excessive Shedding", description: "Revitalizing hair follicle caliber with recombinant growth factors.", slug: "hair-rejuvenation" }
          ]
        },
        {
          id: "timeline",
          step: 2,
          title: "What is your recovery preference?",
          subtitle: "How quickly do you wish to resume professional or social events?",
          options: [
            { id: "zero", label: "Zero Downtime", description: "Walk out immediately luminous for photography, work, or events." },
            { id: "mild", label: "Mild Recovery (12 - 24 hrs)", description: "Slight natural pinkness is acceptable for deeper cellular remodeling." },
            { id: "progressive", label: "Structured Multi-Session Transformation", description: "Committed to progressive clinical transformation over a scheduled course." }
          ]
        },
        {
          id: "barrier",
          step: 3,
          title: "How would you describe your skin sensitivity?",
          subtitle: "Enables Dr. Megha to tailor custom peptide formulations and device energy.",
          options: [
            { id: "resilient", label: "Resilient / Combination", description: "Tolerates clinical exfoliation and active formulations with ease." },
            { id: "sensitive", label: "Delicate & Prone to Redness", description: "Easily flushes with temperature shifts, sun exposure, or active products." },
            { id: "dehydrated", label: "Dry & Dehydrated Barrier", description: "Feels tight after cleansing and drinks up nourishing lipid moisturizers." }
          ]
        }
      ],
      prescriptions: {
        "td-glowtech-360": {
          name: "TD Glowtech 360° Protocol",
          slug: "td-glowtech-360",
          badge: "Exclusive In India",
          category: "Bio-Resonance & Electroporation",
          downtime: "Zero Downtime",
          sessions: "1 - 3 Sessions Recommended",
          summary: "Based on your profile, Dr. Megha recommends our proprietary TD Glowtech 360°. Its 7 micro-current resonance frequencies tone facial SMAS muscles while electroporation drives concentrated botanical peptides deep into the dermis for an instant sculpted, luminous glow.",
          keyBenefits: [
            "Immediate facial contouring with sharpened jawline definition",
            "Cellular ATP recharge without heat, needles, or peeling",
            "Perfect pre-event skin gym with long-lasting hydration lock"
          ]
        },
        "hydra-facial": {
          name: "Medical HydraFacial MD Vortex Care",
          slug: "hydra-facial",
          badge: "Doctor-Supervised",
          category: "Vortex Hydro-Exfoliation",
          downtime: "Zero Downtime",
          sessions: "Monthly Maintenance",
          summary: "Your objective calls for gentle pore vacuuming and lipid replenishment. Our medical-grade HydraFacial employs specialized vortex technology to extract impurities painlessly while quenching thirsty epidermal layers with medical antioxidants and hyaluronic acid.",
          keyBenefits: [
            "Painless vortex extraction of blackheads & debris",
            "Zero redness, instant glass-skin luminosity",
            "Immediate pore refining and rebalanced sebum production"
          ]
        },
        "laser-toning": {
          name: "Q-Switch Nd:YAG Laser Toning",
          slug: "laser-toning",
          badge: "US-FDA Cleared",
          category: "Photoacoustic Pigment Fragmentation",
          downtime: "Zero Downtime (No Crusting)",
          sessions: "4 - 6 Sessions Recommended",
          summary: "Targeted sub-nanosecond photoacoustic energy safely shatters localized melanin clusters and stubborn melasma patches without burning surface tissue. Paired with Hollywood carbon peeling for supreme dermal clarity.",
          keyBenefits: [
            "Clinical targeting of deep dermal melasma and sun damage",
            "Calibrated for Indian Fitzpatrick skin types III-V",
            "Tightens dilated pores and refines skin texture"
          ]
        },
        "dermapen-4": {
          name: "Dermapen 4™ Collagen Remodeling + Exosomes",
          slug: "dermapen-4",
          badge: "Gold Standard Microneedling",
          category: "Percutaneous Collagen Induction",
          downtime: "12 - 24 Hours Mild Pinkness",
          sessions: "3 - 5 Sessions Recommended",
          summary: "For deeper structural scars and textural unevenness, the world-leading Dermapen 4 generates 1,920 micro-channels per second. We infuse recombinant growth factors to trigger genuine neo-collagenesis and scar level elevation.",
          keyBenefits: [
            "Proven reduction in acne scarring and pitted rolling scars",
            "Triggers long-term natural Type-I collagen synthesis",
            "Smooths rough, scarred texture into refined firmness"
          ]
        },
        "hair-rejuvenation": {
          name: "Autologous GFC Trichology Protocol",
          slug: "hair-rejuvenation",
          badge: "Physician-Performed",
          category: "Growth Factor Concentrate (GFC)",
          downtime: "Zero Downtime",
          sessions: "3 - 4 Sessions Spaced 1 Month Apart",
          summary: "Dr. Megha's specialized trichology protocol utilizes high-potency recombinant and autologous growth factor concentrates directly micro-infused at the hair follicle bulb, arresting shedding and reactivating dormant root papillae.",
          keyBenefits: [
            "Arrests sudden telogen effluvium and hormonal shedding",
            "Thickens hair follicle shaft caliber and density",
            "100% natural autologous factors with zero synthetic risk"
          ]
        }
      }
    },
    testimonials: {
      pill: "Patient Trust & Reviews",
      title: "Loved by Over 20,000 Happy Patients",
      subtitle: "Verified Google reviews from patients who experienced transformative skin, hair, and aesthetic renewal at our Delhi clinics.",
      aggregateRating: "4.9 / 5.0",
      totalReviews: "520+ Verified Reviews on Google",
      reviews: testimonialsList
    },
    blogSection: {
      pill: "Clinical Insights",
      title: "Latest From Our Dermatologists",
      subtitle: "Read medical advice, self-care guides, and procedure breakthroughs authored by Dr. Megha Aggarwal.",
      readMoreText: "Read Complete Guide →"
    },
    ctaBanner: {
      pill: "Begin Your Skincare Journey",
      title: "Experience World-Class Dermatology in Delhi",
      subtitle: "Schedule a comprehensive digital or in-clinic consultation with Dr. Megha Aggarwal at our Pitampura or Rajouri Garden suites.",
      phoneCTA: "Call +91 75910 55566",
      whatsappCTA: "WhatsApp Priority Desk",
      bookingCTA: "Book In-Clinic Appointment"
    }
  },

  // ---------------------------------------------------------------------------
  // B. ABOUT US PAGE
  // ---------------------------------------------------------------------------
  about: {
    meta: {
      title: "About Truly Derma Clinic & Academy | Led by Dr. Megha Aggarwal",
      description: "Learn about Truly Derma Clinic & Academy, founded by Gold Medalist Dr. Megha Aggarwal with 10+ years of aesthetic and clinical dermatology excellence in Delhi."
    },
    hero: {
      badge: "ABOUT TRULY DERMA",
      title: "Welcome to Truly Derma Clinic & Academy",
      subtitle: "Where medical science meets bespoke aesthetics, led by Gold Medalist Dr. Megha Aggarwal.",
      introParagraphs: [
        "Welcome to Truly Derma, Clinic & Academy, led by the famous Aesthetician Dr. Megha Aggarwal where our primary focus is on providing comprehensive solutions for skincare, hair care, LASER treatments, and fat loss.",
        "At Truly Derma, we understand the importance of glowing skin and healthy hair in boosting confidence. To achieve exceptional results, our expert personnel use modern processes and cutting-edge technologies. We believe everyone should feel their best, so we offer a range of treatments tailored just for you."
      ]
    },
    missionVision: {
      missionTitle: "Our Clinical Mission",
      missionText: "To provide safe, ethical, and evidence-based aesthetic and dermatological treatments that celebrate each patient's individuality, delivering noticeable natural results without invasive downtime or compromised safety.",
      visionTitle: "Our Academy Vision",
      visionText: "To mentor the next generation of aesthetic physicians through the Truly Derma Aesthetic Academy, raising the gold standard of clinical ethics and technical mastery across India.",
      coreValues: [
        { title: "Physician-Led Safety", description: "Every protocol is supervised by an MD Dermatologist adhering to board-certified standards." },
        { title: "Honest Diagnostics", description: "No unnecessary treatments. We recommend only what your skin cellularly requires." },
        { title: "Modern Technologies", description: "Continuous investment in US-FDA cleared machinery and patented European systems." },
        { title: "Patient Dignity", description: "Warm, empathetic care celebrating self-love and empowering personal confidence." }
      ]
    },
    doctorSpotlight: {
      badge: "DIRECT PHYSICIAN LEADERSHIP",
      title: "Meet Our Expert: Dr. Megha Aggarwal",
      subtitle: "10+ Years Experience • 20,000+ Completed Procedures",
      letter: doctorProfile.personalNote,
      credentials: doctorProfile.credentials
    },
    academyOverview: {
      badge: "TRULY DERMA AESTHETIC ACADEMY",
      title: "Training India's Future Aesthetic Physicians",
      description: "Founded by Dr. Megha Aggarwal, the Truly Derma Aesthetic Academy has trained over 650+ doctors, dermatologists, and surgeons in advanced injectables, clinical lasers, and trichology.",
      stats: [
        { label: "Doctors Trained", value: "650+" },
        { label: "Hands-On Clinical Hours", value: "500+" },
        { label: "Masterclass Modules", value: "15+" }
      ]
    }
  },

  // ---------------------------------------------------------------------------
  // C. CONTACT PAGE
  // ---------------------------------------------------------------------------
  contact: {
    meta: {
      title: "Contact Truly Derma Clinic | Pitampura & Rajouri Garden Suites",
      description: "Get in touch with Truly Derma Clinic & Academy. Book appointments or visit our state-of-the-art clinic suites in Pitampura and Rajouri Garden, New Delhi."
    },
    hero: {
      badge: "CONNECT WITH TRULY DERMA",
      title: "Contact Our Clinic Suites",
      subtitle: "Visit our state-of-the-art clinics in Pitampura or Rajouri Garden, or schedule an initial digital skin & hair assessment."
    },
    branches: clinicContact.branches,
    phoneLines: clinicContact.phoneNumbers,
    whatsappDisplay: clinicContact.whatsappDisplay,
    whatsappUrl: clinicContact.whatsappUrl,
    email: clinicContact.email,
    hours: clinicContact.hours,
    bookingForm: {
      title: "Schedule Your Consultation",
      subtitle: "Our patient coordinator will contact you to confirm your preferred suite and timing.",
      fields: {
        name: "Full Name",
        phone: "Mobile / WhatsApp Number",
        email: "Email Address (Optional)",
        branch: "Select Clinic Suite",
        service: "Select Treatment / Concern",
        preferredDate: "Preferred Date",
        message: "Any specific concern or question for Dr. Megha",
        submit: "Confirm Appointment Request"
      },
      servicesDropdown: [
        "Skin Consultation & Digital Dermoscopy",
        "TD Glowtech 360° Facial",
        "Medical Hydra Facial MD",
        "Q-Switch Laser Toning & Melasma Removal",
        "Laser Hair Reduction",
        "PRP / GFC Hair Rejuvenation",
        "Hair Transplant Consultation",
        "Dermapen 4™ Acne Scar Revision",
        "Botox & Facial Contouring",
        "Lip Filler & Augmentation",
        "Non-Surgical Fat Loss",
        "Semi-Permanent Makeup"
      ]
    }
  },

  // ---------------------------------------------------------------------------
  // D. TREATMENTS HUB PAGE
  // ---------------------------------------------------------------------------
  treatmentsHub: {
    meta: {
      title: "All Treatments & Procedures | Truly Derma Clinic Delhi",
      description: "Explore 18 authentic skin, hair, laser, and fat loss treatments offered by Dr. Megha Aggarwal at Truly Derma Clinic & Academy in New Delhi."
    },
    hero: {
      badge: "CLINICAL SERVICES DIRECTORY",
      title: "World-Class Dermatological & Aesthetic Treatments",
      subtitle: "From India-exclusive TD Glowtech 360° to US-FDA cleared Laser Hair Reduction and FUE Hair Transplants, explore our complete procedure catalogue."
    },
    guarantee: {
      badge: "THE TRULY DERMA STANDARD",
      title: "Zero Fluff, 100% Medical Efficacy",
      text: "Every procedure is performed using genuine medical-grade consumables, strict hospital sterilization standards, and doctor-calibrated energies tailored to your skin."
    }
  },

  // ---------------------------------------------------------------------------
  // E. BLOGS JOURNAL HUB PAGE
  // ---------------------------------------------------------------------------
  blogsHub: {
    meta: {
      title: "Clinical Blogs & Dermatology Insights | Truly Derma Journal",
      description: "Read evidence-based skincare advice, hair restoration breakthroughs, and cosmetic dermatology guides written by Dr. Megha Aggarwal."
    },
    hero: {
      badge: "THE TRULY DERMA JOURNAL",
      title: "News & Clinical Insights From Our Doctors",
      subtitle: "Evidence-based aesthetic medicine, trichology insights, and seasonal dermatological advice from Chief Dermatologist Dr. Megha Aggarwal."
    }
  },

  // ---------------------------------------------------------------------------
  // F. LEGAL PAGES (PRIVACY POLICY & TERMS)
  // ---------------------------------------------------------------------------
  privacyPolicy: {
    meta: {
      title: "Privacy Policy | Truly Derma Clinic & Academy",
      description: "Our commitment to patient confidentiality, medical data protection, and clinical privacy."
    },
    title: "Privacy Policy",
    lastUpdated: "October 2026",
    sections: [
      {
        heading: "1. Patient Medical Confidentiality",
        text: "Truly Derma Clinic & Academy adheres strictly to medical privacy guidelines and HIPAA/Indian Medical Council confidentiality standards. Any medical history, diagnostic skin scans, or treatment notes shared with our physicians are protected under doctor-patient privilege."
      },
      {
        heading: "2. Information We Collect",
        text: "When you schedule an appointment or contact us online, we collect your name, phone number, email, and preferred clinic branch. We do not sell, rent, or lease your personal information to third parties."
      },
      {
        heading: "3. Clinical Photography & Consent",
        text: "Before-and-after photographs taken during treatments are retained solely in secure clinical records for tracking treatment progress. No photograph is published online or on social media without explicit, signed patient consent."
      },
      {
        heading: "4. Contact Desk",
        text: "If you have questions regarding your data, contact our administrative desk at hello@trulyderma.com or call +91 75910 55566."
      }
    ]
  },
  termsOfService: {
    meta: {
      title: "Terms of Service | Truly Derma Clinic & Academy",
      description: "Terms and conditions governing clinical consultations and website usage."
    },
    title: "Terms of Service",
    lastUpdated: "October 2026",
    sections: [
      {
        heading: "1. Medical Disclaimer",
        text: "Information provided on trulyderma.com is for educational purposes and does not substitute for an in-person diagnostic consultation with a licensed physician. Results may vary depending on individual biology, skin type, and lifestyle."
      },
      {
        heading: "2. Appointment & Cancellation Policy",
        text: "We request at least 24 hours prior notice for rescheduling or cancelling an appointment so that the slot may be offered to other patients requiring urgent dermatological care."
      },
      {
        heading: "3. Clinical Protocols",
        text: "Patients must disclose all pre-existing medical conditions, allergies, and ongoing medications before any laser, injectable, or aesthetic procedure."
      }
    ]
  }
};

// =============================================================================
// 13. HELPER LOOKUP FUNCTIONS (FOR INNER PAGES & DYNAMIC ROUTING)
// =============================================================================

/**
 * Get treatment by exact slug
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getTreatmentBySlug(slug) {
  if (!slug) return undefined;
  return allTreatments.find((t) => t.slug === slug || t.id === slug);
}

/**
 * Get all treatments matching a category key ('skin', 'hair', 'laser', 'body', 'cosmetic')
 * @param {string} categoryKey
 * @returns {Array}
 */
export function getTreatmentsByCategory(categoryKey) {
  if (!categoryKey || categoryKey === "all") return allTreatments;
  return allTreatments.filter((t) => t.categoryKey === categoryKey || t.category.toLowerCase().includes(categoryKey.toLowerCase()));
}

/**
 * Get related treatments excluding current slug
 * @param {string} currentSlug
 * @param {number} limit
 * @returns {Array}
 */
export function getRelatedTreatments(currentSlug, limit = 3) {
  return allTreatments.filter((t) => t.slug !== currentSlug).slice(0, limit);
}

/**
 * Get blog article by slug
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getBlogBySlug(slug) {
  if (!slug) return undefined;
  return allBlogs.find((b) => b.slug === slug || b.id === slug);
}

/**
 * Get related blogs excluding current slug
 * @param {string} currentSlug
 * @param {number} limit
 * @returns {Array}
 */
export function getRelatedBlogs(currentSlug, limit = 3) {
  return allBlogs.filter((b) => b.slug !== currentSlug).slice(0, limit);
}

/**
 * Get specific page content
 * @param {'home'|'about'|'contact'|'treatmentsHub'|'blogsHub'|'privacyPolicy'|'termsOfService'} pageKey
 * @returns {object|undefined}
 */
export function getPageContent(pageKey) {
  return pagesContent[pageKey];
}

/**
 * Get clinic branch by slug ('pitampura' | 'rajouri-garden')
 * @param {string} branchSlug
 * @returns {object|undefined}
 */
export function getBranchBySlug(branchSlug) {
  return clinicContact.branches.find((b) => b.slug === branchSlug || b.id === branchSlug);
}

// =============================================================================
// 14. BACKWARD COMPATIBLE CLINICINFO EXPORT
// =============================================================================
// Ensures complete compatibility with any existing component importing `clinicInfo`
export const clinicInfo = {
  name: siteMeta.name,
  tagline: siteMeta.tagline,
  taglineAlt: siteMeta.taglineAlt,
  doctor: doctorProfile,
  whyChooseUs: whyChooseUsList,
  contact: clinicContact,
  testimonials: testimonialsList,
  exclusiveTreatment: {
    title: "Truly Derma Exclusive in India TD Glowtech 360°",
    description: "TD Glowtech 360° uses a patented electroporation method with seven scientifically proven micro-current frequencies. This non-invasive skin gym offers customized treatments that lift, tone, and contour the skin with no downtime. It's a painless, relaxing experience that delivers instant, long-lasting results.",
    features: [
      "Non-invasive",
      "Innovative",
      "High-tech",
      "Electroporation",
      "Natural",
      "No downtime",
      "Safe"
    ]
  },
  techSteps: threeStepProcess,
  beforeAfter: beforeAfterCases
};

export const quizQuestions = pagesContent.home.skinQuiz.questions;
export const quizPrescriptions = pagesContent.home.skinQuiz.prescriptions;

// Default export is the comprehensive master content registry
export default {
  siteMeta,
  clinicContact,
  doctorProfile,
  whyChooseUsList,
  threeStepProcess,
  beforeAfterCases,
  testimonialsList,
  allTreatments,
  allBlogs,
  allFaqs,
  siteNavigation,
  pagesContent,
  clinicInfo,
  quizQuestions,
  quizPrescriptions,
  getTreatmentBySlug,
  getTreatmentsByCategory,
  getRelatedTreatments,
  getBlogBySlug,
  getRelatedBlogs,
  getPageContent,
  getBranchBySlug
};

