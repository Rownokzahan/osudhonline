type MedicalCondition = {
  id: string;
  slug: string;
  name: string;
};

export type MedicalConditionsMap = Record<string, MedicalCondition[]>;

export const medicalConditions: MedicalConditionsMap = {
  A: [
    { id: "acne", slug: "acne", name: "Acne" },
    { id: "adhd", slug: "adhd", name: "Adhd" },
    {
      id: "alcohol-addiction",
      slug: "alcohol-addiction",
      name: "Alcohol Addiction",
    },
    { id: "allergies", slug: "allergies", name: "Allergies" },
    { id: "alzheimer", slug: "alzheimer", name: "Alzheimer" },
    { id: "amoebiasis", slug: "amoebiasis", name: "Amoebiasis" },
    { id: "anaemia", slug: "anaemia", name: "Anaemia" },
    {
      id: "anaesthesia-general",
      slug: "anaesthesia-general",
      name: "Anaesthesia General",
    },
    {
      id: "anaesthesia-local",
      slug: "anaesthesia-local",
      name: "Anaesthesia Local",
    },
    { id: "anal-fissure", slug: "anal-fissure", name: "Anal Fissure" },
    { id: "angina", slug: "angina", name: "Angina" },
    { id: "anti-scar", slug: "anti-scar", name: "Anti Scar" },
    { id: "anxiety", slug: "anxiety", name: "Anxiety" },
    { id: "apnea", slug: "apnea", name: "Apnea" },
    { id: "appetite", slug: "appetite", name: "Appetite" },
    { id: "arrhythmias", slug: "arrhythmias", name: "Arrhythmias" },
    { id: "arthritis", slug: "arthritis", name: "Arthritis" },
    { id: "asthma-copd", slug: "asthma-copd", name: "Asthma Copd" },
    {
      id: "atopic-dermatitis-eczema",
      slug: "atopic-dermatitis-eczema",
      name: "Atopic Dermatitis Eczema",
    },
    {
      id: "auto-immune-disease",
      slug: "auto-immune-disease",
      name: "Auto Immune Disease",
    },
    {
      id: "ayurvedic-medicine",
      slug: "ayurvedic-medicine",
      name: "Ayurvedic Medicine",
    },
  ],
  B: [
    {
      id: "bacterial-infections",
      slug: "bacterial-infections",
      name: "Bacterial Infections",
    },
    {
      id: "bladder-and-prostate-disorders",
      slug: "bladder-and-prostate-disorders",
      name: "Bladder And Prostate Disorders",
    },
    {
      id: "bleeding-disorders",
      slug: "bleeding-disorders",
      name: "Bleeding Disorders",
    },
    { id: "blood-clot", slug: "blood-clot", name: "Blood Clot" },
    { id: "bone-metabolism", slug: "bone-metabolism", name: "Bone Metabolism" },
    { id: "burns", slug: "burns", name: "Burns" },
  ],
  C: [
    { id: "cancer-oncology", slug: "cancer-oncology", name: "Cancer Oncology" },
    {
      id: "cholelithiasis-gall-stones",
      slug: "cholelithiasis-gall-stones",
      name: "Cholelithiasis Gall Stones",
    },
    { id: "cleanser", slug: "cleanser", name: "Cleanser" },
    { id: "constipation", slug: "constipation", name: "Constipation" },
    { id: "contraception", slug: "contraception", name: "Contraception" },
    { id: "cough-and-cold", slug: "cough-and-cold", name: "Cough And Cold" },
  ],
  D: [
    { id: "dandruff", slug: "dandruff", name: "Dandruff" },
    {
      id: "denture-adhesive",
      slug: "denture-adhesive",
      name: "Denture Adhesive",
    },
    { id: "depression", slug: "depression", name: "Depression" },
    { id: "diabetes", slug: "diabetes", name: "Diabetes" },
    { id: "diagnostic", slug: "diagnostic", name: "Diagnostic" },
    { id: "diarrhoea", slug: "diarrhoea", name: "Diarrhoea" },
    { id: "digestion", slug: "digestion", name: "Digestion" },
    { id: "dry-eye", slug: "dry-eye", name: "Dry Eye" },
    { id: "dry-skin", slug: "dry-skin", name: "Dry Skin" },
  ],
  E: [
    { id: "ear-condition", slug: "ear-condition", name: "Ear Condition" },
    {
      id: "epilepsy-convulsion",
      slug: "epilepsy-convulsion",
      name: "Epilepsy Convulsion",
    },
    { id: "eye-conditions", slug: "eye-conditions", name: "Eye Conditions" },
    { id: "eye-infections", slug: "eye-infections", name: "Eye Infections" },
  ],
  F: [
    { id: "fever", slug: "fever", name: "Fever" },
    {
      id: "fungal-infections",
      slug: "fungal-infections",
      name: "Fungal Infections",
    },
  ],
  G: [
    {
      id: "gastro-intestinal-motility-disorders",
      slug: "gastro-intestinal-motility-disorders",
      name: "Gastro Intestinal Motility Disorders",
    },
    { id: "general", slug: "general", name: "General" },
    { id: "glaucoma", slug: "glaucoma", name: "Glaucoma" },
    { id: "gout", slug: "gout", name: "Gout" },
  ],
  H: [
    {
      id: "h-pylori-infection",
      slug: "h-pylori-infection",
      name: "H Pylori Infection",
    },
    { id: "haematopoiesis", slug: "haematopoiesis", name: "Haematopoiesis" },
    { id: "haemorrhoid", slug: "haemorrhoid", name: "Haemorrhoid" },
    { id: "hair-color", slug: "hair-color", name: "Hair Color" },
    { id: "hair-loss", slug: "hair-loss", name: "Hair Loss" },
    { id: "head-lice", slug: "head-lice", name: "Head Lice" },
    { id: "heart-failure", slug: "heart-failure", name: "Heart Failure" },
    {
      id: "high-cholesterol",
      slug: "high-cholesterol",
      name: "High Cholesterol",
    },
    { id: "hirsutism", slug: "hirsutism", name: "Hirsutism" },
    {
      id: "hormonal-therapy",
      slug: "hormonal-therapy",
      name: "Hormonal Therapy",
    },
    {
      id: "hyperpigmentation",
      slug: "hyperpigmentation",
      name: "Hyperpigmentation",
    },
    { id: "hypertension", slug: "hypertension", name: "Hypertension" },
    { id: "hyperthyroidism", slug: "hyperthyroidism", name: "Hyperthyroidism" },
    { id: "hypnosis", slug: "hypnosis", name: "Hypnosis" },
    { id: "hyponatremia", slug: "hyponatremia", name: "Hyponatremia" },
    { id: "hypotension", slug: "hypotension", name: "Hypotension" },
    { id: "hypothyroidism", slug: "hypothyroidism", name: "Hypothyroidism" },
  ],
  I: [
    {
      id: "idiopathic-pulmonary-fibrosis",
      slug: "idiopathic-pulmonary-fibrosis",
      name: "Idiopathic Pulmonary Fibrosis",
    },
    {
      id: "immune-suppression",
      slug: "immune-suppression",
      name: "Immune Suppression",
    },
    { id: "immunoglobulins", slug: "immunoglobulins", name: "Immunoglobulins" },
    {
      id: "impotence-erectile-dysfunction",
      slug: "impotence-erectile-dysfunction",
      name: "Impotence Erectile Dysfunction",
    },
    {
      id: "intermittent-claudication",
      slug: "intermittent-claudication",
      name: "Intermittent Claudication",
    },
    {
      id: "iron-supplement-anaemia",
      slug: "iron-supplement-anaemia",
      name: "Iron Supplement Anaemia",
    },
    {
      id: "itching-dry-skin",
      slug: "itching-dry-skin",
      name: "Itching Dry Skin",
    },
  ],
  K: [
    {
      id: "kidney-disease-stones",
      slug: "kidney-disease-stones",
      name: "Kidney Disease Stones",
    },
  ],
  L: [
    { id: "leprosy", slug: "leprosy", name: "Leprosy" },
    { id: "liver-disease", slug: "liver-disease", name: "Liver Disease" },
  ],
  M: [
    { id: "malarial", slug: "malarial", name: "Malarial" },
    { id: "melasma", slug: "melasma", name: "Melasma" },
    { id: "migraine", slug: "migraine", name: "Migraine" },
    {
      id: "multiple-sclerosis",
      slug: "multiple-sclerosis",
      name: "Multiple Sclerosis",
    },
    {
      id: "muscle-cramps-spasticity",
      slug: "muscle-cramps-spasticity",
      name: "Muscle Cramps Spasticity",
    },
    { id: "muscle-spasm", slug: "muscle-spasm", name: "Muscle Spasm" },
    {
      id: "myasthenia-gravis",
      slug: "myasthenia-gravis",
      name: "Myasthenia Gravis",
    },
    { id: "mydriasis", slug: "mydriasis", name: "Mydriasis" },
  ],
  N: [
    { id: "nappy-rash", slug: "nappy-rash", name: "Nappy Rash" },
    {
      id: "nasal-congestion",
      slug: "nasal-congestion",
      name: "Nasal Congestion",
    },
    {
      id: "neuropathic-pain",
      slug: "neuropathic-pain",
      name: "Neuropathic Pain",
    },
    {
      id: "nootropics-and-neurotropics",
      slug: "nootropics-and-neurotropics",
      name: "Nootropics And Neurotropics",
    },
  ],
  O: [
    { id: "obesity", slug: "obesity", name: "Obesity" },
    { id: "oral-care", slug: "oral-care", name: "Oral Care" },
    { id: "osteoporosis", slug: "osteoporosis", name: "Osteoporosis" },
  ],
  P: [
    { id: "pain-relief", slug: "pain-relief", name: "Pain Relief" },
    { id: "parasitic-worms", slug: "parasitic-worms", name: "Parasitic Worms" },
    { id: "parkinsonism", slug: "parkinsonism", name: "Parkinsonism" },
    {
      id: "peripheral-hypertension",
      slug: "peripheral-hypertension",
      name: "Peripheral Hypertension",
    },
    {
      id: "peripheral-vascular-disease",
      slug: "peripheral-vascular-disease",
      name: "Peripheral Vascular Disease",
    },
    {
      id: "poisoning-overdose",
      slug: "poisoning-overdose",
      name: "Poisoning Overdose",
    },
    {
      id: "polycystic-ovary-syndrome",
      slug: "polycystic-ovary-syndrome",
      name: "Polycystic Ovary Syndrome",
    },
    {
      id: "pregnancy-testing",
      slug: "pregnancy-testing",
      name: "Pregnancy Testing",
    },
    {
      id: "premature-ejaculation",
      slug: "premature-ejaculation",
      name: "Premature Ejaculation",
    },
    { id: "psoriasis", slug: "psoriasis", name: "Psoriasis" },
    {
      id: "psoriasis-seborrhea-ichthyosis",
      slug: "psoriasis-seborrhea-ichthyosis",
      name: "Psoriasis Seborrhea Ichthyosis",
    },
    { id: "psychosis", slug: "psychosis", name: "Psychosis" },
  ],
  R: [
    {
      id: "rheumatoid-arthritis",
      slug: "rheumatoid-arthritis",
      name: "Rheumatoid Arthritis",
    },
  ],
  S: [
    { id: "scabies", slug: "scabies", name: "Scabies" },
    { id: "scar", slug: "scar", name: "Scar" },
    { id: "schizophrenia", slug: "schizophrenia", name: "Schizophrenia" },
    { id: "skin-infections", slug: "skin-infections", name: "Skin Infections" },
    {
      id: "smoking-cessation",
      slug: "smoking-cessation",
      name: "Smoking Cessation",
    },
    { id: "stretch-marks", slug: "stretch-marks", name: "Stretch Marks" },
    { id: "sun-protectors", slug: "sun-protectors", name: "Sun Protectors" },
    {
      id: "sunscreen-preparations",
      slug: "sunscreen-preparations",
      name: "Sunscreen Preparations",
    },
    { id: "supplements", slug: "supplements", name: "Supplements" },
    { id: "surgicals", slug: "surgicals", name: "Surgicals" },
  ],
  T: [
    {
      id: "thrombotic-disorder",
      slug: "thrombotic-disorder",
      name: "Thrombotic Disorder",
    },
    { id: "tuberculosis", slug: "tuberculosis", name: "Tuberculosis" },
  ],
  U: [
    {
      id: "ulcer-reflux-flatulence",
      slug: "ulcer-reflux-flatulence",
      name: "Ulcer Reflux Flatulence",
    },
    {
      id: "ulcerative-colitis-bowel-inflammatory-disease",
      slug: "ulcerative-colitis-bowel-inflammatory-disease",
      name: "Ulcerative Colitis Bowel Inflammatory Disease",
    },
    {
      id: "urinary-retention",
      slug: "urinary-retention",
      name: "Urinary Retention",
    },
    {
      id: "uterus-conditions",
      slug: "uterus-conditions",
      name: "Uterus Conditions",
    },
    { id: "uti-infections", slug: "uti-infections", name: "Uti Infections" },
  ],
  V: [
    { id: "vaccines", slug: "vaccines", name: "Vaccines" },
    {
      id: "vaginal-conditions",
      slug: "vaginal-conditions",
      name: "Vaginal Conditions",
    },
    { id: "varicose-veins", slug: "varicose-veins", name: "Varicose Veins" },
    { id: "vertigo", slug: "vertigo", name: "Vertigo" },
    {
      id: "viral-infections",
      slug: "viral-infections",
      name: "Viral Infections",
    },
    { id: "vitiligo", slug: "vitiligo", name: "Vitiligo" },
    {
      id: "vomitting-emesis",
      slug: "vomitting-emesis",
      name: "Vomitting Emesis",
    },
  ],
  W: [
    {
      id: "warts-calluses-other-skin-lesion",
      slug: "warts-calluses-other-skin-lesion",
      name: "Warts Calluses Other Skin Lesion",
    },
    { id: "wound-care", slug: "wound-care", name: "Wound Care" },
    {
      id: "wrinkle-anti-ageing",
      slug: "wrinkle-anti-ageing",
      name: "Wrinkle Anti Ageing",
    },
  ],
};
