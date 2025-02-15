import useBlogPosts from "../hooks/UseBlogPosts.ts";
import { getDateDiffInYears } from "../util/date.ts";

const BIRTHDAY = new Date("2001-05-03");
const NOW = new Date();
const AGE = getDateDiffInYears(BIRTHDAY, NOW);

const WORKING_EXPERIENCES: WorkingExperience[] = [
  {
    company: "YourSurprise",
    title: "Intern Software engineer",
    startDate: "2020",
    endDate: "2020",
    contributions: [
      "Worked on a system that makes it easier to plan sales based on holidays in different countries.",
    ],
  },
  {
    company: "Omoda",
    title: "Intern Software engineer",
    startDate: "2022",
    endDate: "2022",
    contributions: [
      "Researched a way to improve the performance of an article search index by using Elasticsearch.",
    ],
  },
  {
    company: "Omoda",
    title: "Junior Software engineer",
    startDate: "2022",
    endDate: "2024",
    contributions: [
      "Made a module in POS system that allows customers to place orders. This was previously done with third-party software.",
      "Worked on replacing AS/400 machine with Java applications to modernize the system.",
      "Helped to set up NX monorepo to make it easier to share code between different projects.",
      "Built a system for applying discounts in sale periods.",
    ],
  },
  {
    company: "Omoda",
    title: "Medior Software engineer",
    startDate: "2024",
    endDate: "present",
    contributions: [
      "Advised and worked on transition the software architecture from microservices to modular monolith to make it easier to maintain with a small team.",
      "Dockerized the main application to make local development easier and to ensure that the application runs the same in all environments.",
      "Built the groundwork for E2E testing with Jenkins, Cypress and Docker to ensure that orders are processed correctly. The entire flow from the customer placing an order to the order being shipped was covered by the tests.",
    ],
  },
];

const EDUCTIONS: Education[] = [
  {
    school: "HZ University of Applied Sciences",
    degree: "Bachelor of ICT",
    startDate: "2018",
    endDate: "2023",
    description:
      "I studied software engineering and learned about different programming languages, software design patterns, and how to work in a team.",
  },
  {
    school: "Open Universiteit",
    degree: "Master of Science in Artificial Intelligence",
    startDate: "2024",
    endDate: "present",
    description:
      "I'm currently studying artificial intelligence to learn more about machine learning and neural networks. Something slightly different from my bachelor's degree to keep things interesting.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="mb-24 relative">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
              </div>
              <img
                className="relative w-40 h-40 rounded-full object-cover ring-4 ring-white"
                src="/profile.jpg"
                alt="Profile Picture"
              />
            </div>

            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                Casper Aangeenbrug
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                A {AGE}{" "}
                year old software engineer from the Netherlands, passionate
                about building great software. Started coding at 12, from Roblox
                games to enterprise applications.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/yourusername"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors border border-primary-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-16">
          <BlogPosts />
          <WorkingExperiences experiences={WORKING_EXPERIENCES} />
          <Educations educations={EDUCTIONS} />
        </main>
      </div>
    </div>
  );
}

const BlogPosts = () => {
  const { posts } = useBlogPosts();
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        Latest Blog Posts
      </h2>
      <ul className="space-y-4">
        {posts.value.map((post) => (
          <li className="group hover:bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

type WorkingExperiencesProps = {
  experiences: WorkingExperience[];
};

type WorkingExperience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  contributions: string[];
};

const WorkingExperiences = ({ experiences }: WorkingExperiencesProps) => (
  <section>
    <h2 className="text-2xl font-semibold mb-6 text-gray-900">
      Working Experience
    </h2>
    <ul className="space-y-8">
      {experiences.map((experience) => (
        <li className="group hover:bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
              {experience.company} – {experience.title}
            </h3>
            <span className="text-secondary-500 text-sm">
              {experience.startDate} – {experience.endDate}
            </span>
          </div>
          <ul className="space-y-2 mt-3 text-secondary-700">
            {experience.contributions.map((contribution) => (
              <li className="list-disc ml-4 group-hover:translate-x-1 transition-transform">
                {contribution}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

type EducationsProps = {
  educations: Education[];
};

type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

const Educations = ({ educations }: EducationsProps) => (
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Education</h2>
    <ul class="space-y-5">
      {educations.map((education) => (
        <li>
          <strong>{education.school}</strong> – {education.degree}{" "}
          ({education.startDate} – {education.endDate})
          <div class={"flex flex-col gap-2"}>
            <p class="mt-1">{education.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

type InterestsProps = {
  interests: Interest[];
};

type Interest = {
  name: string;
  notableAchievements: string[];
};
