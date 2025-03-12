export const projects = [
  {
    name: 'ARIA-HR',
    type: 'video',
    imageURL: '../../../assets/pfe24-25.jpg',
    link: 'https://www.youtube.com/watch?v=2WxdCNii6Zw',
    themeColor: '#DD0031',
    description:
      "<p>Aria-HR is an AI-powered web application designed to streamline the hiring process by conducting automated interviews with applicants.</p><strong><p>How It Works:</p></strong><ol><li><strong>Job Offer Creation:</strong> Administrators create job offers within the platform.</li><li><strong>CV Upload & Analysis:</strong> Candidates upload their CVs, which are processed using various AWS services—<span class='highlight'>S3</span> for storage, <span class='highlight'>Textract</span> for text extraction, and <span class='highlight'>Comprehend</span> for AI-driven analysis.</li><li><strong>Automated Interview:</strong> After analyzing the CV, the system sends an interview link via email. The AI-driven HR assistant then conducts the interview, tailoring its questions based on the job description and the candidate's resume.</li><li><strong>Interview Review & Decision:</strong> Once the interview is completed, administrators can review the interview transcript, analyze responses, and decide whether to accept or reject the candidate.</li></ol>",
    technologies: 'Angular, Spring Boot, AWS, JPA, Hybernate, PostgreSQL',
  },
  {
    name: 'Pfe24-25',
    type: 'image',
    imageURL: '../../../assets/pfe24-25.jpg',
    link: 'https://pfe24-25.github.io',
    themeColor: '#DD0031',
    description:
      'PFE24-25 was a platform designed to help students easily find their end-of-studies internships. Unlike traditional methods of storing internship opportunities in a shared drive, PFE24-25 provided a more advanced and efficient search system, allowing users to filter opportunities by field and company name. Its user-friendly interface quickly attracted over 1,000 active users, making the internship search process much easier for students.',
    technologies: 'HTML, CSS, JavaScript',
  },
  {
    name: 'Coming soon',
  },
];
