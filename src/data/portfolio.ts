export const profile = {
  name: "Owais Ahmad",
  role: "AI & Data Science Manager",
  tagline:
    "Building enterprise-scale Generative AI, LLM & MLOps systems that ship to production.",
  location: "New Delhi, India",
  email: "owaiskhan9654@gmail.com",
  phone: "+91-9515884381",
  resume: "/Owais_Ahmad_Delhi_7_YOE_resume.pdf",
  currentTitle: "Data Science Manager",
  currentOrg: "Ministry of Electronics & IT · Govt. of India",
  ministryPhoto: "/images/ministry-steps.webp",
  summary:
    "AI & Data Science Manager with 7+ years of experience building enterprise-scale Generative AI, Machine Learning, and MLOps systems across government and enterprise domains. I specialize in production-grade LLM systems, Agentic AI workflows, RAG pipelines, model evaluation, and cloud-native AI infrastructure using IBM watsonx.ai, Azure OpenAI, IBM Cloud, and Azure ML.",
  socials: {
    github: "https://github.com/owaiskhan9654",
    linkedin: "https://www.linkedin.com/in/owaiskhan9654/",
    kaggle: "https://www.kaggle.com/owaiskhan9654",
    topmate: "https://topmate.io/owaiskhan9654",
    linktree: "https://linktr.ee/owaiskhan9654",
  },
};

export const stats: { label: string; value: string }[] = [
  { label: "Years of experience", value: "7+" },
  { label: "Production GenAI/MLOps systems", value: "10+" },
  { label: "LinkedIn followers", value: "20K+" },
  { label: "Open-source repositories", value: "196" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Ministry of Electronics & IT (NeGD)",
    role: "Data Science Manager",
    location: "New Delhi, India",
    period: "Mar 2026 — Present",
    current: true,
    points: [
      "Directing national-scale machine learning initiatives for government data infrastructure and policy optimization.",
      "Establishing enterprise MLOps governance frameworks aligned with ethical AI and security compliance standards.",
    ],
    tags: ["MLOps Governance", "Ethical AI", "National-scale ML"],
  },
  {
    company: "IBM",
    role: "Senior AI Engineer",
    location: "Bangalore, India",
    period: "Oct 2023 — Mar 2026",
    points: [
      "Architected 10+ production-grade GenAI and MLOps systems using IBM watsonx.ai and IBM Cloud.",
      "Engineered Elastic Search hybrid solutions reducing customer resolution time by 25% and cloud costs by 18%.",
      "Built advanced evaluation pipelines for IBM Granite and watsonx Code Assist using telemetry and MCP/ACP protocols.",
    ],
    tags: ["watsonx.ai", "IBM Granite", "RAG", "MCP/ACP", "Elastic Search"],
  },
  {
    company: "Hindustan Unilever (via ThouCentric)",
    role: "Data Scientist Consultant",
    location: "Bangalore, India",
    period: "Jun 2022 — Oct 2023",
    points: [
      "Fine-tuned enterprise LLMs using Azure OpenAI for conversational AI and coding assistant solutions.",
      "Delivered predictive analytics systems increasing field sales visibility by 15% for FMCG clients.",
    ],
    tags: ["Azure OpenAI", "LLM Fine-tuning", "Predictive Analytics"],
  },
  {
    company: "Canary Global Inc.",
    role: "Data Scientist",
    location: "Bangalore, India",
    period: "Aug 2021 — Jun 2022",
    points: [
      "Developed signal-processing pipelines for high-frequency IoT telemetry and predictive anomaly detection.",
    ],
    tags: ["Signal Processing", "IoT Telemetry", "Anomaly Detection"],
  },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & LLM Engineering",
    skills: [
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "Agentic AI",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "LLM Fine-tuning",
      "SFT / RLHF",
      "Function Calling",
      "LLM Evaluation",
      "Vector Databases",
      "Semantic Search",
      "Conversational AI",
    ],
  },
  {
    title: "MLOps & AI Infrastructure",
    skills: [
      "MLflow",
      "Kubernetes",
      "Docker",
      "CI/CD Pipelines",
      "Feature Stores",
      "Model Registry",
      "Model Monitoring",
      "Experiment Tracking",
      "A/B Testing",
      "AI Governance",
      "Scalable Inference",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "NLP",
      "Deep Learning",
      "Computer Vision",
      "Time Series Forecasting",
      "Signal Processing",
      "Statistical Modelling",
      "Clustering",
      "Feature Engineering",
      "Transfer Learning",
      "Anomaly Detection",
    ],
  },
  {
    title: "Cloud & AI Platforms",
    skills: [
      "IBM watsonx.ai",
      "IBM Cloud",
      "Azure OpenAI",
      "Azure ML",
      "Azure Functions",
      "Azure Logic Apps",
      "AWS",
      "IBM Code Engine",
    ],
  },
  {
    title: "Programming & Frameworks",
    skills: [
      "Python",
      "SQL",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "FastAPI",
      "REST APIs",
      "Git",
      "Linux",
      "Elastic Search",
    ],
  },
  {
    title: "Data Engineering & Visualization",
    skills: [
      "Power BI",
      "Data Pipelines",
      "ETL Workflows",
      "Atlan",
      "Telemetry Analytics",
      "Unstructured Data Processing",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  language: string;
  stars?: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Multi-Label Classification of PubMed Articles",
    description:
      "Transfer-learning approach for multi-label biomedical text classification when labeled data is limited. Published via Springer.",
    tags: ["NLP", "Transfer Learning", "BioBERT", "Springer"],
    href: "https://github.com/Owaiskhan9654/Multi-Label-Classification-of-Pubmed-Articles",
    language: "Jupyter Notebook",
    stars: 21,
    featured: true,
  },
  {
    title: "Sony R.I.S.E India Hackathon — 3rd Place",
    description:
      "Award-winning recommender-system solution recognized for scalable statistical modelling and applied AI innovation.",
    tags: ["Recommender Systems", "Statistical Modelling", "Hackathon"],
    href: "https://github.com/Owaiskhan9654/Sony-R.I.S.E-India-Hackathon-3rd-Place-Solution",
    language: "Jupyter Notebook",
    stars: 8,
    featured: true,
  },
  {
    title: "Gene & Primer Sequence Analysis",
    description:
      "Gene and primer sequence analysis toolkit for SARS-CoV-2, EGFR and Influenza DNA sequences.",
    tags: ["Bioinformatics", "Genomics", "Python"],
    href: "https://github.com/Owaiskhan9654/Gene-Sequence-Primer-",
    language: "Jupyter Notebook",
    stars: 12,
    featured: true,
  },
  {
    title: "YOLOv7 Custom Dataset Training",
    description:
      "End-to-end guide and tooling for training YOLOv7 object detection on custom datasets, runnable on Kaggle.",
    tags: ["Computer Vision", "YOLOv7", "Object Detection"],
    href: "https://github.com/Owaiskhan9654/Yolo-V7-Custom-Dataset-Train-on-Kaggle",
    language: "HTML",
    stars: 9,
  },
  {
    title: "BioBERT for PICO Evidence Summarization",
    description:
      "Applying BioBERT to extract and summarize PICO (Population, Intervention, Comparison, Outcome) evidence from clinical text.",
    tags: ["Biomedical NLP", "BioBERT", "Summarization"],
    href: "https://github.com/Owaiskhan9654/Utilizing-BioBERT-for-PICO-Evidence-Summarization",
    language: "Jupyter Notebook",
    stars: 5,
  },
  {
    title: "Statistical Inference & Multivariate Techniques",
    description:
      "Python implementations of core statistical inference and multivariate analysis techniques from graduate coursework.",
    tags: ["Statistics", "Multivariate", "Python"],
    href: "https://github.com/Owaiskhan9654/Statistical-Inference-Multivariate-Techniques-Python-Implementation",
    language: "Jupyter Notebook",
    stars: 5,
  },
];

export type Honor = {
  title: string;
  detail: string;
  year: string;
};

export const honors: Honor[] = [
  {
    title: "TIME100 AI 2025 Honoree",
    detail:
      "Recognized globally for contributions to enterprise AI safety and scalable AI systems.",
    year: "2025",
  },
  {
    title: "Sony R.I.S.E Research India Challenge — 3rd Prize",
    detail:
      "Recognized for scalable statistical modelling and applied AI innovation.",
    year: "2023",
  },
  {
    title: "Kaggle ML Research Spotlight — Special Winner",
    detail:
      "Recognized by Google's Kaggle for a standout machine-learning research contribution.",
    year: "2022",
  },
  {
    title: "Resource Person — DPSRU International Workshop",
    detail:
      "Invited resource person on Text Mining & Knowledge Graph approaches in modern pharmacology (TMKGP-2026), Delhi Pharmaceutical Sciences & Research University.",
    year: "2026",
  },
  {
    title: "Springer Publication",
    detail:
      "Multi-Label Text Classification of PubMed Documents using Deep Learning — M.Tech research at JNU.",
    year: "2021",
  },
  {
    title: "GATE Qualified",
    detail:
      "Graduate Aptitude Test in Engineering — qualified for M.Tech at Jawaharlal Nehru University.",
    year: "2019",
  },
];

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "Jawaharlal Nehru University (JNU)",
    degree: "M.Tech in Statistical Computing (Data Science)",
    location: "New Delhi, India",
    period: "2019 — 2021",
    note: "GATE Qualified · Research: Multi-Label Text Classification of PubMed Documents using Deep Learning (published via Springer).",
  },
  {
    school: "Maulana Azad National Urdu University (MANUU)",
    degree: "B.Tech in Computer Science & Information Technology",
    location: "Hyderabad, India",
    period: "2015 — 2019",
  },
];

export type GalleryItem = {
  src: string;
  caption: string;
  span?: "tall" | "wide";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/book-rag.webp",
    caption: "Unlocking Data with Generative AI & RAG",
    span: "tall",
  },
  {
    src: "/images/ministry-steps.webp",
    caption: "Ministry of Electronics & IT — HQ, New Delhi",
    span: "wide",
  },
  {
    src: "/images/finance.webp",
    caption: "Ministry of Finance · Dept. of Expenditure",
    span: "tall",
  },
  {
    src: "/images/digital-india.webp",
    caption: "Digital India · Power to Empower",
    span: "tall",
  },
  {
    src: "/images/meity-office.webp",
    caption: "MeitY · Office of the Joint Secretary",
    span: "wide",
  },
  {
    src: "/images/nvidia.webp",
    caption: "At NVIDIA",
    span: "wide",
  },
  {
    src: "/images/cga.webp",
    caption: "Controller General of Accounts",
    span: "wide",
  },
  {
    src: "/images/meity.webp",
    caption: "MeitY, Govt. of India",
    span: "tall",
  },
  {
    src: "/images/google.webp",
    caption: "At Google",
    span: "tall",
  },
  {
    src: "/images/google2.webp",
    caption: "Google · Gurugram",
    span: "wide",
  },
  {
    src: "/images/microsoft.webp",
    caption: "At Microsoft",
    span: "wide",
  },
  {
    src: "/images/ibm-gratitude.webp",
    caption: "IBM Impact — Gratitude 2025",
    span: "tall",
  },
  {
    src: "/images/workshop-talk.webp",
    caption: "Speaking at a workshop",
    span: "wide",
  },
  {
    src: "/images/dpsru-lamp.webp",
    caption: "Inaugurating the DPSRU workshop",
    span: "wide",
  },
  {
    src: "/images/aadhaar.webp",
    caption: "UIDAI · Aadhaar HQ",
    span: "tall",
  },
  {
    src: "/images/presenting.webp",
    caption: "Presenting a geospatial ML system",
    span: "wide",
  },
  {
    src: "/images/award-dpsru.webp",
    caption: "Resource Person · DPSRU Intl. Workshop",
    span: "tall",
  },
  {
    src: "/images/redfort.webp",
    caption: "Heritage — Red Fort, Delhi",
    span: "tall",
  },
  {
    src: "/images/mountains.webp",
    caption: "Off the clock — Rishikesh",
    span: "wide",
  },
  {
    src: "/images/path.webp",
    caption: "Finding signal in the noise",
    span: "tall",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  href: string;
};

export const publications: Publication[] = [
  {
    title: "Information Analysis Using Biomedical Text Mining",
    venue: "Springer · with Dr. Aditi Sharan",
    year: "2024",
    href: "https://link.springer.com/chapter/10.1007/978-981-97-3962-2_3",
  },
  {
    title: "Multilabel Text Classification in Biomedical Domain",
    venue: "Springer · with Dr. Aditi Sharan",
    year: "2024",
    href: "https://link.springer.com/chapter/10.1007/978-981-97-3962-2_14",
  },
  {
    title: "BioBERT-Based Model for COVID-Related Named Entity Recognition",
    venue: "Springer · with G. K. Soni & Dr. Aditi Sharan",
    year: "2023",
    href: "https://link.springer.com/chapter/10.1007/978-981-99-5085-0_32",
  },
  {
    title:
      "Hybridizing Sentence Transformer Model with Multi-KNN for Biomedical Documents",
    venue: "Springer · with Dr. Aditi Sharan & S. Sood",
    year: "2022",
    href: "https://link.springer.com/chapter/10.1007/978-981-16-6460-1_11",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Gallery", href: "#gallery" },
  { label: "Honors", href: "#honors" },
  { label: "Contact", href: "#contact" },
];
