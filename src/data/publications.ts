export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  topics: string[];
  doi?: string;
  pdf?: string;
  resources?: { label: string; url: string }[];
  image?: { src: string; alt: string };
};

// Published works transcribed from CV_Overleaf/publications.tex (September 2026).
// See that folder's publication_checks.md for the source and verification limits.
// In-press and under-review manuscripts are held back pending a current status check.
export const publications: Publication[] = [
  {
    title: 'Visualizing sex differences in school aged youth on the ADOS-2 using a latent space item response model',
    authors: 'Tien, I., Luo, J., Huang, Y., & Jeon, M.',
    venue: 'Research in Autism, 136, 202948',
    year: 2026,
    topics: ['Psychometrics'],
    doi: '10.1016/j.reia.2026.202948',
    image: { src: '/images/publications/ados-latent-space.jpg', alt: 'Conceptual illustration of assessment cards beside a teal and amber point map' },
  },
  {
    title: "Tailoring educational support with graph neural networks and explainable AI: Insights into online learners' metacognitive abilities",
    authors: 'Wang, H., Chen, P., Luo, J., & Yang, Y.',
    venue: 'Computers & Education, 240, 105452',
    year: 2026,
    topics: ['AI in education'],
    doi: '10.1016/j.compedu.2025.105452',
    image: { src: '/images/publications/metacognitive-ai.jpg', alt: 'Conceptual illustration of a learning notebook and abstract neural network' },
  },
  {
    title: 'The power of social talk: A longitudinal network analysis of conversations in fostering interdisciplinary collaboration',
    authors: 'Huang, Y., Luo, J., Shetty, V., & Jeon, M.',
    venue: 'Journal of Clinical and Translational Science, 9(1), e194',
    year: 2025,
    topics: ['Collaboration networks'],
    doi: '10.1017/cts.2025.10124',
    pdf: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/A1B2BFE844618D1AFFE69E6A99FBEBF3/S2059866125101246a.pdf/the-power-of-social-talk-a-longitudinal-network-analysis-of-conversations-in-fostering-interdisciplinary-collaboration.pdf',
    image: { src: '/images/publications/social-talk.jpg', alt: 'Conceptual illustration of a collaborative research meeting table' },
  },
  {
    title: "Mapping the mHealth nexus: A semantic analysis of mHealth scholars' research propensities following an interdisciplinary training institute",
    authors: 'Ren, J., Luo, J., Huang, Y., Shetty, V., & Jeon, M.',
    venue: 'Applied Sciences, 15(11), 6252',
    year: 2025,
    topics: ['Collaboration networks'],
    doi: '10.3390/app15116252',
    pdf: 'https://mdpi-res.com/d_attachment/applsci/applsci-15-06252/article_deploy/applsci-15-06252-v2.pdf?version=1749114439',
    image: { src: '/images/publications/mhealth-nexus.jpg', alt: 'Conceptual illustration of a phone and connected health research topics' },
  },
  {
    title: 'A response time-based mixture item response theory model for dynamic item-response strategies',
    authors: 'Huang, S., Luo, J., & Jeon, M.',
    venue: 'Behavior Research Methods, 57(1), 54',
    year: 2025,
    topics: ['Psychometrics'],
    doi: '10.3758/s13428-024-02555-5',
    image: { src: '/images/publications/response-time-mixture.jpg', alt: 'Conceptual illustration of a stopwatch and response cards' },
  },
  {
    title: "Understanding STEM teachers' power distance values from a sociocultural perspective on interdisciplinary collaboration",
    authors: 'Yang, Y., Luo, J., Seah, W. T., & van Driel, J.',
    venue: 'Science & Education, 34(4), 2499–2524',
    year: 2025,
    topics: ['Teaching and learning'],
    doi: '10.1007/s11191-024-00565-5',
    image: { src: '/images/publications/stem-collaboration.jpg', alt: 'Conceptual illustration of shared STEM teaching materials' },
  },
  {
    title: "Chinese university students' growth in critical thinking: Accounting for school transition and selection effects",
    authors: 'Luo, J., Jeon, M., & Shen, H.',
    venue: 'Chinese/English Journal of Educational Measurement and Evaluation, 5(1)',
    year: 2024,
    topics: ['Educational measurement'],
    doi: '10.59863/JCUB3602',
    image: { src: '/images/publications/critical-thinking.jpg', alt: 'Conceptual illustration of university study and an ascending sequence of ideas' },
  },
  {
    title: 'From surface to deep learning approaches with generative AI in higher education: An analytical framework of student agency',
    authors: 'Yang, Y., Luo, J., Yang, M., Yang, R., & Chen, J.',
    venue: 'Studies in Higher Education, 49(5), 817–830',
    year: 2024,
    topics: ['AI in education'],
    doi: '10.1080/03075079.2024.2327003',
    image: { src: '/images/publications/generative-ai-agency.jpg', alt: 'Conceptual illustration of a student writing beside a laptop' },
  },
  {
    title: 'Cultivating AI literacy skills: How GenAI tools prepare students in humanities and social sciences to write with ethical and critical insight',
    authors: 'Yang, Y., Yang, M., & Luo, J.',
    venue: 'In Effective Practices in AI Literacy Education, pp. 111–118 (book chapter)',
    year: 2024,
    topics: ['AI in education'],
    doi: '10.1108/978-1-83608-852-320241012',
    image: { src: '/images/publications/ai-literacy.jpg', alt: 'Conceptual illustration of ethical writing beside a tablet' },
  },
  {
    title: 'From data to story: Leveraging LLM-powered chatbots for learning business data analytics and visualisation in Mathematica',
    authors: 'Du, F., Luo, J., & Wang, S. X.',
    venue: 'In Effective Practices in AI Literacy Education, pp. 101–109 (book chapter)',
    year: 2024,
    topics: ['AI in education'],
    doi: '10.1108/978-1-83608-852-320241011',
    image: { src: '/images/publications/data-to-story.jpg', alt: 'Conceptual illustration of a laptop showing abstract data visuals' },
  },
  {
    title: 'Bayesian estimation of latent space item response models with JAGS, Stan, and NIMBLE in R',
    authors: 'Luo, J., De Carolis, L., Zeng, B., & Jeon, M.',
    venue: 'Psych, 5(2), 396–415',
    year: 2023,
    topics: ['Psychometrics'],
    doi: '10.3390/psych5020027',
    pdf: 'https://mdpi-res.com/d_attachment/psych/psych-05-00027/article_deploy/psych-05-00027.pdf',
    image: { src: '/images/publications/bayesian-lsirm.jpg', alt: 'Conceptual illustration of a three-dimensional point map and probability contours' },
  },
  {
    title: 'An explanatory multidimensional random item effects rating scale model',
    authors: 'Huang, S., Luo, J., & Cai, L.',
    venue: 'Educational and Psychological Measurement, 83(6), 1229–1248',
    year: 2023,
    topics: ['Psychometrics'],
    doi: '10.1177/00131644221140906',
    pdf: 'https://escholarship.org/content/qt9r7122hv/qt9r7122hv.pdf',
    image: { src: '/images/publications/rating-scale-model.jpg', alt: 'Conceptual illustration of layered rating scales and geometric planes' },
  },
  {
    title: 'Relationships between changing communication networks and changing perceptions of psychological safety in a team science setting: Analysis with actor-oriented social network models',
    authors: 'Luo, J., Jeon, M., Lee, M., Ho, E., Pfammatter, A. F., Shetty, V., & Spring, B.',
    venue: 'PLOS ONE, 17(8), e0273899',
    year: 2022,
    topics: ['Collaboration networks'],
    doi: '10.1371/journal.pone.0273899',
    pdf: 'https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0273899&type=printable',
    image: { src: '/images/publications/psychological-safety-networks.jpg', alt: 'Conceptual illustration of connections across a team meeting table' },
  },
  {
    title: 'Fostering interdisciplinary collaboration: A longitudinal social network analysis of the NIH mHealth Training Institutes',
    authors: 'Ho, E., Jeon, M., Lee, M., Luo, J., Pfammatter, A. F., Shetty, V., & Spring, B.',
    venue: 'Journal of Clinical and Translational Science, 5(1), e191',
    year: 2021,
    topics: ['Collaboration networks'],
    doi: '10.1017/cts.2021.859',
    pdf: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7F5DFDB03531155D366A9855589E0979/S2059866121008591a.pdf/div-class-title-fostering-interdisciplinary-collaboration-a-longitudinal-social-network-analysis-of-the-nih-mhealth-training-institutes-div.pdf',
    image: { src: '/images/publications/mhealth-collaboration.jpg', alt: 'Conceptual illustration of mHealth collaboration networks over time' },
  },
  {
    title: 'Modeling within-item dependencies in parallel data on test responses and brain activation',
    authors: 'Jeon, M., De Boeck, P., Luo, J., Li, X., & Lu, Z.-L.',
    venue: 'Psychometrika, 86(1), 239–271',
    year: 2021,
    topics: ['Psychometrics'],
    doi: '10.1007/s11336-020-09741-2',
    image: { src: '/images/publications/test-brain-activation.jpg', alt: 'Conceptual illustration of parallel test responses and brain-related data' },
  },
  {
    title: 'Higher education and investment in knowledge: A perspective from talent policies in mainland China',
    authors: 'Shen, H., & Luo, J.',
    venue: 'In Universities in the Knowledge Society, pp. 83–102 (book chapter)',
    year: 2021,
    topics: ['Higher education'],
    doi: '10.1007/978-3-030-76579-8_6',
    image: { src: '/images/publications/higher-ed-knowledge.jpg', alt: 'Conceptual illustration of a university setting and knowledge-policy documents' },
  },
];
