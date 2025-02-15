import useBlogPosts from "../hooks/UseBlogPosts.ts";
import { getDateDiffInYears } from "../util/date.ts";
import { GITHUB_URL, LINKEDIN_URL } from "../util/socials.ts";

const BIRTHDAY = new Date("2001-05-03");
const NOW = new Date();
const AGE = getDateDiffInYears(BIRTHDAY, NOW);

const WORKING_EXPERIENCES: WorkingExperience[] = [
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
    title: "Intern Software engineer",
    startDate: "2022",
    endDate: "2022",
    contributions: [
      "Researched a way to improve the performance of an article search index by using Elasticsearch.",
    ],
  },
  {
    company: "YourSurprise",
    title: "Intern Software engineer",
    startDate: "2020",
    endDate: "2020",
    contributions: [
      "Worked on a system that makes it easier to plan sales based on holidays in different countries.",
    ],
  },
];

const EDUCTIONS: Education[] = [
  {
    school: "Open Universiteit",
    degree: "Master of Science in Artificial Intelligence",
    startDate: "2024",
    endDate: "present",
    description:
      "I'm currently studying artificial intelligence to learn more about machine learning and neural networks. Something slightly different from my bachelor's degree to keep things interesting.",
  },
  {
    school: "HZ University of Applied Sciences",
    degree: "Bachelor of ICT",
    startDate: "2018",
    endDate: "2023",
    description:
      "I studied software engineering and learned about different programming languages, software design patterns, and how to work in a team.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-inter bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <header className="mb-32">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            <div className="relative group w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <div className="absolute inset-0 bg-primary-400 rounded-sm blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500">
              </div>
              <img
                className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/profile.jpg"
                alt="Profile Picture"
              />
            </div>

            <div className="flex flex-col gap-6 md:pt-4">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                  Casper
                  <span className="text-primary-400">.</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl">
                  Building software since I was 12.
                </p>
              </div>

              <p className="text-gray-400 max-w-xl">
                {AGE}{" "}
                y/o software engineer from the Netherlands. From Roblox games to
                enterprise applications, I craft digital experiences that make a
                difference.
              </p>

              <div className="flex gap-6">
                <a
                  href={GITHUB_URL}
                  className="text-white hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  className="text-white hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="space-y-24">
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
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Latest Blog Posts
      </h2>
      <ul className="space-y-4">
        {posts.value.map((post) => (
          <li className="group hover:bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-gray-800">
            <h3 className="text-lg font-medium text-white group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
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
    <h2 className="text-2xl font-semibold mb-6 text-white">
      Working Experience
    </h2>
    <ul className="space-y-8">
      {experiences.map((experience) => (
        <li className="group hover:bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:shadow-lg border border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h3 className="font-medium text-white group-hover:text-primary-400 transition-colors">
              {experience.company} – {experience.title}
            </h3>
            <span className="text-gray-400 text-sm">
              {experience.startDate} – {experience.endDate}
            </span>
          </div>
          <ul className="space-y-2 mt-3 text-gray-300">
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
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
    <ul className="space-y-5">
      {educations.map((education) => (
        <li className="group hover:bg-gray-900 p-6 rounded-lg transition-all duration-300 border border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <div>
              <strong className="text-white group-hover:text-primary-400 transition-colors">
                {education.school} – {education.degree}
              </strong>
            </div>
            <span className="text-gray-400 text-sm">
              {education.startDate} – {education.endDate}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mt-1 text-gray-300">{education.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
