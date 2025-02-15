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
      "Researched a way to improve the performance of the product search by using Elasticsearch.",
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

const INTERESTS = [
  {
    name: "Running",
    notableAchievements: [
      "Working my way towards first competitions",
    ],
  },
  {
    name: "DJ-producing",
    notableAchievements: [
      "Played at a local club",
      "I release music on Soundcloud",
    ],
  },
  {
    name: "Chess",
    notableAchievements: [
      "~ 2700 puzzle rating on Chess.com",
      "~ 1450 rated on Chess.com",
    ],
  },
  {
    name: "Football (Soccer)",
    notableAchievements: [
      "Played when I was younger, but still enjoy watching games",
      "Won the local league with my team couple of times",
      "Became captain of the team",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <header className="mb-16 text-center">
          <img
            className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg"
            src="/profile.jpg"
            alt="Profile Picture"
          />
          <h1 className="text-4xl font-bold mt-6 text-gray-900">
            Hi, I'm Casper Aangeenbrug
          </h1>
          <p className="text-lg mt-2 text-gray-600">
            Welcome to my personal site & blog
          </p>
        </header>
        <main className="space-y-16">
          <Bio />
          <BlogPosts />
          <WorkingExperiences experiences={WORKING_EXPERIENCES} />
          <Educations educations={EDUCTIONS} />
          <Interests interests={INTERESTS} />
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
          <li className="hover:bg-white p-4 rounded-lg transition-colors">
            <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
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
        <li className="hover:bg-white p-6 rounded-lg transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h3 className="font-medium text-gray-900">
              {experience.company} – {experience.title}
            </h3>
            <span className="text-gray-500 text-sm">
              {experience.startDate} – {experience.endDate}
            </span>
          </div>
          <ul className="space-y-2 mt-3 text-gray-700">
            {experience.contributions.map((contribution) => (
              <li className="list-disc ml-4">{contribution}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

const Bio = () => (
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">About Me</h2>
    <p>
      Hi, I'm Casper Aangeenbrug, a {AGE}{" "}
      year old software engineer from the Netherlands. Teached myself how to
      code at the age of 12 with a little help from my father. Started off
      coding in Roblox and had some fun with making things like an aerodynamics
      simulation.
    </p>
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

const Interests = ({ interests }: InterestsProps) => (
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Interests</h2>
    <ul class="space-y-5">
      {interests.map((interest) => (
        <li>
          <strong>{interest.name}</strong>
          <div class={"flex flex-col gap-2"}>
            {interest.notableAchievements.map((achievement) => (
              <p class="mt-1">{achievement}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </section>
);
