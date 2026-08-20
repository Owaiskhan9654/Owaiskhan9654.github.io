export const profile = {
  name: "Owais Ahmad",
  role: "AI & Data Science Manager",
  tagline:
    "Building enterprise-scale Generative AI, LLM & MLOps systems that ship to production.",
  location: "New Delhi, India",
  email: "owaiskhan9654@gmail.com",
  phone: "+91-9515884381",
  resume: "/Owais_Ahmad_Delhi_7_YOE_resume.pdf",
  summary:
    "AI & Data Science Manager with 7+ years of experience building enterprise-scale Generative AI, Machine Learning, and MLOps systems across government and enterprise domains. I specialize in production-grade LLM systems, Agentic AI workflows, RAG pipelines, model evaluation, and cloud-native AI infrastructure using IBM watsonx.ai, Azure OpenAI, IBM Cloud, and Azure ML.",
  socials: {
    github: "https://github.com/owaiskhan9654",
    linkedin: "https://www.linkedin.com/in/owaiskhan9654/",
    kaggle: "https://www.kaggle.com/owaiskhan9654",
    linktree: "https://linktr.ee/owaiskhan9654",
  },
};

export const stats: { label: string; value: string }[] = [
  { label: "Years of experience", value: "7+" },
  { label: "Production GenAI/MLOps systems", value: "10+" },
  { label: "Open-source repositories", value: "196" },
  { label: "TIME100 AI Honoree", value: "2025" },
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
    src: "/images/meity.jpg",
    caption: "Ministry of Electronics & IT, Govt. of India",
    span: "tall",
  },
  {
    src: "/images/google.jpg",
    caption: "At Google",
    span: "tall",
  },
  {
    src: "/images/aadhaar.jpg",
    caption: "UIDAI · Aadhaar HQ",
    span: "tall",
  },
  {
    src: "/images/mountains.jpg",
    caption: "Off the clock — Rishikesh",
    span: "wide",
  },
  {
    src: "/images/path.jpg",
    caption: "Finding signal in the noise",
    span: "tall",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Honors", href: "#honors" },
  { label: "Contact", href: "#contact" },
];
