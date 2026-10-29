// All page content lives here, so the components stay generic.
//
// Links: the pasted text had no URLs, so every "Read →" / "Watch →" below has an
// empty href and is hidden on the page until you fill it in. Search this file for
// `read()` / `watch()` and put the real address inside the brackets, e.g. read('https://...').
//
import portrait from './img/Kemi head shot 2.PNG'
import teachingAi from './img/Teaching pic 1.png'
import teachingClass from './img/Teaching pic 2.png'
import teachingOtherNews from './img/Teaching pic 3.jpeg'
import conferencePresentation from './img/Teaching pic 4.jpg'
import conferencePanel from './img/Teaching pic 5.jpg'
import conferenceAward from './img/Teaching pic 6.jpg'

const read = (href = '') => ({ label: 'Read →', href })
const watch = (href = '') => ({ label: 'Watch →', href })

export const profile = {
  name: ['Kemi', 'Busari'], // second word gets the yellow highlight
  role: 'Researcher · Teacher · Journalist',
  interests: [
    'Journalism and newsroom processes/practices',
    'Journalism education and professionalization',
    'Information disorder and fact-checking',
    'Investigative journalism',
    'AI in journalism',
    'African media',
  ],
  bylines: 'The Economist UK · Premium Times, Nigeria · IJNet, US · AAAS, US · Dubawa, Nigeria · IWPR, UK',
  emails: ['kbusari@umd.edu', 'kemibus@gmail.com'],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kemi-busari-a51336a2/' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=mJBTEq0AAAAJ&hl=en&oi=ao',
    },
  ],
  portrait: { src: portrait, alt: 'Portrait of Kemi Busari' },
  updated: 'October 2026',
}

export const stats = [
  { value: '5,000+', label: 'fact-checks edited' },
  { value: '200+', label: 'training sessions' },
  { value: '5,000+', label: 'journalists trained' },
  { value: '30+', label: 'awards in journalism scholarship and practice' },
  { value: '40', label: 'citations' },
]

export const sections = [
  // ───────────────────────── EDUCATION ─────────────────────────
  {
    id: 'education',
    nav: 'Education',
    title: 'Education',
    groups: [
      {
        title: 'Education',
        items: [
          {
            year: '2023–2027',
            title: 'Ph.D. Candidate (ABD), Journalism Studies',
            lines: [
              'Philip Merrill College of Journalism, University of Maryland, College Park, USA',
              'Dissertation: Shaping the Journalist: The Role of Journalism Education in Hiring, Identity, and Professional Experience of Nigerian Journalists',
              'Chair: Prof. Sarah Oates',
            ],
          },
          {
            year: '2019–2020',
            title: 'M.Sc., Communication Studies',
            lines: ['Free University of Brussels, Belgium · Graduated with Distinction'],
          },
          {
            year: '2009–2014',
            title: 'B.Sc., Political Science',
            lines: ['Obafemi Awolowo University, Ile-Ife, Nigeria · Graduated with Honors'],
          },
        ],
      },
    ],
  },

  // ───────────────────────── SCHOLARSHIP ─────────────────────────
  {
    id: 'publications',
    nav: 'Scholarship',
    title: 'Scholarship',
    groups: [
      {
        title: 'Research Publications',
        items: [
          {
            year: '2026',
            title: 'Beyond the degree: Entry criteria and the influence of journalism education in Nigerian news organizations’ hiring practices',
            lines: ['Journalism, 1–22'],
            link: read(),
          },
          {
            year: '2026',
            title: 'The use and meaning of “professionalism” in Nigerian journalism discourse',
            lines: ['News Research Journal, 1–22'],
            link: read(),
          },
          {
            year: '2026',
            title: '“7,221 refrigerated human penises”: Examining Nigerian media’s failure to verify a sensational, “credible” satirical story',
            lines: ['Journal of Media Ethics, 1–14'],
            link: read(),
          },
        ],
      },
      {
        title: 'Academic Awards, Fellowships and Scholarships',
        items: [
          { year: '2026', title: 'First Place Student Paper Award (Scholastic Journalism Division)', tag: 'WIN', lines: ['Association for Education in Journalism and Mass Communication (AEJMC)'] },
          { year: '2026', title: 'Kappa Tau Alpha Research Award', tag: 'WIN', lines: ['National Honor Society in Journalism and Mass Communication'] },
          { year: '2026', title: 'Goldhaber Travel Grant', lines: ['University of Maryland Graduate School'] },
          { year: '2025', title: 'Summer Research Grant and Fellowship', tag: 'WIN', lines: ['University of Maryland Graduate School'] },
          { year: '2025', title: 'First Place Student Paper Award (Scholastic Journalism Division)', tag: 'WIN', lines: ['AEJMC'] },
          { year: '2025', title: 'Kappa Tau Alpha Research Award', tag: 'WIN', lines: ['National Honor Society in Journalism and Mass Communication'] },
          { year: '2025', title: 'Top Referred Research Paper', lines: ['Internships and Careers Interest Group, AEJMC'] },
          { year: '2024', title: 'Research Grant', lines: ['Centre for Journalism Innovation and Development'] },
          { year: '2023', title: 'Awardee, Press Freedom Scholarship', lines: ['First Look Institute'] },
          { year: '2018', title: 'Media Scholarship', lines: ['Free Press Unlimited'] },
        ],
      },
      {
        title: 'Key Citations',
        items: [
          {
            year: 'Cited 8×',
            title: 'Analysis: How Nigerian lawmakers share N100 billion zonal intervention fund annually',
            lines: ['Premium Times, June 2018'],
          },
          {
            year: 'Cited 6×',
            title: 'Confirmed: Nigerian senators receive N13.5 million in monthly allowances, in addition to salaries',
            lines: ['Premium Times, July 2018'],
          },
          {
            year: 'Cited 3×',
            title: 'Investigation: At Nigeria’s abandoned nuclear centre, failed projects, idle staff and “fraud” [Part 2]',
            lines: ['Premium Times, September 2018'],
          },
          {
            year: 'Cited 3×',
            title: 'Shocking: Buhari’s administration recalls wanted ex-pension boss sacked for alleged corruption',
            lines: ['Abdulaziz, A., & Busari, K. · Premium Times, August 2017'],
          },
        ],
        note: 'Investigative reports and research cited 40 times in academic and policy literature.',
        noteLink: {
          label: 'Full list on Google Scholar →',
          href: 'https://scholar.google.com/citations?user=mJBTEq0AAAAJ&hl=en&oi=ao',
        },
      },
      {
        title: 'Conference Presentations',
        kind: 'table',
        columns: ['Date', 'Paper', 'Venue'],
        rows: [
          ['2026, Aug', 'Where is the gap? Comparative analysis of journalism education ideals, industry expectations, and university curricula in Nigeria', 'AEJMC Annual Conference, New Orleans, LA'],
          ['2025, Aug', 'Beyond the degree: Examining hiring criteria and the role of journalism education in the recruitment of journalists in Nigerian newsrooms', 'AEJMC Annual Conference, San Francisco, CA'],
          ['2025, Aug', 'The paradox of journalism degree: Exploring the motivations and job perceptions of journalists without formal journalism education', 'AEJMC Annual Conference, San Francisco, CA'],
          ['2025, Jun', 'Mediated public diplomacy in Africa: The (dis)connection between journalistic rhetoric and practice (Success, O., & Busari, K.)', 'ICA Annual Conference (75th), Denver, CO'],
          ['2025, Mar', 'How do journalists remember themselves? Dominant themes in articles commemorating assassinated Nigerian journalist Dele Giwa', 'Joint Journalism and Communication History Conference, Maryland'],
          ['2025, Mar', '“7,221 refrigerated human penises”: Examining Nigerian media’s failure to verify a sensational, “credible” satirical story', 'AEJMC Midwinter Conference, Oklahoma'],
          ['2025, Mar', 'The paradox of journalism degree: Exploring the motivations and job perceptions of journalists without formal journalism education', 'AEJMC Midwinter Conference, Oklahoma'],
          ['2024, Aug', 'Anniversary journalism in action: Comparative analysis of Russo-Ukrainian war coverage across global newspapers (Sessa, M., Aljohani, R., Busari, K., Krovvidi, D., Ding, L., & Albaqami, N.)', 'AEJMC Annual Conference, Philadelphia, PA'],
          ['2024, Mar', 'Delving into the demarcation of professional boundaries and factors influencing career entry in Nigerian journalism', 'AEJMC Midwinter Conference, Oklahoma'],
        ],
        figures: [
          {
            src: conferencePresentation,
            alt: 'Kemi Busari presenting at a podium beside a slide titled "Where is the gap?"',
            caption: 'Presenting “Where is the gap?” at the AEJMC Annual Conference, New Orleans, 2026',
          },
          {
            src: conferenceAward,
            alt: 'Kemi Busari holding an award certificate beside the award presenter',
            caption: 'Receiving the Student Research Paper Award, Scholastic Journalism Division, AEJMC',
          },
          {
            src: conferencePanel,
            alt: 'Kemi Busari standing with six fellow panelists at a conference',
            caption: 'Conference panel session with fellow presenters',
          },
        ],
      },
      {
        title: 'Media Coverage – Scholarship',
        kind: 'media',
        items: [
          { outlet: 'The Cable', headline: 'INTERVIEW: Why I’m studying experiences of journalists without formal journalism education, by Kemi Busari', link: read() },
          { outlet: 'Daily Trust', headline: 'Study finds majority of journalists in selected Nigerian newsrooms did not study journalism', link: read() },
          { outlet: 'Premium Times', headline: 'New study reveals how Nigeria’s former minister spread falsehoods, misled lawmakers', link: read() },
          { outlet: 'Merrill College, UMD', headline: 'AEJMC 2026 Roundup: Merrill College Ph.D. Students, Faculty Present and Honored for Their Research', link: read() },
          { outlet: 'Merrill College, UMD', headline: 'Merrill Ph.D. Students, Faculty, Alums Honored and Present Research at 2025 AEJMC National Conference', link: read() },
          { outlet: 'Punch', headline: 'Researcher seeks merit-based newsroom recruitment', link: read() },
        ],
      },
    ],
  },

  // ───────────────────────── TEACHING ─────────────────────────
  {
    id: 'teaching',
    nav: 'Teaching',
    title: 'Teaching',
    groups: [
      {
        title: 'Teaching Experience',
        items: [
          {
            year: 'Aug 2024 – present',
            title: 'Co-Instructor, College Park Media, Self and Society',
            lines: ['University of Maryland, College Park, MD · Average of 70 students per semester'],
          },
          {
            year: 'Aug 2023 – May 2024',
            title: 'Graduate Teaching Assistant',
            lines: [
              'Philip Merrill College of Journalism, University of Maryland · Instructor: Prof. Dana Priest, Knight Chair in Public Affairs Journalism and Pulitzer Prize–winning reporter, The Washington Post',
              'Courses supported (undergraduate and master’s students):',
            ],
            list: [
              'Investigative Reporting: Research and Methods (JOUR 459), Fall 2023',
              'Local News Investigation (JOUR 389L), Spring 2024',
              'Censorship and Disinformation in the 21st Century: The Global War for Political Power (JOUR 459P), Spring 2024',
            ],
          },
          {
            year: 'Jun 2022 – Jan 2023',
            title: 'Course Director, Investigative Journalism in the Natural Resources Sector',
            lines: ['United Nations Africa Institute for Development and Planning (UN-IDEP)'],
          },
        ],
        figures: [
          {
            src: teachingAi,
            alt: 'Kemi Busari teaching a lecture hall with slides on how AI generates content',
            caption: 'Teaching how AI generates content, Media, Self and Society',
          },
          {
            src: teachingOtherNews,
            alt: 'Kemi Busari at the front of a classroom beside slides of examples of the other news',
            caption: 'Teaching “The Other News” module, Media, Self and Society',
          },
          {
            src: teachingClass,
            alt: 'Kemi Busari talking with students at their desks during a class activity',
            caption: 'Class activity, Media, Self and Society',
          },
        ],
      },
      {
        title: 'Selected Training and Workshops Delivered',
        items: [
          { year: 'May 2026', title: 'Measuring What Matters: Impact Storytelling for Journalists', lines: ['Facilitator · Open Source Investigation (OSINT) Fellowship, CJID · Trained 20 journalists on strategies to drive impact for their stories'] },
          { year: 'Mar 2026', title: 'Platform Accountability Fellowship', lines: ['Facilitator and mentor · CJID · Trained 18 journalists on reporting issues around platform accountability; mentored nine of them to produce investigative reports'] },
          { year: 'Nov 2025', title: 'The Art of Feature Writing', lines: ['Trainer · Budeshi Media Grant, Public and Private Development Centre (PPDC) · Trained 8 Nigerian journalists on advanced feature writing'] },
          { year: 'Dec 2024', title: 'Networking and Dialogue on Misinformation and Disinformation', lines: ['Consultant Facilitator · European Union (EU) / Centre for Media and Society (CEMESO) · Trained 42 journalists on the information disorder ecosystem, fact-checking, and writing'] },
          { year: 'Apr 2024', title: 'Impact Storytelling (Case Study: Baba Aisha Investigation)', lines: ['Trainer · Social Accountability Fellowship, CJID · Trained 30 journalists on designing, executing, and communicating investigative work for measurable public impact'] },
          { year: 'Sep 2023', title: 'Media and Information Literacy: How to Spot Misinformation and Disinformation', lines: ['Facilitator · Electoral College · Trained over 100 journalists and civil society actors on spotting false information related to elections'] },
          { year: 'May 2023', title: 'Introduction to Fact-checking Tools', lines: ['Consultant Facilitator · EU / CEMESO · Trained 26 journalists on major digital tools used for fact-checking'] },
          { year: 'May 2022', title: 'Investigative and data journalism training, Open Contract Reporting (OCR) project', lines: ['Facilitator · International Centre for Investigative Reporting (ICIR) · Trained journalists in Nigeria’s southern region on news writing, media ethics, and freedom of information (FOI) laws'] },
          { year: '2022', title: 'Media and Information Literacy (MIL) as a Response to Information Disorder', lines: ['Trainer · Kwame Karikari Fact-Checking Fellowship · Delivered a session for 30 fellows'] },
          { year: 'May 2021', title: 'Use of Freedom of Information Law by Journalists', lines: ['Trainer · Kwame Karikari Fact-Checking Fellowship · Trained 26 fellows'] },
          { year: 'Sep 2018', title: 'Reinforcing Nigeria’s Commitment to the Implementation of the African Charter on Democracy, Elections and Governance (ACDEG): Media as a Catalyst', lines: ['Facilitator · ActionAid Nigeria'] },
        ],
        note: '200+ journalism training sessions delivered to over 5,000 professional and student journalists.',
      },
    ],
  },

  // ───────────────────────── PROFESSIONAL JOURNALISM PRACTICE ─────────────────────────
  {
    id: 'experience',
    nav: 'Professional Journalism Practice',
    title: 'Professional Journalism Practice',
    groups: [
      {
        title: 'Professional Journalism Work Experience',
        items: [
          { year: 'Jun – Jul 2024', title: 'Contributor', lines: ['The Economist, London, UK'] },
          { year: 'Sep 2023 – present', title: 'Editor-at-Large', lines: ['Centre for Journalism Innovation and Development (CJID)'] },
          { year: 'Sep 2020 – Aug 2023', title: 'Editor, DUBAWA', lines: ['Centre for Journalism Innovation and Development (CJID)'] },
          { year: 'Sep 2017 – Sep 2020', title: 'Senior Reporter', lines: ['Premium Times, Nigeria'] },
          { year: 'Apr 2016 – Aug 2017', title: 'Content Curator / Reporter', lines: ['Nigerian Bulletin, Nigeria'] },
          { year: 'Nov 2015 – Apr 2016', title: 'News Reporter and Co-Producer', lines: ['Map Media Limited, Nigeria (Lagos Daily News; CSNews on Radio)'] },
          { year: '2011 – 2015', title: 'Early journalism experience', lines: ['The Nation CampusLife, Sun Campus Square, Tribune CampusBeats, Vanguard CampusLife, Guardian Youth Magazine'] },
        ],
      },
      {
        title: 'Selected Publications (Professional Journalism)',
        items: [
          { year: 'Jun 2026', title: 'Nigeria’s best journalists are leaving – and remuneration is not the only problem', lines: ['Premium Times Nigeria'], link: read() },
          { year: 'Jun 2024', title: 'In Nigeria, evidence-based reporting drives change', lines: ['AAAS Kavli Science Journalism Awards'], link: read() },
          { year: '—', title: 'Fact-checking science-related claims in Nigeria', lines: ['AAAS Kavli Science Journalism Awards'], link: read() },
          { year: 'Jun 2023', title: 'Investigation: Baba Aisha, Nigeria’s fake ‘doctor’ cashing out on deadly concoction that cures nothing', lines: ['Premium Times'], link: read() },
          { year: 'Sep 2021', title: 'Nigeria: Anti-vaccination champion takes jab', lines: ['Institute for War and Peace Reporting (IWPR)'], link: read() },
          { year: 'Jan 2021', title: 'Blood on Uniforms [Text series and video documentary]', lines: ['Premium Times'], link: read() },
          { year: '2018', title: 'Analysis: How Saraki is commanding loyalty, maintaining vice-hold grip on Senate', lines: ['Premium Times'], link: read() },
          { year: '2018', title: 'Investigation: Appalling, risky state of Nigeria’s multi-billion naira nuclear technology centre (Part 1)', lines: ['Premium Times'], link: read() },
          { year: 'Aug 2017', title: 'Investigation: Corruption, extortion reign at Nigeria Immigration passport office (Part 1 and 2)', lines: ['Premium Times'], link: read() },
        ],
      },
      {
        title: 'Awards and Recognitions (Professional Journalism)',
        items: [
          { year: '2026', title: 'First Place, Newspapers International News Beat Coverage, 92nd National Headliner Awards', tag: 'WIN', lines: ['Team award, as a fact-checker for the Center for Collaborative Investigative Journalism (CCIJ)'] },
          { year: '2025', title: 'Nominee, Fetisov Journalism Award' },
          { year: '2024', title: 'Michael Elliott Award for Excellence in African Storytelling', tag: 'WIN', lines: ['ICFJ'] },
          { year: '2024', title: 'Story of the Year', tag: 'WIN', lines: ['Premium Times'] },
          { year: '2023', title: 'Most Impactful Fact-check', tag: 'WIN', lines: ['International Fact-Checking Network (IFCN) Global Fact Awards'] },
          { year: '2023', title: 'Silver Prize, Science Reporting – In-Depth', tag: 'WIN', lines: ['American Association for the Advancement of Science (AAAS) Kavli'] },
          { year: '2023', title: 'Wole Soyinka Award for Investigative Reporting (Online category)', tag: 'WIN' },
          { year: '2023', title: 'Diamond Award for Media Excellence (DAME), Investigative Reporting', tag: 'WIN' },
          { year: '2023', title: 'Runner-up, Best Fact-check', lines: ['Africa Check Awards'] },
          { year: '2023', title: 'Runner-up, Active Citizens Awards', lines: ['BudgIT'] },
          { year: '2021', title: 'Nominee, Fetisov Journalism Award' },
          { year: '2020', title: 'Runner-up, West Africa Media Excellence Award, Business category' },
          { year: '2019', title: 'Honorable Mention, One World Media Award (New Voice category)' },
          { year: '2018', title: 'Nominee, The Future Awards Africa (Journalism category)' },
          { year: '2018', title: 'Runner-up, Wole Soyinka Award for Investigative Reporting (Online category)' },
          { year: '2018', title: 'Runner-up, West Africa Media Excellence Award, Anti-corruption category' },
          { year: '2018', title: 'Free Press Awards, Newcomer of the Year', tag: 'WIN' },
          { year: '2018', title: 'PwC Excellence in Media Award (Business and Economy category)', tag: 'WIN' },
          { year: '2018', title: 'Nominee, Thomson Foundation Young Journalist of the Year' },
          { year: '2017', title: 'Runner-up, Wole Soyinka Award for Investigative Reporting (Online category)' },
          { year: '2017', title: 'Nigerian Writers Awards, Feature Writer of the Year', tag: 'WIN' },
          { year: '2016', title: 'Promasidor Quill Awards, Online Reporter of the Year', tag: 'WIN' },
          { year: '2015', title: 'NYSC State Honors Award (2014 Batch C)', lines: ['For service as News Editor, Kaduna State'] },
          { year: '2013', title: 'The Nation CAMPUSLIFE Entertainment Reporter of the Year', tag: 'WIN' },
        ],
      },
      {
        title: 'Notable Editorial Consultancies',
        items: [
          { year: '2025 – present', title: 'Fact-checker', lines: ['Center for Collaborative Investigative Journalism'] },
          { year: '2022–2023', title: 'Course Director, “Investigative Journalism in the Natural Resources Sector”', lines: ['Funded by the United Nations Economic Commission for Africa'] },
          { year: '2024', title: 'Audience Engagement Mentor, Health Innovation Journalism Fellowship', lines: ['International Center for Journalists (ICFJ)'] },
          { year: '2024–2025', title: 'Mentor and Editor, Fortifying Community Project', lines: ['Witness'] },
          { year: '2024', title: 'Editor and Mentor, fact-checking project', lines: ['International Centre for Investigative Reporting (ICIR)'] },
          { year: '2020', title: 'Facilitator and Mentor, Natural Resources Masterclass and Reporting', lines: ['Ford Foundation / CJID'] },
          { year: '2021', title: 'Facilitator, Editor and Mentor, Oil and Gas Fellowship', lines: ['Natural Resources Governance Institute / CJID'] },
          { year: 'Jul 2018', title: 'Facilitator, Editor and Mentor, Journalists’ Training on Implementation of the African Charter on Democracy, Elections and Governance', lines: ['ActionAid'] },
          { year: '2019', title: 'Editor and Mentor, transparency and accountability in criminal justice and anti-corruption sector project', lines: ['PTCIJ / ROLAC'] },
          { year: '2020–2021', title: 'Mentor and Editor, Humanitarian and Crisis Reporting; Climate Change Fellowship; Oil and Gas Fellowship', lines: ['PTCIJ / Free Press; PTCIJ / NAREP'] },
          { year: '2020–2025', title: 'Editor and Mentor, Kwame Karikari Fact-checking and OSINT Fellowship', lines: ['DUBAWA'] },
        ],
      },
      {
        title: 'Media Coverage – Professional Practice',
        kind: 'media',
        items: [
          { outlet: 'ICFJ', headline: 'ICFJ Elliott Award: Kemi Busari Uses Fact-Checking to Drive Real Change in Africa', link: read() },
          { outlet: 'IJNet', headline: 'How Dubawa is preparing to fact-check Nigeria’s presidential election', link: read() },
          { outlet: 'Poynter', headline: 'Fact-checkers from Nigeria, Indonesia and Brazil win GlobalFact 10 awards', link: read() },
          { outlet: 'Nieman Reports', headline: 'Fact-Checking in Africa: Combating disinformation amid political strife and ethnic conflict', link: read() },
          { outlet: 'Reuters', headline: 'Nigeria’s social media fact-checkers fight fake news as vote nears', link: read() },
        ],
      },
      {
        title: 'Selected Award-Winning Reports Edited By Me',
        items: [
          {
            year: 'Nov 2024',
            title: 'How Telegram, TikTok aided Russian disinformation that led to incarceration of Nigerian minors',
            lines: ['Premium Times / Dubawa · Guided story ideation, reporting and editing · Michael Elliott Award for Excellence in African Storytelling'],
            link: read(),
          },
          {
            year: 'Nov 2023',
            title: 'Investigation: Odalo, Nigeria’s Twitter swindler faking “heart disease” to scam women',
            lines: ['Premium Times / Dubawa · Oversaw editorial development, editing and distribution · Runner-up, Professional Fact-Check category, 2024 African Fact-Checking Awards'],
            link: read(),
          },
          {
            year: 'Aug 2019',
            title: 'Special report: Case congestion in Lagos courts hinder access to justice',
            lines: ['Premium Times · Consultant Editor · Human Rights Reporting category, 2020 West Africa Media Excellence Conference and Awards (WAMECA)'],
            link: read(),
          },
        ],
      },
      {
        title: 'Professional Mentoring',
        items: [
          { year: '2021 – present', title: 'Annual Kwame Karikari Fact-Checking Fellowship', lines: ['Mentor and Editor · DUBAWA · Mentored 180 journalists, cumulatively'] },
          { year: '2022', title: 'CIJ West Africa Climate Change Project', lines: ['Mentor and Editor · Centre for Investigative Journalism, London · Mentored nine journalists to produce nine investigative stories'] },
          { year: '2021', title: 'NAREP Oil and Gas Fellowship', lines: ['Mentor and Editor · CJID · Mentored eight journalists'] },
          { year: '2023', title: 'ICIR Fact-checking Project', lines: ['Mentor and Editor · ICIR · Mentored five journalists through a three-month fellowship'] },
          { year: '2018', title: 'Reporting on the African Charter on Democracy, Elections and Governance (ACDEG)', lines: ['Mentor · ActionAid Nigeria · Mentored six journalists to produce 53 stories'] },
          { year: '2019', title: 'Rule of Law and Anti-Corruption Program', lines: ['Mentor · European Union / Premium Times Centre for Investigative Journalism (PTCIJ) · Mentored 65 journalists across Nigeria'] },
        ],
      },
    ],
  },

  // ───────────────────────── SERVICE ─────────────────────────
  {
    id: 'service',
    nav: 'Service',
    title: 'Service',
    groups: [
      {
        title: 'Advisory and Judging Roles',
        items: [
          { year: '2026 – present', title: 'Member, Africa Facts Advisory Committee' },
          { year: '2025', title: 'Member, Judges’ Panel', lines: ['IFCN Highest Impact Fact-check Award'] },
          { year: '2024, 2025', title: 'Award Committee Chair', lines: ['CJID Excellence in Journalism Award'] },
          { year: '2025', title: 'Judge, Budeshi Media Grant', lines: ['Public and Private Development Centre (PPDC)'] },
          { year: '2024 – present', title: 'Member, Advisory Board', lines: ['The Liberalist Africa'] },
        ],
      },
      {
        title: 'Peer Review and Academic Service',
        items: [
          { year: '2025 – present', title: 'Manuscript Reviewer', lines: ['Journal of Media Practice and Education (Taylor & Francis)'] },
          { year: '2026', title: 'Conference Reviewer', lines: ['109th AEJMC Conference, New Orleans, LA'] },
          { year: '2026', title: 'Conference Reviewer', lines: ['112th Annual Convention, National Communication Association (NCA), New Orleans, LA'] },
          { year: '2026', title: 'Conference Reviewer', lines: ['International Association for Media and Communication Research (IAMCR), Ireland'] },
          { year: '2026', title: 'Conference Reviewer', lines: ['76th Annual International Communication Association (ICA) Conference, South Africa'] },
          { year: '2023–2024', title: 'Member, Task Force on Antisemitism and Islamophobia', lines: ['University of Maryland'] },
          { year: '2023', title: 'Book Reviewer', lines: ['Witness’ Community Verification Handbook'] },
        ],
      },
    ],
  },

  // ───────────────────────── THOUGHT LEADERSHIP ─────────────────────────
  {
    id: 'thought',
    nav: 'Thought Leadership',
    title: 'Thought Leadership',
    groups: [
      {
        title: 'Thought Leadership',
        items: [
          { year: '—', title: 'The “all-rounder” journalist and four other reflections from my placement with The Economist', lines: ['IJNet'], link: read() },
          { year: 'May 2025', title: 'Eight questions to answer before attempting the “who is a journalist” in Nigeria question', lines: ['The Cable'], link: read() },
          { year: 'Aug 2020', title: 'Engaging the Legal Limitations To Press Freedom, By Kemi Busari', lines: ['Premium Times Opinion'], link: read() },
          { year: '—', title: 'Nigeria’s Newsrooms Face Talent Drain as Journalism Industry Struggles', lines: ['YouTube (video)'], link: watch() },
        ],
      },
    ],
  },
]
