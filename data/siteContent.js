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
  name: "Truly Derma Clinic",
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
  yearsOfExcellence: "10+",
  defaultTitle: "Truly Derma Clinic | Dr. Megha Aggarwal | Aesthetic Dermatology Delhi",
  defaultDescription: "Leading aesthetic skin and hair clinic founded by Dr. Megha Aggarwal in Pitampura & Rajouri Garden, New Delhi. Specialized in TD Glowtech 360°, Hydra Facial MD, Laser Toning, FUE Hair Transplant, PRP, and Fat Loss.",
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
    "Lip Fillers Delhi"
  ],
  copyright: `© ${new Date().getFullYear()} Truly Derma Clinic. All Rights Reserved.`
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
      fullName: "Truly Derma Clinic — Pitampura",
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
      fullName: "Truly Derma Clinic — Rajouri Garden",
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
  role: "Founder, Truly Derma Clinic",
  title: "Founder, Truly Derma",
  qualifications: "Founder & Aesthetic Director, Truly Derma Clinic",
  credentials: [
    "Founder, Truly Derma Clinic",
    "10+ Years of Aesthetic Excellence",
    "Pioneer in Advanced Non-Invasive Aesthetics",
    "US-FDA Approved Laser & Dermal Protocols"
  ],
  experience: "10+ Years of Clinical Excellence",
  image: "/images/Doctor.png",
  imageAlt: "Dr. Megha Aggarwal - Founder of Truly Derma Clinic",
  secondaryImage: "/images/dr-megha.jpg",
  stats: [
    { label: "Successful Procedures", value: "20,000+", highlight: true },
    { label: "Patient Satisfaction", value: "99.4%", highlight: true },
    { label: "Years Experience", value: "10+", highlight: false },
    { label: "Delhi Clinics", value: "2", highlight: false }
  ],
  philosophy: "We believe in enhancing your natural beauty through safe, personalized care and proven medical technology.",
  bio: "Welcome to Truly Derma Clinic, founded by Dr. Megha Aggarwal. We provide safe, effective, and personalized solutions for skin, hair, laser, and body contouring.",
  personalNote: "Welcome to Truly Derma Clinic, where I, Dr. Megha, am dedicated to transforming your skin and hair with over ten years of experience. Whether you're dealing with pesky breakouts or seeking to renew mature skin, I offer personalized treatments and caring advice to help reveal your natural beauty. Skincare isn't just about the surface; it's about understanding yourself and promoting overall well-being. As your partner, I create a nurturing space where self-love is celebrated. I'm committed to staying updated with the latest advancements in beauty to provide you with the best possible care. If you're ready to start your journey of self-discovery and self-care, let's connect at Truly Derma Clinic in Delhi. Together, we'll help you to shine from the inside out.",
  signatureTitle: "Dr. Megha Aggarwal, Founder",
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
    id: "non-invasive",
    pillar: "Non-Invasive",
    title: "Non-Invasive Aesthetics",
    subtitle: "Zero Downtime & Gentle Care",
    description: "State-of-the-art non-surgical procedures and cellular technologies that lift, contour, and renew skin and hair naturally with no pain and zero downtime.",
    icon: "Sparkles",
    tag: "Non-Invasive",
    badge: "100% Non-Surgical",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "safe",
    pillar: "100% Safe",
    title: "100% Safe & Certified Care",
    subtitle: "Hospital-Grade Clinical Protocols",
    description: "Rigorous medical sterilization, US-FDA cleared clinical lasers, and strict physician oversight ensuring 100% patient safety and clinical peace of mind.",
    icon: "ShieldCheck",
    tag: "100% Safe",
    badge: "US-FDA Cleared",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
  },
  {
    id: "experience",
    pillar: "Proven Experience of 13 Years",
    title: "Proven Experience of 13 Years",
    subtitle: "20,000+ Completed Procedures",
    description: "Over 13 years of specialized skin, hair, and laser treatments, founded and led personally by Dr. Megha Aggarwal with documented results.",
    icon: "Award",
    tag: "13 Years Proven",
    badge: "20,000+ Procedures",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
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
    image: "/images/treatments/hair-transplant.png",
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
// 6. VERIFIED BEFORE & AFTER CLINICAL OUTCOMES (REAL TRULY DERMA PATIENTS)
// =============================================================================
export const beforeAfterCases = [
  // --- SKIN (3) ---
  {
    id: "case-1",
    title: "Full Face Radiance & Pore Refining",
    treatment: "Hydra Facial MD + Medi Facial",
    treatmentSlug: "hydra-facial",
    category: "Skin",
    before: "/images/patients_slider/patient-skin-glow-rejuvenation-before.jpg",
    after: "/images/patients_slider/patient-skin-glow-rejuvenation-after.jpg",
    combined: "/images/patients_privacy/patient-skin-glow-rejuvenation.jpg",
    concern: "Dull Complexion, Congested Pores & Uneven Tone",
    result: "Refined open pores, smooth glass glow, and restored lipid hydration barrier.",
    timeframe: "4 Weeks",
    sessions: "3 Sessions",
    badge: "Luminous Glow",
    notes: "Triple-stage vortex infusion cleared epidermal congestion while infusing low-molecular hyaluronic acid."
  },
  {
    id: "case-5",
    title: "Periorbital Under-Eye Brightening",
    treatment: "Under-Eye Dark Circle Therapy",
    treatmentSlug: "under-eye-dark-circle",
    category: "Skin",
    before: "/images/patients_slider/patient-dark-circles-male-before.jpg",
    after: "/images/patients_slider/patient-dark-circles-male-after.jpg",
    combined: "/images/patients_privacy/patient-dark-circles-male.jpg",
    concern: "Chronic Under-Eye Dark Shadows & Fatigue",
    result: "Substantially brightened tear trough shadows and rehydrated delicate periorbital tissue.",
    timeframe: "4 Weeks",
    sessions: "3 Sessions",
    badge: "Brightened Eyes",
    notes: "Targeted vascular toning and micro-infusions cleared accumulated periorbital pigments."
  },
  {
    id: "case-10",
    title: "Acne Scar Smoothing & Barrier Repair",
    treatment: "Medi Facial + Skin Repair Protocol",
    treatmentSlug: "medi-facial",
    category: "Skin",
    before: "/images/patients_slider/patient-acne-scar-smoothing-before.jpg",
    after: "/images/patients_slider/patient-acne-scar-smoothing-after.jpg",
    combined: "/images/patients_privacy/patient-acne-scar-smoothing.jpg",
    concern: "Post-Acne Indentations & Skin Roughness",
    result: "Smoothed dermal surface, softened acne scars, and calmed underlying inflammation.",
    timeframe: "6 Weeks",
    sessions: "3 Sessions",
    badge: "Smooth Texture",
    notes: "Enzymatic resurfacing coupled with clinical barrier restoration peptides."
  },

  // --- HAIR (4) ---
  {
    id: "case-2",
    title: "Crown Scalp Hair Density Revival",
    treatment: "Hair Restoration & Growth Factor PRP",
    treatmentSlug: "hair-rejuvenation",
    category: "Hair",
    before: "/images/patients_slider/patient-hair-scalp-1-before.jpg",
    after: "/images/patients_slider/patient-hair-scalp-1-after.jpg",
    combined: "/images/patients_privacy/patient-hair-scalp-1.jpg",
    concern: "Crown Scalp Thinning & Follicular Miniaturization",
    result: "Significant follicle revival, noticeable decrease in shedding, and increased hair volume.",
    timeframe: "4 Months",
    sessions: "4 Sessions",
    badge: "Follicle Revival",
    notes: "Autologous concentrated growth factors reactivated miniaturized follicles and stimulated healthy hair cycles."
  },
  {
    id: "case-6",
    title: "Permanent Chin Laser Hair Reduction",
    treatment: "US-FDA Approved 4D Tec Laser",
    treatmentSlug: "laser-hair-reduction",
    category: "Hair",
    before: "/images/patients_slider/patient-chin-laser-reduction-1-before.jpg",
    after: "/images/patients_slider/patient-chin-laser-reduction-1-after.jpg",
    combined: "/images/patients_privacy/patient-chin-laser-reduction-1.jpg",
    concern: "Coarse Unwanted Chin & Submental Hair",
    result: "Smooth, hair-free skin with virtually zero razor bumps or folliculitis recurrence.",
    timeframe: "10 Weeks",
    sessions: "5 Sessions",
    badge: "Permanent Reduction",
    notes: "Quad-wavelength laser disabled active follicular roots with sub-zero contact sapphire cooling."
  },
  {
    id: "case-8",
    title: "Vertex Hair Density & Shedding Reduction",
    treatment: "PRP Hair Rejuvenation Therapy",
    treatmentSlug: "hair-rejuvenation",
    category: "Hair",
    before: "/images/patients_slider/patient-hair-density-male-before.jpg",
    after: "/images/patients_slider/patient-hair-density-male-after.jpg",
    combined: "/images/patients_privacy/patient-hair-density-male.jpg",
    concern: "Progressive Vertex Thinning & Shedding",
    result: "Halted excessive hair shedding, increased shaft caliber, and filled visible scalp areas.",
    timeframe: "8 Weeks",
    sessions: "4 Sessions",
    badge: "Reduced Shedding",
    notes: "Plasma growth factor micro-infusions stimulated dormant follicular matrix cells."
  },
  {
    id: "case-11",
    title: "Midline Female Hair Parting Restoration",
    treatment: "Hair Detox & PRP Growth Protocol",
    treatmentSlug: "hair-detox-therapy",
    category: "Hair",
    before: "/images/patients_slider/patient-female-hair-parting-before.jpg",
    after: "/images/patients_slider/patient-female-hair-parting-after.jpg",
    combined: "/images/patients_privacy/patient-female-hair-parting.jpg",
    concern: "Widening Midline Parting & Diffuse Thinning",
    result: "Narrowed parting line, reinforced root anchoring, and restored natural hair density.",
    timeframe: "8 Weeks",
    sessions: "8 Weeks",
    badge: "Density Boost",
    notes: "Deep follicle detox combined with autologous growth micro-needling."
  },

  // --- LASER (3) ---
  {
    id: "case-4",
    title: "Cheek Dermal Melasma Clearance",
    treatment: "Laser Toning (Q-Switch) Protocol",
    treatmentSlug: "laser-toning",
    category: "Laser",
    before: "/images/patients_slider/patient-melasma-profile-1-before.jpg",
    after: "/images/patients_slider/patient-melasma-profile-1-after.jpg",
    combined: "/images/patients_privacy/patient-melasma-profile-1.jpg",
    concern: "Deep Dermal Melasma & Patchy Discoloration",
    result: "Shattered deep melanin clusters, visibly cleared melasma patches, and restored uniform tone.",
    timeframe: "6 Weeks",
    sessions: "5 Sessions",
    badge: "Melasma Cleared",
    notes: "Sub-nanosecond photoacoustic laser pulses shattered stubborn dermal pigment without heating or downtime."
  },
  {
    id: "case-9",
    title: "Facial Pigmentation & Sun Tan Clearing",
    treatment: "Laser Toning & Photo Facial",
    treatmentSlug: "laser-toning",
    category: "Laser",
    before: "/images/patients_slider/patient-pigmentation-clearing-before.jpg",
    after: "/images/patients_slider/patient-pigmentation-clearing-after.jpg",
    combined: "/images/patients_privacy/patient-pigmentation-clearing.jpg",
    concern: "Stubborn Sun Tan & Epidermal Dyschromia",
    result: "Balanced skin tone, cleared sun damage patches, and enhanced dermal clarity.",
    timeframe: "6 Weeks",
    sessions: "4 Sessions",
    badge: "Even Complexion",
    notes: "Dual-pulsed laser shattered epidermal melanin clumps without peeling or downtime."
  },
  {
    id: "case-14",
    title: "Deep Dermal Melasma Shattering",
    treatment: "Laser Toning (Q-Switch) + Carbon Peel",
    treatmentSlug: "laser-toning",
    category: "Laser",
    before: "/images/patients_slider/patient-melasma-profile-2-before.jpg",
    after: "/images/patients_slider/patient-melasma-profile-2-after.jpg",
    combined: "/images/patients_privacy/patient-melasma-profile-2.jpg",
    concern: "Recalcitrant Deep Melasma Patches",
    result: "Progressive fading of dark dermal patches and restored uniform skin glow.",
    timeframe: "6 Weeks",
    sessions: "4 Sessions",
    badge: "Tone Cleared",
    notes: "Selective photothermolysis destroys dermal pigment without damaging healthy tissue."
  },

  // --- FAT LOSS (1) ---
  {
    id: "case-3",
    title: "Non-Surgical Jawline & Fat Contouring",
    treatment: "Truly Derma Submental Contouring",
    treatmentSlug: "fat-loss",
    category: "Fat Loss",
    before: "/images/patients_slider/patient-jawline-contouring-before.jpg",
    after: "/images/patients_slider/patient-jawline-contouring-after.jpg",
    combined: "/images/patients_privacy/patient-jawline-contouring.jpg",
    concern: "Submental Fullness & Undefined Jawline",
    result: "Sharply sculpted mandibular line with zero surgical incisions or downtime.",
    timeframe: "6 Weeks",
    sessions: "3 Sessions",
    badge: "Sculpted Jawline",
    notes: "Non-invasive targeted lipolysis sculpted chin and neck contours with zero recovery downtime."
  }
];

// Alias patientGalleryPhotos to beforeAfterCases for full backwards compatibility
export const patientGalleryPhotos = beforeAfterCases;

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
    branch: "Pitampura, Delhi",
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
    branch: "Rajouri Garden, Delhi",
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
    branch: "Pitampura, Delhi",
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
    treatment: "Party Pop Facial",
    treatmentSlug: "party-pop-facial",
    rating: 5,
    branch: "Rajouri Garden, Delhi",
    city: "Rajouri Garden Clinic",
    relativeTime: "1 month ago",
    date: "Verified Patient",
    reviewCount: "63 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#34A853]",
    comment: "I had an upcoming family wedding and booked the Party Pop Facial at Truly Derma. The immediate hydration and intense glow were stunning. No redness at all! Dr. Megha's team personally examined my skin beforehand and explained every step so gently. Best aesthetic clinic in West Delhi without doubt.",
    doctorReply: "Thank you Pooja! The Party Pop Facial was specially designed for red carpet radiance and instant glow without any downtime.",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Thank you Pooja! The Party Pop Facial was specially designed for red carpet radiance and instant glow without any downtime."
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
    branch: "Pitampura, Delhi",
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
    branch: "Pitampura, Delhi",
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
    branch: "Rajouri Garden, Delhi",
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
    treatment: "Under-Eye Dark Circle Therapy",
    treatmentSlug: "under-eye-dark-circle",
    rating: 5,
    branch: "Pitampura, Delhi",
    city: "Pitampura Clinic",
    relativeTime: "5 weeks ago",
    date: "Verified Patient",
    reviewCount: "51 reviews • Local Guide",
    isLocalGuide: true,
    avatarBg: "bg-[#D97706]",
    comment: "I had stubborn dark circles and fatigue shadows around my eyes that concealer could never hide. The under-eye dark circle therapy at Truly Derma smoothed out and brightened the skin dramatically. Dr. Megha gave realistic expectations and delivered beyond them.",
    doctorReply: "Dear Ritu, watching your eye area brighten naturally and seeing your confidence restored has been so rewarding for our entire team!",
    ownerReply: {
      author: "Dr. Megha Aggarwal",
      text: "Dear Ritu, watching your eye area brighten naturally and seeing your confidence restored has been so rewarding for our entire team!"
    }
  }
];

// =============================================================================
// 8. MAIN TREATMENT CATEGORIES (CARDS) & AUTHENTIC PROCEDURES DIRECTORY
// =============================================================================
// Sourced 100% authentically from https://trulyderma.com/
// 4 Main Categories: Skin (7), Hair (4), Fat Loss (1), Laser Treatment (1)
// =============================================================================
export const treatmentCategories = [
  {
    id: "skin",
    name: "Skin",
    title: "Skin Treatments",
    slug: "skin",
    tagline: "Rejuvenating, glow-enhancing & clinical skin therapies",
    description: "From Hydra Facials and Medi Facials to Photo Facials and Mesotherapy, experience deep pore cleansing, pigmentation reduction, and natural skin glow.",
    image: "/images/treatments/hydra-facial.png",
    bgBanner: "/banners/banner-facial.orig.jpg",
    badge: "7 Treatments",
    treatments: [
      { name: "Mesotherapy", slug: "mesotherapy", tag: "Nutrient Infusion", image: "/images/treatments/mesotherapy.png", description: "Vitamins, amino acids & growth factor micro-infusion for skin renewal & hair loss." },
      { name: "Hydra Facial", slug: "hydra-facial", tag: "Vortex Hydration", image: "/images/treatments/hydra-facial.png", description: "Vortex exfoliation, gentle extraction & deep hyaluronic serum hydration." },
      { name: "Medi Facial", slug: "medi-facial", tag: "Doctor Curated", image: "/images/treatments/medi-facial.png", description: "Customized medical-grade facials for acne, pigmentation & luminous glow." },
      { name: "Party Pop Facial", slug: "party-pop-facial", tag: "Instant Glow", image: "/images/treatments/party-pop-facial.png", description: "Fun, refreshing facial for instant radiance, lip renewal & pre-event glow." },
      { name: "Photo Facial", slug: "photo-facial", tag: "Light Therapy", image: "/images/treatments/photo-facial.png", description: "Specialized light wavelengths targeting sun damage, age spots & fine lines." },
      { name: "Laser Toning", slug: "laser-toning", tag: "Q-Switch Laser", image: "/images/treatments/laser-toning.png", description: "Sub-nanosecond photoacoustic laser shattering deep melanin & melasma." },
      { name: "Under-Eye Dark Circle", slug: "under-eye-dark-circle", tag: "Eye Rejuvenation", image: "/images/treatments/under-eye-dark-circle.png", description: "Vanishing dark circles & eye shadows while restoring brightness and tone." }
    ]
  },
  {
    id: "hair",
    name: "Hair",
    title: "Hair Treatments",
    slug: "hair",
    tagline: "Advanced hair regrowth, laser reduction & scalp wellness",
    description: "Permanent 4D laser hair reduction, PRP hair rejuvenation, FUE hair transplants, and scalp detox therapies tailored to restore hair density.",
    image: "/images/treatments/laser-hair-reduction.png",
    bgBanner: "/banners/banner-laser.orig.jpg",
    badge: "4 Treatments",
    treatments: [
      { name: "Laser Hair Reduction", slug: "laser-hair-reduction", tag: "US-FDA Approved", image: "/images/treatments/laser-hair-reduction.png", description: "US-FDA approved 4D Tec LASER with 4 wavelengths for smooth, hair-free skin." },
      { name: "Hair Rejuvenation", slug: "hair-rejuvenation", tag: "PRP & Follicle Growth", image: "/images/treatments/hair-rejuvenation.png", description: "PRP & growth factors to stimulate hair follicles, control fall & revitalize scalp." },
      { name: "Hair Transplant", slug: "hair-transplant", tag: "Permanent FUE", image: "/images/treatments/hair-transplant.png", description: "Transformative FUE follicle transplantation for full, permanent hair." },
      { name: "Hair Detox Therapy", slug: "hair-detox-therapy", tag: "Scalp Purification", image: "/images/treatments/hair-detox-therapy.jpg", description: "Deep scalp cleanse removing toxic buildup & restoring scalp balance." }
    ]
  },
  {
    id: "fat-loss",
    name: "Fat Loss",
    title: "Non-Surgical Fat Loss",
    slug: "fat-loss",
    tagline: "Target stubborn fat pockets safely with zero surgery",
    description: "Safe, non-surgical body contouring treatments designed to help you achieve your desired shape with zero surgery and zero downtime.",
    image: "/images/treatments/fat-loss.png",
    bgBanner: "/images/after-contour.jpg",
    badge: "1 Treatment",
    treatments: [
      { name: "Non-Surgical Fat Loss & Contouring", slug: "fat-loss", tag: "Zero Surgery", image: "/images/treatments/fat-loss.png", description: "Safe body contouring targeting stubborn fat deposits with zero downtime." }
    ]
  },
  {
    id: "laser",
    name: "Laser Treatment",
    title: "Laser Treatments",
    slug: "laser",
    tagline: "US-FDA cleared Q-Switch laser toning & carbon peel",
    description: "Advanced photoacoustic Q-Switch Nd:YAG laser toning to shatter deep melanin, remove pigmentation, and refine skin texture with zero downtime.",
    image: "/images/treatments/laser-toning.png",
    bgBanner: "/banners/banner-laser.jpg",
    badge: "1 Treatment",
    treatments: [
      { name: "Laser Toning", slug: "laser-toning", tag: "Melasma & Pigment Removal", image: "/images/treatments/laser-toning.png", description: "Q-Switch laser and carbon peel to improve tone, texture, melasma & acne scars." }
    ]
  }
];

export const allTreatments = [
  // --- Category 1: Skin ---
  {
    id: "mesotherapy",
    slug: "mesotherapy",
    name: "Mesotherapy",
    category: "Skin",
    categoryKey: "skin",
    plainHeadline: "Nutrient Injection for Hair Loss & Skin Rejuvenation",
    tagline: "Nutrient Injection into Mesoderm for Hair Loss & Skin Rejuvenation",
    badge: "Cellular Nutrition",
    description: "In today’s fast-paced world, hair thinning and baldness are becoming increasingly common due to stress and lifestyle factors. Mesotherapy emerges as a popular solution, offering a fruitful treatment for hair loss, alopecia, and male-pattern baldness caused by hormonal imbalances. Unlike topical treatments like Minoxidil, our mesotherapy treatment yields superior results. This painless procedure involves injecting a specialised solution into the scalp’s mesoderm layer, including vitamins, amino acids, and growth factors. It can also be performed on various parts of the body, including the face, neck, and hands to improve skin texture, tone, and overall appearance.",
    heroImage: "/images/treatments/mesotherapy.png",
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
      { step: 2, title: "Mesoderm Delivery", description: "Painless delivery of specialized vitamin, amino acid, and peptide cocktail." },
      { step: 3, title: "Scalp / Skin Calming", description: "Soothing application to enhance absorption and patient comfort." }
    ],
    preCareTips: ["Cleanse hair or skin on morning of treatment"],
    postCareTips: ["Avoid washing hair or face for 6 hours post treatment"]
  },
  {
    id: "hydra-facial",
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "Skin",
    categoryKey: "skin",
    plainHeadline: "Deep Pore Cleanse & Glass Skin Glow",
    tagline: "Exfoliation, Extraction, and Hydration Using Specialized Vortex Technology",
    badge: "Most Popular",
    description: "Our Hydrafacial combines exfoliation, extraction, and hydration using specialized vortex technology. It removes dead skin cells, clears pores, and extracts impurities, revealing a smoother complexion. Plus, it infuses nourishing serums for intense hydration, improving skin tone, reducing fine lines, and giving you a youthful glow. It is a popular non-invasive treatment that helps to refresh the skin. You can see a noticeable improvement in your skin, texture, and tone immediately after the treatment.",
    heroImage: "/images/treatments/hydra-facial.png",
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
    postCareTips: ["Avoid washing face with hot water for 6 hours", "Wear sunscreen daily"]
  },
  {
    id: "medi-facial",
    slug: "medi-facial",
    name: "Medi Facial",
    category: "Skin",
    categoryKey: "skin",
    plainHeadline: "Customized Doctor Facial for Acne & Glow",
    tagline: "Customized Medical-Grade Facials Tailored for Specific Skin Conditions",
    badge: "Doctor Formulated",
    description: "At our clinic, we offer customized medi facials to refresh your skin. We use medical-grade ingredients to address particular conditions such as acne, hyperpigmentation, and ageing, leaving you with a luminous complexion. Results can be long-lasting, especially with a consistent skincare routine and periodic maintenance facials.",
    heroImage: "/images/treatments/medi-facial.png",
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
    id: "party-pop-facial",
    slug: "party-pop-facial",
    name: "Party Pop Facial",
    category: "Skin",
    categoryKey: "skin",
    plainHeadline: "Red Carpet Instant Radiant Glow",
    tagline: "Fun and Refreshing Facial Treatment Designed for an Instant Radiant Glow",
    badge: "Instant Glow",
    description: "It is a fun and refreshing facial treatment. Designed to leave you with a radiant glow, it is perfect for any occasion. Details may vary depending on the person and individual outcomes needed, but the focus is on skin cleansing analysis, exfoliation, resurfacing, hydration, brightening, radiance boost, lip treatment, massage, and relaxation, with some final touches and additional enhancement, depending on personal goals.",
    heroImage: "/images/treatments/party-pop-facial.png",
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
    name: "Photo Facial",
    category: "Skin",
    categoryKey: "skin",
    plainHeadline: "Targeting Sun Damage, Age Spots & Redness",
    tagline: "Targeting Sun Damage, Age Spots, Redness & Fine Lines with Specialized Light",
    badge: "Clinical Phototherapy",
    description: "Our Photofacial treatment is designed to target and diminish the signs of sun damage, age spots, redness, and fine lines. Using specialized light wavelengths, we precisely penetrate the skin’s surface, stimulating collagen production and promoting cellular renewal. It requires little to no recovery time. You can resume normal activities immediately after the treatment. When done correctly, minimal risks are involved.",
    heroImage: "/images/treatments/photo-facial.png",
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
    name: "Laser Toning",
    category: "Laser Treatment",
    categoryKey: "laser",
    plainHeadline: "Pigmentation, Melasma & Sun Tan Removal",
    tagline: "Advanced Q-Switch LASER & Carbon Peel for Sunspots, Melasma & Acne Scars",
    badge: "Clinical Gold Standard",
    description: "In LASER toning, we employ advanced techniques like Q-Switch LASER and Carbon Peel to improve your skin’s tone and texture by targeting issues like sunspots, freckles, melasma, and acne scars. It is a non-invasive cosmetic procedure. The heat that is generated by the LASER helps with collagen production and breaks down pigment particles. It needs little to no recovery time, and it is effective in reducing acne, blemishes, and other types of scarring. Very short pulses of high energy are delivered to the skin, absorbed by pigments in the skin, breaking them down into smaller particles and gradually removing them. You can see a noticeable improvement in pigmentation and skin texture only after a few sessions.",
    heroImage: "/images/treatments/laser-toning.png",
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
    name: "Under-Eye Dark Circle",
    category: "Skin",
    categoryKey: "skin",
    plainHeadline: "Vanishing Under-Eye Dark Circles & Brightness Restoration",
    tagline: "Vanishing Under-Eye Dark Circles & Restoring Brightness to the Eye Area",
    badge: "Clinic Speciality",
    description: "Vanishing under-eye dark circles is one of our specialities. Using advanced treatments and techniques, we address the root causes of dark circles to restore brightness to your under-eye area. Under the eye dark circles or shadows, while typically not a sign of a serious medical condition, can affect one’s appearance and self-confidence. Dark circles can have various causes, including genetics, ageing, fatigue, allergies, etc. Treatment options range from topical creams and cosmetic procedures to lifestyle modifications aimed at reducing pigment and improving skin texture. At Truly Derma Clinic, we prioritize patient safety, comfort, and satisfaction.",
    heroImage: "/images/treatments/under-eye-dark-circle.png",
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

  // --- Category 2: Hair ---
  {
    id: "laser-hair-reduction",
    slug: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    category: "Hair",
    categoryKey: "hair",
    plainHeadline: "Painless Laser Hair Reduction",
    tagline: "US-FDA Approved 4D Tec LASER with 4 Wavelengths for Smooth, Hair-Free Skin",
    badge: "US-FDA Approved",
    description: "Looking for smooth, hair-free skin? Our US-FDA approved 4D Tec LASER with 4 wavelengths ensures lasting results for all skin types. Our skilled professionals curate treatments for your specific needs, whether your face, underarms, legs, or bikini line. This method targets dark-coarse hair while leaving the skin undamaged, and in comparison to other hair removal methods, it is less painful. Using precise LASER energy, we disable hair follicles, offering a quick, painless procedure with no downtime.",
    heroImage: "/images/treatments/laser-hair-reduction.png",
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
    name: "Hair Rejuvenation",
    category: "Hair",
    categoryKey: "hair",
    plainHeadline: "Hair Fall Control & Scalp Revitalization",
    tagline: "Stimulating Hair Follicles, Growth & Scalp Revitalization with PRP Therapy",
    badge: "Follicle Revival",
    description: "At our clinic, we offer hair rejuvenation treatments to help you achieve luscious, healthy locks. Using advanced techniques and specialized products, our hair rejuvenation treatment stimulates hair follicles, promotes hair growth, and revitalizes your scalp. Whether you’re dealing with hair loss or simply want to enhance the health and vitality of your hair, our customized treatments can help you achieve the beautiful hair you’ve always wanted. Losing 10-100 strands of hair daily is normal, but if you’re noticing excessive shedding, it’s advisable to consult for PRP treatment for hair loss. At our clinic, we draw your blood, process it, and inject it into the scalp to stimulate hair growth. This treatment is beneficial for individuals going through thinning or sparse hair and is suitable for both men and women.",
    heroImage: "/images/treatments/hair-rejuvenation.png",
    sessionDuration: "60 Mins",
    downtime: "No downtime",
    suitableFor: "Excessive Hair Shedding, Thinning Hair, Sparse Patches, Dull Scalp Vitality",
    highlights: [
      "PRP and growth factor concentrate therapies for hair loss",
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
    name: "Hair Transplant",
    category: "Hair",
    categoryKey: "hair",
    plainHeadline: "Natural Lifetime Hair Restoration",
    tagline: "Transformative Advanced Follicular Transplantation for Full, Lush, Permanent Hair",
    badge: "Permanent Results",
    description: "We offer a transformative solution for those seeking to restore fullness and confidence to their hair! Our skilled aestheticians specialize in this advanced procedure, transplanting healthy hair follicles to areas of thinning or balding. Whether you’re dealing with male pattern baldness, thinning hair, or receding hairlines, our hair transplantation treatment can help you achieve the full, lush hair you desire. Typically, the back or sides of the scalp go to the balding or thinner areas. Transplanted hair growth typically begins within a few weeks after the surgery, and over several months, the transplanted hair grows thicker, fuller, and more permanent. Patients can achieve natural-looking results that last for years to come.",
    heroImage: "/images/treatments/hair-transplant.png",
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
    name: "Hair Detox Therapy",
    category: "Hair",
    categoryKey: "hair",
    plainHeadline: "Scalp Deep Cleanse & Dandruff Defense",
    tagline: "Deeply Cleansing & Fortifying Hair and Scalp, Removing Buildup & Impurities",
    badge: "Scalp Purification",
    description: "Hair detox therapy treatment is designed to deeply cleanse and fortify your hair and scalp, removing impurities and buildup to reveal healthy locks. Whether you’re dealing with product buildup or environmental pollutants, or just want to give your hair a reset, our hair detox therapy is the perfect solution. The combination of deep cleansing shampoo, stimulating massages, nourishing conditions, and hair detox therapy can help restore balance and vitality to your scalp and hair.",
    heroImage: "/images/treatments/hair-detox-therapy.jpg",
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

  // --- Category 3: Fat Loss ---
  {
    id: "fat-loss",
    slug: "fat-loss",
    name: "Non-Surgical Fat Loss & Contouring",
    category: "Fat Loss",
    categoryKey: "fat-loss",
    plainHeadline: "Non-Surgical Fat Loss & Body Contouring",
    tagline: "Result-Oriented Treatments Targeting Stubborn Fat Deposits & Sculpting Physique",
    badge: "Physique Contouring",
    description: "Looking to reduce stubborn fat pockets and contour your body? We offer safe, non-surgical body sculpting and contouring treatments designed to help you achieve your desired shape with zero surgery and zero downtime.",
    heroImage: "/images/treatments/fat-loss.png",
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
    authorTitle: "Founder, Truly Derma",
    image: "/images/treatments/hair-transplant.png",
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
    id: "hydra-facial-vs-regular-facial-guide",
    slug: "hydra-facial-vs-regular-facial-benefits",
    title: "Hydra Facial vs. Regular Facial: Why Medical Vortex Exfoliation Gives Lasting Glow",
    category: "Skin Rejuvenation",
    date: "December 4, 2023",
    readTime: "5 min read",
    author: "Dr. Megha Aggarwal",
    authorTitle: "Founder, Truly Derma",
    image: "/images/treatments/hydra-facial.png",
    excerpt: "Discover why medical vortex hydro-exfoliation and antioxidant infusion in Hydra Facial outperforms regular salon facials for deep pore cleansing, hydration, and long-lasting glass skin.",
    content: [
      {
        type: "paragraph",
        text: "Traditional salon facials often provide only fleeting, superficial hydration. A medical Hydra Facial at Truly Derma represents a revolutionary clinical standard by combining painless vortex extraction with intense serum hydration."
      },
      {
        type: "heading",
        text: "The Power of 3-Step Vortex Technology"
      },
      {
        type: "paragraph",
        text: "Using specialized spiral tips and vacuum suction, the Hydra Facial system gently dislodges sebum, dead skin cells, and blackheads without manual squeezing or painful redness."
      },
      {
        type: "heading",
        text: "Deep Hyaluronic & Antioxidant Infusion"
      },
      {
        type: "paragraph",
        text: "Simultaneously, active nourishing serums containing hyaluronic acid and peptides saturate the epidermal layers. The result is an instant glass-skin radiance, improved elasticity, and zero recovery downtime."
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
    authorTitle: "Founder, Truly Derma",
    image: "/images/treatments/laser-toning.png",
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
        a: "All consultations and clinical procedures are supervised directly by Dr. Megha Aggarwal, Founder of Truly Derma. Our clinical staff consists solely of certified nurses and trained aestheticians."
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
    category: "Skin Treatments",
    questions: [
      {
        q: "Is there any downtime or peeling after a Hydra Facial?",
        a: "None whatsoever. You walk out immediately with glowing, deeply cleansed, hydrated skin. You can return to work, social events, or even apply makeup right after your session."
      },
      {
        q: "What conditions do Prescription Medi-Facials treat?",
        a: "Our medi-facials use medical-grade active formulations tailored to address active acne, sun damage, pigmentation, and premature ageing, leaving you with a luminous, calm complexion."
      },
      {
        q: "How does Under-Eye Dark Circle therapy work?",
        a: "Vanishing under-eye dark circles is one of Truly Derma's clinical specialities. We address the root causes including fatigue, genetics, and vascular pooling with gentle clinical active formulations that disperse dark pigment safely."
      }
    ]
  },
  {
    category: "Hair Restoration & Laser",
    questions: [
      {
        q: "Is Laser Hair Reduction truly permanent and safe for Indian skin tones?",
        a: "Yes. Our US-FDA approved 4D Tec laser operates across synchronized wavelengths with a sub-zero contact cooling sapphire tip. It safely disables hair follicles while protecting Indian skin tones from burns or discoloration."
      },
      {
        q: "How soon can I see results from PRP Hair Rejuvenation?",
        a: "Excessive hair shedding typically decreases within 2 to 3 weeks after the first session. Visible new hair growth and follicle thickening become apparent after 2 to 3 sessions scheduled monthly."
      },
      {
        q: "Is Hair Transplant surgery painful?",
        a: "No. The procedure is performed under local anesthesia, so you will feel no pain during follicle extraction or implantation. Most patients relax comfortably throughout the day session."
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
          title: "Skin",
          href: "/treatments?category=skin",
          items: [
            { name: "Mesotherapy", slug: "mesotherapy", tag: "Nutrient Infusion" },
            { name: "Hydra Facial", slug: "hydra-facial", tag: "Vortex Hydration" },
            { name: "Medi Facial", slug: "medi-facial", tag: "Doctor Curated" },
            { name: "Party Pop Facial", slug: "party-pop-facial", tag: "Instant Glow" },
            { name: "Photo Facial", slug: "photo-facial", tag: "Light Therapy" },
            { name: "Laser Toning", slug: "laser-toning", tag: "Q-Switch Laser" },
            { name: "Under-Eye Dark Circle", slug: "under-eye-dark-circle", tag: "Eye Rejuvenation" }
          ]
        },
        {
          title: "Hair",
          href: "/treatments?category=hair",
          items: [
            { name: "Laser Hair Reduction", slug: "laser-hair-reduction", tag: "US-FDA Approved" },
            { name: "Hair Rejuvenation", slug: "hair-rejuvenation", tag: "PRP & Follicle Growth" },
            { name: "Hair Transplant", slug: "hair-transplant", tag: "Permanent FUE" },
            { name: "Hair Detox Therapy", slug: "hair-detox-therapy", tag: "Scalp Purification" }
          ]
        },
        {
          title: "Fat Loss",
          href: "/treatments/fat-loss",
          items: [
            { name: "Non-Surgical Fat Loss & Contouring", slug: "fat-loss", tag: "Zero Surgery" }
          ]
        },
        {
          title: "Laser Treatment",
          href: "/treatments/laser-toning",
          items: [
            { name: "Laser Toning", slug: "laser-toning", tag: "Melasma & Pigment Removal" }
          ]
        }
      ]
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" }
  ],
  footerLinks: {
    navigation: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Treatments", href: "/treatments" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact Us", href: "/contact" }
    ],
    treatments: [
      { name: "Hydra Facial", href: "/treatments/hydra-facial" },
      { name: "Laser Hair Reduction", href: "/treatments/laser-hair-reduction" },
      { name: "Hair Rejuvenation", href: "/treatments/hair-rejuvenation" },
      { name: "Laser Toning", href: "/treatments/laser-toning" },
      { name: "Non-Surgical Fat Loss", href: "/treatments/fat-loss" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
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
      badge: "TRULY DERMA CLINIC",
      pill: "Aesthetic Dermatology & Trichology",
      mainTitle: "Specialized Skin, Hair, Laser & Fat Loss by Certified Experts",
      subtitle: "Transform your beauty and health with evidence-based treatments and US-FDA cleared technologies, founded by Dr. Megha Aggarwal in New Delhi.",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Explore Treatments",
      phoneDirect: "+91 75910 55566",
      whatsappDirect: "+91 80769 26982",
      slides: [
        {
          index: 0,
          image: "/banners/banner-real-facial.webp",
          objectPosition: "center 30%",
          badge: "TRULY DERMA CLINIC",
          title: "Deep Cleansing & Glass Skin with Hydra Facial",
          subtitle: "Gentle exfoliation, painless vortex extraction, and nourishing hyaluronic hydration for an instant radiant glow.",
          ctaText: "EXPLORE HYDRA FACIAL",
          treatmentSlug: "hydra-facial",
          trustBadges: [
            { label: "13 Yrs Experience", icon: "Award" },
            { label: "100% Safe", icon: "ShieldCheck" },
            { label: "Zero Downtime", icon: "Sparkles" }
          ]
        },
        {
          index: 1,
          image: "/banners/banner-real-laser.webp",
          objectPosition: "right center",
          badge: "US-FDA APPROVED 4D TEC LASER",
          title: "Smooth, Hair-Free Skin with Laser Hair Reduction",
          subtitle: "Triple-wavelength laser energy with sub-zero contact cooling for a painless, lasting hair reduction experience.",
          ctaText: "EXPLORE LASER REDUCTION",
          treatmentSlug: "laser-hair-reduction",
          trustBadges: [
            { label: "Non-Invasive", icon: "Sparkles" },
            { label: "US-FDA Approved", icon: "ShieldCheck" },
            { label: "Painless Cooling", icon: "Award" }
          ]
        },
        {
          index: 2,
          image: "/banners/banner-real-hair.jpg",
          objectPosition: "center 40%",
          badge: "HAIR REGROWTH & SCALP CLINIC",
          title: "Restore Density & Growth with Hair Rejuvenation",
          subtitle: "Customized PRP & growth factor therapy to stimulate hair follicles, control hair fall, and revitalize your scalp.",
          ctaText: "EXPLORE HAIR THERAPY",
          treatmentSlug: "hair-rejuvenation",
          trustBadges: [
            { label: "Proven Experience", icon: "Award" },
            { label: "Natural Regrowth", icon: "Heart" },
            { label: "Safe & Certified", icon: "ShieldCheck" }
          ]
        },
        {
          index: 3,
          image: "/banners/banner-real-laser-therapy.jpg",
          objectPosition: "center center",
          badge: "US-FDA APPROVED Q-SWITCH LASER",
          title: "Clear, Pigment-Free Skin with Laser Toning",
          subtitle: "Advanced photo-acoustic laser energy targeting deep pigmentation, sun spots, and uneven tone with zero downtime.",
          ctaText: "EXPLORE LASER TONING",
          treatmentSlug: "laser-toning",
          trustBadges: [
            { label: "100% Non-Invasive", icon: "Sparkles" },
            { label: "Zero Downtime", icon: "ShieldCheck" },
            { label: "13 Yrs Expertise", icon: "Award" }
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
          branchLabel: "Select Clinic Location",
          submitButton: "Request Priority Callback"
        },
        successMessage: "Thank you! Our clinic desk will connect with you immediately."
      }
    },
    brandPhilosophy: {
      pill: "Our Approach",
      title: "How We Care For You",
      subtitle: "Personalized treatments designed to give you natural, glowing skin with safe, proven technology.",
      authorName: "Dr. Megha Aggarwal",
      authorTitle: "Founder, Truly Derma Clinic",
      pillars: [
        {
          num: "01",
          category: "CONSULTATION",
          title: "Personalized Skin Analysis",
          description: "Every consultation begins with a detailed skin and hair analysis to understand your unique needs and create a personalized plan.",
          tag: "Doctor Consultation"
        },
        {
          num: "02",
          category: "TECHNOLOGY",
          title: "US-FDA Approved Technology",
          description: "We use only proven, safe, and certified medical equipment to ensure the highest safety and natural results.",
          tag: "100% Safe"
        },
        {
          num: "03",
          category: "EXPERIENCE",
          title: "Comfortable & Zero Downtime",
          description: "Gentle, non-invasive treatments that let you return to your daily routine right away with visible, glowing skin.",
          tag: "Instant Glow"
        }
      ]
    },
    whyChooseUs: {
      pill: "Our Promise",
      title: "Why Choose Us",
      subtitle: "Experience trusted skin and hair care with non-invasive treatments, 100% safety, and over 13 years of proven experience.",
      highlights: [
        { label: "Non-Invasive", desc: "Zero downtime & painless care" },
        { label: "100% Safe", desc: "US-FDA approved protocols" },
        { label: "Proven Experience of 13 Years", desc: "Led by Dr. Megha Aggarwal" }
      ],
      items: whyChooseUsList
    },
    pinnedShowcase: {
      pill: "Explore Services",
      title: "Our Treatments",
      subtitle: "Explore our popular skin, hair, and laser treatments designed to give you natural, glowing results.",
      filterTabs: [
        { id: "all", label: "All Treatments" },
        { id: "skin", label: "Skin & Facials" },
        { id: "hair", label: "Hair Treatments" },
        { id: "laser", label: "Laser Treatments" }
      ]
    },
    technologyShowcase: {
      pill: "How It Works",
      title: "Our 3-Step Treatment Process",
      subtitle: "Simple, doctor-guided steps designed to give you healthy skin and lasting results.",
      steps: threeStepProcess
    },
    beforeAfter: {
      pill: "Before & After",
      title: "Real Patient Results",
      subtitle: "Drag the slider to see before and after photos of our treatments.",
      cases: beforeAfterCases
    },
    doctorBio: {
      pill: "About Our Doctor",
      title: "Meet Dr. Megha Aggarwal",
      doctor: doctorProfile
    },
    skinQuiz: {
      pill: "Skin Quiz",
      title: "Find the Right Treatment for You",
      subtitle: "Answer 3 quick questions to find the best treatment for your skin or hair.",
      step1Title: "What is your main skin or hair concern?",
      step2Title: "What is your recovery preference?",
      step3Title: "How would you describe your skin sensitivity?",
      questions: [
        {
          id: "goal",
          step: 1,
          title: "What is your main skin or hair concern?",
          subtitle: "Select the primary condition you wish to address with Dr. Megha.",
          options: [
            { id: "glow", label: "Dullness & Instant Party Radiance", description: "Looking for instant hydration, red-carpet glow, and zero peeling.", slug: "party-pop-facial" },
            { id: "pores", label: "Enlarged Pores & Deep Congestion", description: "Deep sebum plugs and blackheads requiring vortex hydro-peeling.", slug: "hydra-facial" },
            { id: "pigmentation", label: "Melasma, Dark Spots & Sun Tan", description: "Targeting deeper dermal pigmentation with Q-Switch laser accuracy.", slug: "laser-toning" },
            { id: "acne", label: "Active Acne & Blemishes", description: "Medical-grade active formulations tailored to clear acne and restore calm.", slug: "medi-facial" },
            { id: "darkcircles", label: "Under-Eye Dark Circles & Fatigue", description: "Dispelling periorbital dark shadows and restoring eye brightness.", slug: "under-eye-dark-circle" },
            { id: "hair", label: "Hair Thinning & Excessive Shedding", description: "Revitalizing hair follicle caliber with PRP and growth factors.", slug: "hair-rejuvenation" }
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
        "party-pop-facial": {
          name: "Party Pop Facial",
          slug: "party-pop-facial",
          badge: "Instant Glow",
          category: "Instant Radiance & Event Care",
          downtime: "Zero Downtime",
          sessions: "1 Session Before Events",
          summary: "Based on your profile, Dr. Megha recommends our Party Pop Facial. A refreshing, fun treatment featuring skin cleansing, gentle exfoliation, intense hydration, lip treatment, and relaxation massage for an immediate radiant glow.",
          keyBenefits: [
            "Immediate red-carpet radiance and fresh glow",
            "Deep hydration infusion with gentle lip care",
            "Zero downtime — wear makeup immediately"
          ]
        },
        "hydra-facial": {
          name: "Hydra Facial",
          slug: "hydra-facial",
          badge: "Most Popular",
          category: "Vortex Hydro-Exfoliation",
          downtime: "Zero Downtime",
          sessions: "Monthly Maintenance",
          summary: "Your objective calls for gentle pore vacuuming and lipid replenishment. Our Hydra Facial employs specialized vortex technology to extract impurities painlessly while quenching epidermal layers with nourishing serums and antioxidants.",
          keyBenefits: [
            "Painless vortex extraction of blackheads & debris",
            "Zero redness, instant glass-skin luminosity",
            "Immediate pore refining and rebalanced skin hydration"
          ]
        },
        "laser-toning": {
          name: "Laser Toning (Q-Switch Nd:YAG)",
          slug: "laser-toning",
          badge: "US-FDA Approved",
          category: "Photoacoustic Pigment Fragmentation",
          downtime: "Zero Downtime",
          sessions: "4 - 6 Sessions Recommended",
          summary: "Targeted sub-nanosecond photoacoustic energy safely shatters localized melanin clusters and stubborn melasma patches without burning surface tissue. Paired with Hollywood carbon peeling for supreme dermal clarity.",
          keyBenefits: [
            "Clinical targeting of deep dermal melasma and sun damage",
            "Calibrated for Indian Fitzpatrick skin types III-V",
            "Tightens dilated pores and refines skin texture"
          ]
        },
        "medi-facial": {
          name: "Prescription Medi-Facial",
          slug: "medi-facial",
          badge: "Doctor Curated",
          category: "Medical-Grade Facial",
          downtime: "Zero Downtime",
          sessions: "3 - 4 Sessions Recommended",
          summary: "Formulated specifically for acne-prone, pigmented, or ageing skin, our Medi-Facial uses pharmaceutical-grade active ingredients to calm inflammation, clear blemishes, and restore a luminous complexion.",
          keyBenefits: [
            "Customized after thorough skin assessment",
            "Pharmaceutical-grade active ingredients",
            "Calms active acne and smooths texture"
          ]
        },
        "under-eye-dark-circle": {
          name: "Under-Eye Dark Circle Therapy",
          slug: "under-eye-dark-circle",
          badge: "Clinic Speciality",
          category: "Periorbital Rejuvenation",
          downtime: "Zero Downtime",
          sessions: "3 - 5 Sessions Recommended",
          summary: "Vanishing under-eye dark circles is one of Truly Derma's clinical specialities. We target pigment pooling and fatigue shadows to restore natural brightness and firmness around the delicate eye area.",
          keyBenefits: [
            "Targets root causes: fatigue, vascular pooling & pigment",
            "Safe clinical active formulations for delicate periorbital skin",
            "Visible brightness and reduced puffiness"
          ]
        },
        "hair-rejuvenation": {
          name: "Hair Rejuvenation Therapy (PRP)",
          slug: "hair-rejuvenation",
          badge: "Follicle Revival",
          category: "PRP & Growth Factor Therapy",
          downtime: "Zero Downtime",
          sessions: "3 - 4 Sessions Spaced 1 Month Apart",
          summary: "Dr. Megha's specialized trichology protocol utilizes autologous platelet-rich plasma and concentrated growth factors micro-infused at the scalp to arrest excessive shedding and revitalize dormant hair follicles.",
          keyBenefits: [
            "Controls excessive hair fall and shedding",
            "Thickens hair follicle shaft caliber and density",
            "100% natural autologous factors with zero synthetic risk"
          ]
        }
      }
    },
    testimonials: {
      pill: "Patient Reviews",
      title: "Loved by Over 20,000 Happy Patients",
      subtitle: "Verified Google reviews from patients who experienced transformative skin, hair, and aesthetic renewal at our Delhi clinics.",
      aggregateRating: "4.9 / 5.0",
      totalReviews: "520+ Verified Reviews on Google",
      reviews: testimonialsList
    },
    blogSection: {
      pill: "Expert Advice",
      title: "Blogs",
      subtitle: "Read our blogs on skin care, hair restoration, and clinical treatments from Dr. Megha Aggarwal.",
      readMoreText: "View All Blogs →"
    },
    ctaBanner: {
      pill: "Book Consultation",
      title: "Visit Truly Derma in Delhi",
      subtitle: "Schedule a consultation with Dr. Megha Aggarwal at our Pitampura or Rajouri Garden clinics.",
      phoneCTA: "Call +91 75910 55566",
      whatsappCTA: "WhatsApp Consult",
      bookingCTA: "Book Appointment"
    }
  },

  // ---------------------------------------------------------------------------
  // B. ABOUT US PAGE
  // ---------------------------------------------------------------------------
  about: {
    meta: {
      title: "About Truly Derma Clinic | Founded by Dr. Megha Aggarwal",
      description: "Learn about Truly Derma Clinic, founded by Dr. Megha Aggarwal with 10+ years of aesthetic excellence in Delhi."
    },
    hero: {
      badge: "ABOUT TRULY DERMA",
      title: "Welcome to Truly Derma Clinic",
      subtitle: "Where science meets bespoke aesthetics, founded by Dr. Megha Aggarwal.",
      introParagraphs: [
        "Welcome to Truly Derma Clinic, led by the famous Aesthetician Dr. Megha Aggarwal where our primary focus is on providing comprehensive solutions for skincare, hair care, LASER treatments, and fat loss.",
        "We believe everyone deserves to feel confident in their skin. Every treatment at Truly Derma is personalized to your individual needs using US-FDA approved technologies and gentle, non-invasive methods."
      ]
    },
    missionVision: {
      missionTitle: "Our Clinical Mission",
      missionText: "To provide safe, ethical, and evidence-based aesthetic and dermatological treatments that celebrate each patient's individuality, delivering noticeable natural results without invasive downtime or compromised safety.",
      visionTitle: "Our Vision",
      visionText: "To set the highest standard of compassionate, doctor-led clinical aesthetics across India, combining US-FDA approved technologies with genuine care and natural results.",
      coreValues: [
        { title: "Patient Safety First", description: "Every protocol is supervised by certified doctors and experts adhering to board-certified standards." },
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
    }
  },

  // ---------------------------------------------------------------------------
  // C. CONTACT PAGE
  // ---------------------------------------------------------------------------
  contact: {
    meta: {
      title: "Contact Truly Derma Clinic | Pitampura & Rajouri Garden, Delhi",
      description: "Get in touch with Truly Derma Clinic. Book appointments or visit our clinics in Pitampura and Rajouri Garden, New Delhi."
    },
    hero: {
      badge: "CONTACT TRULY DERMA",
      title: "Contact Our Clinics",
      subtitle: "Visit our clinics in Pitampura or Rajouri Garden, or contact us to book your consultation."
    },
    branches: clinicContact.branches,
    phoneLines: clinicContact.phoneNumbers,
    whatsappDisplay: clinicContact.whatsappDisplay,
    whatsappUrl: clinicContact.whatsappUrl,
    email: clinicContact.email,
    hours: clinicContact.hours,
    bookingForm: {
      title: "Schedule Your Consultation",
      subtitle: "Our team will contact you shortly to confirm your clinic location and timing.",
      fields: {
        name: "Full Name",
        phone: "Mobile / WhatsApp Number",
        email: "Email Address (Optional)",
        branch: "Select Clinic Location",
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
      title: "All Treatments | Truly Derma Clinic Delhi",
      description: "Explore 18 authentic skin, hair, laser, and fat loss treatments offered by Dr. Megha Aggarwal at Truly Derma Clinic in New Delhi."
    },
    hero: {
      badge: "EXPLORE ALL SERVICES",
      title: "Skin, Hair, Laser & Fat Loss Treatments",
      subtitle: "Explore our range of treatments tailored to give you healthy, glowing skin and confident hair, led by Dr. Megha Aggarwal in New Delhi."
    },
    guarantee: {
      badge: "OUR PROMISE",
      title: "100% Safe, Proven Medical Results",
      text: "Every treatment uses certified equipment, strict safety standards, and expert doctor care tailored to your skin."
    }
  },

  // ---------------------------------------------------------------------------
  // E. BLOGS JOURNAL HUB PAGE
  // ---------------------------------------------------------------------------
  blogsHub: {
    meta: {
      title: "Blogs | Truly Derma Clinic",
      description: "Read our blogs on skin care, hair restoration, and clinical treatments from Dr. Megha Aggarwal."
    },
    hero: {
      badge: "BLOGS",
      title: "Blogs",
      subtitle: "Helpful skin care tips, guides, and advice directly from Dr. Megha Aggarwal."
    }
  },

  // ---------------------------------------------------------------------------
  // F. LEGAL PAGES (PRIVACY POLICY & TERMS)
  // ---------------------------------------------------------------------------
  privacyPolicy: {
    meta: {
      title: "Privacy Policy | Truly Derma Clinic",
      description: "Our commitment to patient confidentiality, medical data protection, and clinical privacy."
    },
    title: "Privacy Policy",
    lastUpdated: "October 2026",
    sections: [
      {
        heading: "1. Patient Medical Confidentiality",
        text: "Truly Derma Clinic adheres strictly to medical privacy guidelines and HIPAA/Indian Medical Council confidentiality standards. Any medical history, diagnostic skin scans, or treatment notes shared with our physicians are protected under doctor-patient privilege."
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
      title: "Terms of Service | Truly Derma Clinic",
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
    title: "US-FDA Approved 4D Tec Laser Hair Reduction",
    description: "Our US-FDA approved 4D Tec LASER with 4 synchronized wavelengths ensures lasting, painless results for all skin types, featuring sub-zero contact sapphire cooling.",
    features: [
      "Non-invasive",
      "US-FDA Approved",
      "Painless Contact Cooling",
      "4 Synchronized Wavelengths",
      "Zero Downtime",
      "100% Safe"
    ]
  },
  techSteps: threeStepProcess,
  beforeAfter: beforeAfterCases,
  patientGallery: patientGalleryPhotos
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
  patientGalleryPhotos,
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

