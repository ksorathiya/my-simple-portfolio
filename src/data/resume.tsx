import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kartik Sorathiya",
  initials: "KS",
  url: "https://kartiksorathiya.com",
  location: "📍 Toronto, Canada 🇨🇦.",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I understand your wants, build your needs, and deliver your requirements.😊",
  designation:
    "An architect of innovative and intuitive solutions, helping bring your vision to life at <a target='_blank' className='text-blue-900 dark:text-blue-500' href='https://solvative.com'>Solvative.</a>",
  summary:
    "Hi, I'm **<Highlight>Kartik Sorathiya</Highlight>** — a **Director of Technology** with over **8 years of experience** in building and leading technology solutions for businesses across diverse industries.<br/>I specialize in **e-commerce platforms**, **system integrations**, and **digital transformations**, bringing a blend of **technical expertise**, **strategic planning**, and **team leadership** to every project. From architecting scalable backend systems to mentoring high-performing teams, I thrive on turning complex challenges into seamless solutions.<br/>Beyond technology, I’m passionate about **mentoring talent**, **exploring new tech trends**, and **creating impactful digital experiences**. When I’m not immersed in tech, you’ll find me **cooking**, **spending time with family**, or catching up on **world affairs**.<br/>---<br/>### 💻 **Let’s build something extraordinary together!** ✨  <br/> **Get in touch, and let’s talk tech!** 🚀",
  avatarUrl: "/me.png",
  skills: {
    "Backend Development": [
      "Node.js",
      "Express.js",
      "Sails.js",
      "Ruby on Rails",
      "Python",
    ],
    "Frontend Development": [
      "React.js",
      "Next.js",
      "Angular.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
    ],
    "Database Management": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "InfluxDB",
      "Redis",
      "RabbitMQ",
    ],
    "Cloud DevOps": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Apache",
      "Ansible",
      "Teleport",
      "Jenkins",
    ],
    "Testing / Debugging": [
      "Mocha.js",
      "Chai.js",
      "Test Driven Development (TDD)",
    ],
    "SaaS Product Development": [
      "SaaS Architecture",
      "Microservices",
      "API Design & Integration",
      "Scalability & Performance Optimization",
      "Multi-Tenancy Solutions",
      "User Authentication & Authorization",
      "Subscription Management",
      "Payment Gateway Integration",
      "Customer Feedback Systems",
      "Data Security & Compliance",
    ],
    "Industrial IoT": [
      "IoT Architecture",
      "Sensor Integration",
      "MODBUS Protocol",
      "Edge Computing",
      "Real-time Data Processing",
      "InfluxDB for Time-Series Data",
      "Device Management & Monitoring",
      "MQTT Protocol",
      "Data Visualization for IIoT",
      "Predictive Maintenance Systems",
      "Industrial Automation",
      "SCADA Systems",
    ],
    "Project Management Collaboration": [
      "Agile",
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Mentoring",
      "Team Building",
      "Cross-functional Team Leadership",
    ],
    "Solution Architecture": [
      "System Architecture",
      "API Integration",
      "Cloud Infrastructure",
      "Automation",
      "Technical Documentation",
    ],
    "Business Development": [
      "Client Relations",
      "Stakeholder Management",
      "Requirement Gathering",
      "Salesforce Commerce Cloud",
      "Business Strategy",
      "Strategic Partnerships",
      "Market Analysis",
      "Sales & Marketing Alignment",
      "Lead Generation",
      "Networking",
      "Product Demos & POCs",
      "Customer Relationship Management (CRM)",
      "Negotiation & Deal Closing",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ksorathiya",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kartiksorathiya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/KartikSorathiy4",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@kartiksorathiya3321",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Solvative",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Practice Director - Digital Commerce Engineering",
      logoUrl: "/solvative.png",
      start: "Oct 2016",
      end: "present",
      description:
        "<br/>My journey at **Solvative** began in 2016 when I joined what was then a digital solutions startup called **Quark Studios**. As the **third hire and first full stack developer**, I quickly found myself working on **end-to-end project implementation**, taking on responsibilities beyond development—such as **project management**, **requirement gathering**, and **agile sprint planning and execution**. <br/><br/> I’ve had the opportunity to work on a diverse range of projects across industries, including **digital commerce, healthcare, logistics, Industrial IoT, SaaS, and education**. <br/><br/> Over the years, I’ve mastered multiple tech stacks, adapting to the demands of each project—whether it required **Node.js**, **React.js**, or **AWS**—and solving complex problems head-on, regardless of the technology involved. As I transitioned into leadership roles, I became responsible for **building and scaling teams**, establishing **standard operating procedures** and **processes** that ensured both efficiency and quality across the board. <br/><br/> My focus has always been on **managing stakeholder expectations** and delivering high-quality solutions that exceed client expectations. I approach every challenge with a mindset of **'problem-solving, up-right-and-center,'** whether the issue is technical or non-technical. <br/><br/> Throughout my journey, I played a key role in **building the digital commerce division from scratch**, which now contributes significantly to Solvative’s growth. Over the years, I’ve worn **many hats** at Solvative, often simultaneously, from **developer** to **team leader** and **problem-solver**. <br/><br/> Currently, I’m focused on **building and scaling a team dedicated to digital commerce implementations**, continuing to drive success across **multiple industries** and **tech stacks**.",
    },
    {
      company: "Seneca Polytechnic Hackathons",
      badges: [],
      href: "https://senecahackathon.com/",
      location: "Toronto",
      title: "Director of IT",
      logoUrl: "/seneca.png",
      start: "Jan 2021",
      end: "present",
      description:
        "As the **Director of IT** for Seneca College’s annual hackathons, I lead a team of college students who handle the event’s technical operations. I recruit, train, and manage students as they build and implement all the necessary tools, including the **website**, **video streams**, **registration systems**, **digital marketing**, and **communication platforms**. <br/><br/>My role involves ensuring the smooth execution of all technical aspects, allowing the hackathons to run seamlessly. By empowering students to take on these responsibilities, I help them develop practical skills while ensuring that the hackathon meets high standards of execution and innovation.",
    },
  ],
  education: [
    {
      school: "Seneca Polytechnic",
      href: "https://senecapolytechnic.com",
      degree: "Project Management in IT Certification",
      logoUrl: "/seneca.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "L.D. College of Engineering",
      href: "https://ldce.ac.in/",
      degree:
        "Bachelor's Degree of Engineering in Information Tech (BE - I.T.)",
      logoUrl: "/ld.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
  skillsections: [
    {
      title: "Web Development",
      heading: "Modern and Headless CMS",
      description:
        "Transforming digital landscapes with CMS web solutions tailored to your unique business objectives. Whether you're a global corporation or an individual thought leader, our precision-engineered designs guarantee a premium online experience, positioning you ahead of the curve in today's digital era.",
      ctaButtons: [
        {
          head: "EXPLORE",
          text: "Our Web Projects",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "/logos/html5.svg",
          alt: "HTML 5",
        },
        {
          src: "/logos/css3.svg",
          alt: "CSS 3",
        },
        {
          src: "/logos/bootstrap.svg",
          alt: "Bootstrap",
        },
        {
          src: "/logos/sass.svg",
          alt: "Sass",
        },
        {
          src: "https://www.svgrepo.com/show/374118/tailwind.svg",
          alt: "Tailwind",
        },
        {
          src: "/logos/javascript.svg",
          alt: "JavaScript",
        },
        {
          src: "/logos/reactjs.svg",
          alt: "ReactJS",
        },
        {
          src: "/logos/nodejs-icon-svgrepo-com.svg",
          alt: "Node.js",
        },
        {
          src: "/logos/angular.svg",
          alt: "Angular",
        },
        {
          src: "/logos/nextjs.svg",
          alt: "NextJS",
        },
        {
          src: "https://www.svgrepo.com/show/355032/gatsbyjs.svg",
          alt: "GatsbyJS",
        },
        {
          src: "/logos/vuejs.svg",
          alt: "Vue.js",
        },
        {
          src: "/logos/php.svg",
          alt: "PHP",
        },
        {
          src: "/logos/wordpress.svg",
          alt: "Wordpress",
        },
        {
          src: "/logos/python.svg",
          alt: "Python",
        },
        {
          src: "https://www.svgrepo.com/show/303670/firebase-1-logo.svg",
          alt: "Firebase",
        },
        {
          src: "/logos/mongodb-svgrepo-com.svg",
          alt: "MongoDB",
        },
        {
          src: "https://www.svgrepo.com/show/439233/mysql.svg",
          alt: "MySQL",
        },
        {
          src: "/logos/postgres.svg",
          alt: "Postgres",
        },
        {
          src: "https://www.svgrepo.com/show/354272/redis.svg",
          alt: "Redis",
        },
      ],
      image: "/assets/web-dev-image.png",
    },
    {
      title: "Modern Commerce",
      heading: "E-Commerce.",
      description:
        "Empowering businesses with user-centric e-commerce platforms. Seamlessly guiding customers from product discovery to secure checkout.",
      ctaButtons: [
        {
          head: "DISCOVER",
          text: "E-comm Solutions",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "https://www.svgrepo.com/show/354306/salesforce.svg",
          alt: "Salesforce Commerce Cloud",
        },
        {
          src: "https://www.svgrepo.com/show/330049/bigcommerce.svg",
          alt: "Big Commerce Cloud",
        },
        {
          src: "https://www.svgrepo.com/show/331585/squarespace.svg",
          alt: "Squarespace Commerce",
        },
        {
          src: "https://www.svgrepo.com/show/331649/wix.svg",
          alt: "Wix",
        },
        {
          src: "https://www.svgrepo.com/show/354569/woocommerce-icon.svg",
          alt: "WooCommerce",
        },
        {
          src: "https://www.svgrepo.com/show/331472/magento.svg",
          alt: "Magento",
        },
        {
          src: "https://www.svgrepo.com/show/354341/shopify.svg",
          alt: "Shopify",
        },
        {
          src: "https://www.svgrepo.com/show/452142/adobe.svg",
          alt: "Adobe Commerce",
        },
        {
          src: "https://www.svgrepo.com/show/303275/apple-pay-payment-mark-logo.svg",
          alt: "Apple Pay",
        },
        {
          src: "https://www.svgrepo.com/show/452222/google-pay.svg",
          alt: "Google Pay",
        },
        {
          src: "https://www.svgrepo.com/show/508697/klarna.svg",
          alt: "Klarna Pay",
        },
      ],
      image: "/assets/e-comm-image.png",
    },
    {
      title: "Mobile",
      heading: "Mobile Applications",
      description:
        "Creating intuitive mobile applications for both iOS and Android. Prioritizing performance, user engagement, and unparalleled functionality.",
      ctaButtons: [
        {
          head: "BROWSE",
          text: "Mobile Portfolio",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "https://www.svgrepo.com/show/473666/ios.svg",
          alt: "iOS",
        },
        {
          src: "/logos/android.svg",
          alt: "Android",
        },

        {
          src: "/logos/swift.svg",
          alt: "Swift",
        },
        {
          src: "https://www.svgrepo.com/show/374035/reactts.svg",
          alt: "React Native",
        },
        {
          src: "https://www.svgrepo.com/show/353751/flutter.svg",
          alt: "Flutter",
        },
        {
          src: "https://miro.medium.com/v2/resize:fit:1400/1*DBa98egQ1DIRJqRKVAy3QA.png",
          alt: "Progressive Web Apps",
        },
        {
          src: "https://www.svgrepo.com/show/353913/ionic.svg",
          alt: "Ionic",
        },
      ],
      image: "/assets/mobile-image.png",
    },
    {
      title: "Industry 4.0",
      heading: "Industrial IoT",
      description:
        "Harnessing the power of Industrial Internet of Things (IIoT) to bridge the gap between machines and analytics. Turning data into actionable insights.",
      ctaButtons: [
        {
          head: "LEARN",
          text: "IIoT Solutions",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "https://seeklogo.com/images/M/modbus-logo-13CDBD8DF9-seeklogo.com.png",
          alt: "Modbus",
        },
        {
          src: "https://www.svgrepo.com/show/452168/bluetooth.svg",
          alt: "WiFi",
        },
        {
          src: "https://aptinex.com/wp-content/uploads/2017/09/iot-lora-alliance-logo.svg.png",
          alt: "LoRAWAN",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Yocto_Project_logo.svg/2560px-Yocto_Project_logo.svg.png",
          alt: "Yocto",
        },

        {
          src: "https://www.svgrepo.com/show/353467/azure-icon.svg",
          alt: "Azure IoT Edge",
        },
        {
          src: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/d778954b-6cd4-4c7e-9010-5b86b708bbb0.png",
          alt: "AWS IoT",
        },
        {
          src: "/logos/google-cloud-iot.svg",
          alt: "Google Cloud IoT Core",
        },
        {
          src: "https://www.svgrepo.com/show/353471/balena.svg",
          alt: "Balena",
        },
      ],
      image: "/assets/iiot-image.png",
    },
    {
      title: "Cloud Platforms",
      heading: "Cloud Infrastructure",
      description:
        "Implementing robust cloud infrastructures that promote scalability, reliability, and top-notch system administration. Modern solutions for modern businesses.",
      ctaButtons: [
        {
          head: "DIVE IN",
          text: "Cloud Services",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "https://www.svgrepo.com/show/448236/linux.svg",
          alt: "Linux",
        },
        {
          src: "/logos/aws.svg",
          alt: "AWS",
        },

        {
          src: "/logos/azure.svg",
          alt: "Azure",
        },
        {
          src: "/logos/googlecloud.svg",
          alt: "Google Cloud",
        },
        {
          src: "https://www.svgrepo.com/show/353564/cloudflare.svg",
          alt: "Cloudflare",
        },
        {
          src: "https://www.svgrepo.com/show/373625/gitlab.svg",
          alt: "Gitlab CI",
        },
        {
          src: "https://www.svgrepo.com/show/448237/linode.svg",
          alt: "Linode",
        },
        {
          src: "https://www.svgrepo.com/show/448218/digital-ocean.svg",
          alt: "Digital Ocean",
        },
        {
          src: "https://www.svgrepo.com/show/305708/ansible.svg",
          alt: "Ansible",
        },
        {
          src: "https://www.svgrepo.com/show/452192/docker.svg",
          alt: "Docker",
        },
        {
          src: "https://www.svgrepo.com/show/448233/kubernetes.svg",
          alt: "Kubernetes",
        },
        {
          src: "https://www.svgrepo.com/show/354447/terraform-icon.svg",
          alt: "Terraform",
        },
      ],
      image: "/assets/cloud-image.png",
    },
    {
      title: "Enterprise UX",
      heading: "User Experience and User Interface",
      description:
        "Innovative marketing, branding, and UI/UX designs that encapsulate your brand's essence. Captivating visuals with user-centered design principles.",
      ctaButtons: [
        {
          head: "VIEW",
          text: "Design Showcase",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "https://www.svgrepo.com/show/452151/adobe-xd.svg",
          alt: "Adobe XD",
        },
        {
          src: "/logos/sketch.svg",
          alt: "Sketch",
        },
        {
          src: "/logos/figma.svg",
          alt: "Figma",
        },
        {
          src: "https://www.svgrepo.com/show/452148/adobe-creative-cloud.svg",
          alt: "Creative Cloud",
        },
        {
          src: "https://www.svgrepo.com/show/452149/adobe-photoshop.svg",
          alt: "Adobe Photoshop",
        },
        {
          src: "https://www.svgrepo.com/show/452147/adobe-illustrator.svg",
          alt: "Adobe Illustrator",
        },
        {
          src: "/logos/aftereffect.svg",
          alt: "Adobe Aftereffect",
        },
        {
          src: "https://www.svgrepo.com/show/452150/adobe-premiere.svg",
          alt: "Premiere Pro",
        },
      ],
      image: "/assets/branding-image.png",
    },
    {
      title: "MarTech",
      heading: "Marketing Technologies",
      description:
        "Helping businesses adapt to the digital age with modern solutions. From CRM integrations to digital workflows, we ensure efficient transformations.",
      ctaButtons: [
        {
          head: "SEE HOW",
          text: "Transformation Projects",
          icon: "/assets/ecommerce/salesforce-commerce-cloud/features/feature4.svg",
        },
      ],
      logos: [
        {
          src: "https://www.svgrepo.com/show/331433/hubspot.svg",
          alt: "HubSpot",
        },
        {
          src: "https://www.svgrepo.com/show/354306/salesforce.svg",
          alt: "Salesforce",
        },
        {
          src: "https://companieslogo.com/img/orig/SEMR-4f4c3210.png?t=1678085023",
          alt: "Semrush",
        },
        {
          src: "https://www.svgrepo.com/show/452053/mailchimp.svg",
          alt: "Mailchimp",
        },
        {
          src: "https://www.svgrepo.com/show/331574/sendgrid.svg",
          alt: "Sendgrid",
        },
        {
          src: "https://www.svgrepo.com/show/343561/hootsuite-communication-chat-interaction-connection-conversation.svg",
          alt: "Hootsuite",
        },
        {
          src: "https://www.svgrepo.com/show/353800/google-ads.svg",
          alt: "Google Ads",
        },
        {
          src: "https://www.svgrepo.com/show/303549/google-analytics-1-logo.svg",
          alt: "Google Analytics",
        },
      ],
      image: "/assets/transformation-image.png",
    },
  ],
  timeline: [
    {
      timestamp: "January 2023",
      title: "Got my PMP certification",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "2021 - 2022",
      title:
        "Project Management in IT - Certification Course from Seneca Polytechnic, Toronto.",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "September 2021",
      title: "AWS Certified Solutions Architect Certification",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "April 2021",
      title: "Moved to Toronto, Canada",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "Oct 2016",
      title: "Joined Solvative, back then it was called Quark Studios",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "2016",
      title: "Graduated Bachelor's of Engineering - Information Technology",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "July 2016 - September 2016",
      title:
        "Practical Project Development Guide at L.D. College of Engineering",
      description: "",
      link: "",
      tags: [],
    },
    {
      timestamp: "June 2015 - April 2016",
      title: "PHP Developer Intern at Nyusoft Solutions",
      description: "",
      link: "",
      tags: [],
    },
    { timestamp: "2012", title: "Passed HSC", description: "", link: "" },
    { timestamp: "2010", title: "Passed SSC", description: "", link: "" },
    {
      timestamp: "1994",
      title: "This is when I was born",
      description: "",
      link: "",
      tags: [],
    },
  ],
} as const;
