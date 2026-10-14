/**
 * Single source of truth for all school content.
 * Edit this file to update text, fees, events, news and contact details —
 * every page reads from here, so the whole site updates at once.
 *
 * Images: set `image: "/images/your-file.jpg"` (file placed in /public/images)
 * on any item. Where no image is set, a built-in illustration is shown.
 */

export type Scene =
  | "campus" | "library" | "sports" | "arts" | "music" | "science"
  | "yoga" | "assembly" | "garden" | "classroom" | "theatre" | "computer";

/**
 * School photographs in /public/images. All are 1140 × 350 panoramas, so
 * they suit wide banners best; in tall or square frames they are cropped
 * around the centre. Swap in higher-resolution originals with the same
 * names to sharpen the full-width heroes.
 */
export const photos = {
  building: "/images/campus-main-building.jpg",
  sportsField: "/images/sports-field.jpg",
  yogaHall: "/images/yoga-hall-children.jpg",
  founders: "/images/the-mother-and-sri-aurobindo.jpg",
  blessings: "/images/the-mothers-blessings.jpg",
};

export const school = {
  name: "The Mother's International School",
  shortName: "MIS",
  tagline: "Integral education since 1956",
  motto: "More True, Forever More True",
  founded: 1956,
  foundationDay: "23 April",
  board: "CBSE",
  affiliationNo: "2730021",
  affiliatedSince: 1986,
  society: "Sri Aurobindo Education Society",
  address: {
    line1: "Sri Aurobindo Marg",
    line2: "New Delhi – 110016",
    mapsQuery: "The Mother's International School, Sri Aurobindo Marg, New Delhi",
  },
  phones: ["011-26964140", "+91-8076598364"],
  emails: {
    office: "themis.office@themis.in",
    admissions: "erp@themis.in",
    grievance: "contact@themis.in",
  },
  grievancePhone: "8178435550",
  hours: {
    preSchool: "8:30 AM – 12:25 PM",
    school: "8:00 AM – 2:00 PM",
    office: "Monday – Friday, 8:00 AM – 2:00 PM",
  },
  links: {
    parentPortal: "https://misms.net.in",
    admissionsPortal: "https://misms.net.in/admissions/adm_form/admission_form.cfm",
    alumni: "https://themis.in",
    facebook: "https://www.facebook.com/The-Mothers-International-School-76998339612/",
  },
  mission:
    "To help a child to realise his own unique potential in the light of Sri Aurobindo and The Mother's vision of integral education — the flowering of the child's physical, emotional, mental and spiritual personality, and a preparation for life-long learning.",
};

export const leadership = [
  { name: "Shri Pranjal Jauhar", role: "Chairman" },
  { name: "Smt. Milan Mala Sarin", role: "Principal" },
  { name: "Shri Aswin Kumar Dash", role: "Vice Principal" },
  { name: "Ms. Neethu Somarajan", role: "Headmistress" },
  { name: "Shri Anil Kumar Jain", role: "Manager" },
];

export const stats = [
  { value: 70, suffix: "", label: "Years of integral education" },
  { value: 9.28, suffix: " acres", label: "Green campus in South Delhi", decimals: 2 },
  { value: 2371, suffix: "", label: "Students, Balvatika to Class XII" },
  { value: 45000, suffix: "+", label: "Books across two libraries" },
];

export const announcements = [
  "Autumn break: 17 – 19 October 2026. School reopens Tuesday, 20 October.",
  "Nursery / Balvatika-1 admissions 2027-28 will follow the Directorate of Education schedule — watch this space.",
  "CBSE Mandatory Public Disclosure for 2026-27 is now available under About › Disclosures.",
  "Inter-house Commerce and Mathematics quizzes on 14 & 15 October 2026.",
];

export const heroSlides: { title: string; text: string; scene: Scene; image?: string; cta: { label: string; href: string } }[] = [
  {
    title: "Where every child grows whole",
    text: "Seventy years of integral education — body, heart, mind and spirit — on a 9-acre green campus in the heart of South Delhi.",
    scene: "campus",
    image: photos.building,
    cta: { label: "Discover MIS", href: "/about" },
  },
  {
    title: "Learning beyond the classroom",
    text: "Music, theatre, pottery, languages, yoga and sport sit alongside a rigorous CBSE curriculum from Balvatika to Class XII.",
    scene: "arts",
    image: photos.sportsField,
    cta: { label: "Explore academics", href: "/academics" },
  },
  {
    title: "Admissions 2027-28",
    text: "A transparent, points-based admission process for Balvatika-1, Pre-Primary and Class I, as laid down by the Directorate of Education, Delhi.",
    scene: "assembly",
    image: photos.yogaHall,
    cta: { label: "Admission guide", href: "/admissions" },
  },
];

export const pillars = [
  { title: "Physical", text: "Daily PE, gymnastics, yoga and the much-loved Annual Physical Demonstration build strength, poise and discipline.", icon: "run" },
  { title: "Vital & Emotional", text: "Art, music, dance and theatre help children understand and refine their feelings and express them with beauty.", icon: "heart" },
  { title: "Mental", text: "A thoughtful CBSE curriculum, debating forums and student publications cultivate clear, curious, independent minds.", icon: "book" },
  { title: "Psychic & Spiritual", text: "Rooted in the vision of Sri Aurobindo and The Mother, children are encouraged to discover their own inner truth.", icon: "sun" },
];

export const stages: { id: string; name: string; classes: string; scene: Scene; image?: string; summary: string; points: string[] }[] = [
  {
    id: "early",
    name: "Early Years",
    classes: "Balvatika-1 & Pre-Primary",
    scene: "garden",
    image: photos.yogaHall,
    summary: "A gentle, joyful start. Children learn through play, stories, songs, clay and the outdoors, in Montessori and activity rooms designed for small hands.",
    points: ["Montessori & activity rooms", "Children's park & garden time", "Pottery, art and craft", "Hours: 8:30 AM – 12:25 PM"],
  },
  {
    id: "primary",
    name: "Primary",
    classes: "Classes I – V",
    scene: "classroom",
    summary: "In Classes I–II one teacher and an assistant guide the class through every subject. Subject teachers begin in Class III, and Computer Science is introduced.",
    points: ["English, Hindi, Mathematics, EVS", "Computer Science from Class III", "Drawing, clay modelling, music, dance, dramatics", "Public speaking, gymnastics, PT and yoga"],
  },
  {
    id: "middle",
    name: "Middle School",
    classes: "Classes VI – VIII",
    scene: "music",
    summary: "Students add a third language and choose an instrument or art form, building depth alongside a broad academic core.",
    points: ["Sanskrit or French as third language", "Science, Social Science, Computer Science", "Tabla, sitar, flute, violin, guitar, vocal music", "Hobby clubs, work experience, yoga"],
  },
  {
    id: "secondary",
    name: "Secondary",
    classes: "Classes IX – X",
    scene: "science",
    summary: "Preparation for the CBSE Class X examination, with art education and SEWA — Social Empowerment through Work Education and Action.",
    points: ["CBSE core subjects", "Hindi, Sanskrit or French", "SEWA community programme", "Health & physical education"],
  },
  {
    id: "senior",
    name: "Senior Secondary",
    classes: "Classes XI – XII",
    scene: "library",
    image: photos.building,
    summary: "Flexible subject combinations across Science, Commerce and Liberal Arts, supported by forums, publications and guidance.",
    points: ["Science, Commerce & Liberal Arts", "Skill subjects: IT, Financial Markets Mgmt.", "The Lyceum Forum & The MIS Gazette", "General Studies, Yoga, Health & PE"],
  },
];

export const subjectGroups = [
  { group: "Group A", options: ["Accountancy", "Biology", "Computer Science", "Economics", "Political Science", "Geography"] },
  { group: "Group B", options: ["Mathematics", "Information Technology (skill)", "Psychology", "Legal Studies"] },
  { group: "Group C", options: ["Chemistry", "Business Studies", "History", "Psychology", "Financial Markets Mgmt. (skill)"] },
  { group: "Group D", options: ["Physics", "Economics", "Sociology", "Painting"] },
];

export const admission = {
  session: "2027-28",
  ageCutoffDate: "2027-03-31",
  ageRules: [
    { level: "Balvatika-1 (Nursery)", min: 3, max: 4 },
    { level: "Pre-Primary (KG)", min: 4, max: 5 },
    { level: "Class I", min: 5, max: 6 },
  ],
  criteria: [
    { id: "neighbourhood", label: "Neighbourhood", max: 40, note: "Points by the school's published list of localities: 40 / 30 / 25 / 10 / 0." },
    { id: "sibling", label: "Sibling", max: 30, note: "Real brother or sister currently studying at MIS on a general seat." },
    { id: "alumni", label: "Alumni parent", max: 20, note: "20 if a parent passed both X and XII from MIS, 10 if either. Parent must be a life member of Mother's Blossoms." },
    { id: "girl", label: "Girl child", max: 10, note: "10 points for a girl child." },
  ],
  neighbourhoodBands: [
    { label: "Band 1 locality", points: 40 },
    { label: "Band 2 locality", points: 30 },
    { label: "Band 3 locality", points: 25 },
    { label: "Band 4 locality", points: 10 },
    { label: "Outside listed localities", points: 0 },
  ],
  seats: [
    { level: "Balvatika-1", total: 120, open: 60, ews: 30, management: 24, staff: 6 },
    { level: "Pre-Primary", total: 20, open: 10 },
    { level: "Class I", total: 25, open: 13 },
  ],
  steps: [
    { title: "Register online", text: "Fill the form on the school's admissions portal and pay the Rs 25 registration fee online." },
    { title: "Upload documents", text: "Birth certificate, residence proof, and photographs of the child and both parents." },
    { title: "Points are published", text: "Every applicant's points are published on the website, as the Directorate of Education requires." },
    { title: "Lists & admission", text: "First and second lists are released on DoE dates. Shortlisted families complete document checks and fee payment." },
  ],
  documents: [
    "Birth certificate of the child",
    "Proof of residence",
    "Recent photographs of the child, mother and father",
    "Sibling's fee receipt (if claiming sibling points)",
    "Parent's Class X / XII pass certificate and Mother's Blossoms membership no. (if claiming alumni points)",
    "Medical certificate with blood group (at the time of admission)",
  ],
  classXI: {
    eligibility: "Minimum 80% in the Class X pre-board examination",
    test: "Offline test on the Class X CBSE syllabus followed by an interaction",
    streams: [
      { name: "Liberal Arts", papers: "English, Social Science" },
      { name: "Science", papers: "English, Mathematics, Physics, Chemistry (+ Biology if opted)" },
      { name: "Commerce", papers: "English, Mathematics, Social Science" },
    ],
  },
};

export const fees = {
  session: "2026-27",
  levels: [
    { id: "pre-school", label: "Pre-School (Balvatika-1)", tuition: 15700, computer: 0, hobby: 0 },
    { id: "pre-primary", label: "Pre-Primary", tuition: 12800, computer: 0, hobby: 0 },
    { id: "i-ii", label: "Classes I – II", tuition: 9900, computer: 0, hobby: 0 },
    { id: "iii", label: "Class III", tuition: 9900, computer: 650, hobby: 0 },
    { id: "iv-v", label: "Classes IV – V", tuition: 9900, computer: 650, hobby: 550 },
    { id: "vi-viii", label: "Classes VI – VIII", tuition: 9900, computer: 650, hobby: 650 },
    { id: "ix-x", label: "Classes IX – X", tuition: 9900, computer: 650, hobby: 0 },
    { id: "xi-xii", label: "Classes XI – XII", tuition: 9900, computer: 0, hobby: 0 },
  ],
  annualCharges: 24000,
  transport: [
    { label: "No school transport", monthly: 0 },
    { label: "Route band A", monthly: 3000 },
    { label: "Route band B", monthly: 3500 },
  ],
};

export const facilities: { title: string; text: string; scene: Scene; image?: string; stat?: string }[] = [
  { title: "Open green campus", text: "9.28 acres shared with the Sri Aurobindo Ashram, with trees, lawns and quiet corners rare in the city.", scene: "campus", image: photos.building, stat: "9.28 acres" },
  { title: "Libraries", text: "A 5,264 sq ft senior library and a dedicated junior library, with around 45,000 books, magazines and dailies.", scene: "library", stat: "45,000 books" },
  { title: "Sports & playfields", text: "A 400 m track, basketball, volleyball and badminton courts, table tennis, cricket nets and a football field.", scene: "sports", image: photos.sportsField, stat: "22,189 m² playground" },
  { title: "Science & computer labs", text: "Physics, chemistry, biology, biotechnology and computer labs for hands-on enquiry.", scene: "science" },
  { title: "Music & dance rooms", text: "Dedicated rooms for vocal and instrumental music — tabla, sitar, flute, violin and guitar — and dance.", scene: "music" },
  { title: "Art, pottery & batik", text: "Studios for drawing, painting, clay modelling, pottery and batik, from the junior wing upward.", scene: "arts" },
  { title: "Yoga halls & gymnasium", text: "Spaces for yoga, gymnastics and indoor games, central to the school's physical education.", scene: "yoga", image: photos.yogaHall },
  { title: "Computer education", text: "Computer Science from Class III, with labs in both the junior and senior wings.", scene: "computer" },
];

export const traditions = [
  { title: "Foundation Day & Talent Fiesta", date: "23 April", text: "The school's birthday, celebrated with a festival of student talent." },
  { title: "Annual Physical Demonstration", date: "Every year", text: "A signature MIS tradition showcasing gymnastics, drills and movement by hundreds of students." },
  { title: "Sri Aurobindo's Birthday", date: "15 August", text: "Observed together with India's Independence Day." },
  { title: "Mahasamadhi Day", date: "5 December", text: "A day of quiet reflection with a satsang at the Ashram." },
];

export const clubs = [
  { name: "The Lyceum Forum", text: "Humanities forum for Classes XI–XII; publishes The MIS Gazette." },
  { name: "Environment Club", text: "Runs green campaigns and publishes the e-magazine Prakriti." },
  { name: "MINET Computer Club", text: "Student technologists who help with the school's digital work." },
  { name: "Debate & Oratory", text: "Inter-house English and Hindi debates, oral interpretation and soliloquies." },
  { name: "Theatre", text: "Plays and dramatics from primary school onwards." },
  { name: "Quiz Club", text: "Subject, geography-map and general knowledge quizzes." },
  { name: "Music & Dance", text: "Indian and Western instruments, vocal music and dance ensembles." },
  { name: "Nature & Art", text: "Painting, pottery, batik and nature study." },
];

export const familyValues = [
  { title: "A green, open campus", text: "Families repeatedly mention the trees and open spaces — rare in a crowded city." },
  { title: "Values over show", text: "Parents value a school that puts character and simplicity ahead of frills." },
  { title: "Caring teachers", text: "Supportive teachers who know their students are a common theme in parent feedback." },
  { title: "Fair admissions", text: "A transparent points system, with every applicant's score published." },
];

export type EventItem = {
  id: string;
  title: string;
  start: string; // ISO date
  end?: string;
  category: "Academic" | "Celebration" | "Holiday" | "Admissions";
  location?: string;
  text: string;
};

export const events: EventItem[] = [
  { id: "e1", title: "Foundation Day & Talent Fiesta", start: "2026-04-23", category: "Celebration", location: "School campus", text: "MIS marks 70 years since its founding on 23 April 1956." },
  { id: "e2", title: "Summer vacation", start: "2026-05-11", end: "2026-06-30", category: "Holiday", text: "School closed for students." },
  { id: "e3", title: "Sri Aurobindo's Birthday & Independence Day", start: "2026-08-15", category: "Celebration", location: "School campus", text: "Special assembly and celebrations." },
  { id: "e4", title: "Inter-house Commerce Quiz", start: "2026-10-14", category: "Academic", location: "Senior wing", text: "Inter-house quiz for Commerce students." },
  { id: "e5", title: "Inter-house Mathematics Quiz", start: "2026-10-15", category: "Academic", location: "Senior wing", text: "Inter-house quiz in Mathematics." },
  { id: "e6", title: "Autumn break", start: "2026-10-17", end: "2026-10-19", category: "Holiday", text: "School closed. Classes resume on 20 October." },
  { id: "e7", title: "Mahasamadhi Day", start: "2026-12-05", category: "Celebration", location: "Sri Aurobindo Ashram", text: "Observance and satsang at the Ashram." },
  { id: "e8", title: "Winter break", start: "2027-01-01", end: "2027-01-15", category: "Holiday", text: "School closed for students." },
  { id: "e9", title: "Session 2026-27 ends", start: "2027-03-31", category: "Academic", text: "Last day of the academic session." },
];

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  category: "Notice" | "Admissions" | "Campus Life" | "Achievements";
  excerpt: string;
  scene: Scene;
  image?: string;
  body: string[];
};

export const news: NewsPost[] = [
  {
    slug: "autumn-break-2026",
    title: "Autumn break: 17 to 19 October 2026",
    date: "2026-10-12",
    category: "Notice",
    excerpt: "School will remain closed for the autumn break. Classes resume on Tuesday, 20 October 2026.",
    scene: "garden",
    body: [
      "As per the academic calendar for 2026-27, the school will remain closed for students from Saturday, 17 October to Monday, 19 October 2026.",
      "Regular classes resume on Tuesday, 20 October 2026, at the usual timings.",
      "Parents are requested to check the parent portal for any class-specific notices.",
    ],
  },
  {
    slug: "inter-house-quizzes-october-2026",
    title: "Inter-house Commerce and Mathematics quizzes this week",
    date: "2026-10-14",
    category: "Campus Life",
    excerpt: "Houses go head to head in the Commerce quiz on 14 October and the Mathematics quiz on 15 October.",
    scene: "classroom",
    body: [
      "The senior wing hosts two inter-house quizzes this week: Commerce on 14 October and Mathematics on 15 October 2026.",
      "Inter-house competitions are a long-standing part of school life at MIS, alongside debates, dramatics, poetry festivals and geography-map quizzes.",
      "Results will be shared in the house assembly.",
    ],
  },
  {
    slug: "seventy-years-of-mis",
    title: "Seventy years of The Mother's International School",
    date: "2026-04-23",
    category: "Campus Life",
    excerpt: "On 23 April 2026 the school completed seventy years since its founding in 1956.",
    scene: "assembly",
    image: photos.founders,
    body: [
      "The Mother's International School was founded on 23 April 1956 by Shri Surendra Nath Jauhar, with the blessings of The Mother.",
      "Foundation Day is celebrated every year with the Talent Fiesta, a festival of student performance and creativity.",
      "Seventy years on, the school continues its work of integral education — the growth of the whole child, physically, emotionally, mentally and spiritually.",
    ],
  },
  {
    slug: "mandatory-disclosure-2026-27",
    title: "CBSE Mandatory Public Disclosure 2026-27 published",
    date: "2026-04-01",
    category: "Notice",
    excerpt: "The school's Mandatory Public Disclosure for the 2026-27 session, as required by CBSE, is now available.",
    scene: "library",
    body: [
      "In line with CBSE affiliation bye-laws, the school has published its Mandatory Public Disclosure for 2026-27.",
      "The disclosure covers affiliation details, fee structure, staff, infrastructure and safety certificates.",
      "Parents can find it under About › Disclosures.",
    ],
  },
  {
    slug: "class-xi-admissions-2026-27",
    title: "Class XI admissions 2026-27: process completed",
    date: "2026-03-13",
    category: "Admissions",
    excerpt: "The admission test and interaction for Class XI were held on 13 March 2026 for applicants with 80% or more in their pre-boards.",
    scene: "science",
    body: [
      "Online registration for Class XI ran from 17 February to 11 March 2026.",
      "Applicants with at least 80% in their Class X pre-board examination took an offline test on the Class X CBSE syllabus on 13 March, followed by an interaction.",
      "Admissions remain provisional until CBSE Class X results are declared.",
    ],
  },
  {
    slug: "nursery-admissions-2027-28",
    title: "Balvatika-1 admissions 2027-28: what to expect",
    date: "2026-10-01",
    category: "Admissions",
    excerpt: "Entry-level admissions follow the Directorate of Education schedule and a 100-point system. Here is how to prepare.",
    scene: "garden",
    image: photos.yogaHall,
    body: [
      "Admissions to Balvatika-1, Pre-Primary and Class I for 2027-28 will follow the schedule announced by the Directorate of Education, Delhi.",
      "Points are awarded for neighbourhood (up to 40), sibling (30), alumni parent (up to 20) and girl child (10). Every applicant's points are published.",
      "Families can use the points and age calculators on our Admissions page to prepare in advance.",
    ],
  },
];

export const gallery: { title: string; category: "Campus" | "Arts" | "Sports" | "Celebrations" | "Learning"; scene: Scene; image?: string }[] = [
  { title: "The main building from the lawn", category: "Campus", scene: "campus", image: photos.building },
  { title: "Senior library", category: "Learning", scene: "library" },
  { title: "Football practice on the main field", category: "Sports", scene: "sports", image: photos.sportsField },
  { title: "Pottery studio", category: "Arts", scene: "arts" },
  { title: "Music room", category: "Arts", scene: "music" },
  { title: "Annual Physical Demonstration", category: "Celebrations", scene: "assembly" },
  { title: "Chemistry lab", category: "Learning", scene: "science" },
  { title: "Relaxation in the yoga hall", category: "Sports", scene: "yoga", image: photos.yogaHall },
  { title: "Junior wing garden", category: "Campus", scene: "garden" },
  { title: "Annual play", category: "Celebrations", scene: "theatre" },
  { title: "Computer lab", category: "Learning", scene: "computer" },
  { title: "Primary classroom", category: "Learning", scene: "classroom" },
];

export const faqs = [
  { q: "Which board is the school affiliated to?", a: "The school is affiliated to the Central Board of Secondary Education (CBSE), affiliation no. 2730021." },
  { q: "Does the school have a hostel?", a: "No. MIS is a day school only." },
  { q: "Does the school run its own buses?", a: "Transport is provided on contracted buses. Monthly transport charges for 2026-27 are Rs 3,000 or Rs 3,500 depending on the route." },
  { q: "What is the medium of instruction?", a: "English. Hindi is taught throughout, and Sanskrit or French is offered as a third language from Class VI." },
  { q: "Are admissions open in other classes?", a: "Admissions are mainly at Balvatika-1, Pre-Primary, Class I and Class XI. Seats in other classes are rarely available and are announced if vacancies arise." },
  { q: "What are the school timings?", a: "Pre-School and Pre-Primary: 8:30 AM – 12:25 PM. Classes I – XII: 8:00 AM – 2:00 PM." },
];

export const nav = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Integral Education", href: "/about#philosophy" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Disclosures", href: "/about#disclosures" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Learning Stages", href: "/academics#stages" },
      { label: "Senior Secondary Subjects", href: "/academics#subjects" },
      { label: "Academic Calendar", href: "/news#events" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions#process" },
      { label: "Points Calculator", href: "/admissions#calculator" },
      { label: "Class XI Admission", href: "/admissions#class-xi" },
      { label: "Fee Structure", href: "/fees" },
    ],
  },
  { label: "Campus", href: "/campus" },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      { label: "Clubs & Forums", href: "/student-life#clubs" },
      { label: "Traditions", href: "/student-life#traditions" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];
