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
    <div class="px-4 py-8 mx-auto bg-white">
      <div class="max-w-screen-md mx-auto">
        <header class="my-6 text-center">
          <img
            class="mx-auto rounded-full"
            src="/profile.jpg"
            alt="Profile Picture"
            width="150"
            height="150"
          />
          <h1 class="text-4xl font-bold mt-4">Hi, I'm Casper Aangeenbrug</h1>
          <p class="text-lg mt-2">Welcome to my personal site & blog</p>
        </header>
        <main class="mt-8">
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
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
      <ul class="space-y-2">
        {posts.value.map((post) => (
          <li>
            <h3 class="text-lg font-semibold">{post.title}</h3>
            <p class="text-sm text-gray-500">{post.date}</p>
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
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Working Experience</h2>
    <ul class="space-y-5">
      {experiences.map((experience) => (
        <li>
          <strong>{experience.company}</strong> – {experience.title}{" "}
          ({experience.startDate} – {experience.endDate})
          <div class={"flex flex-col gap-2"}>
            {experience.contributions.map((contribution) => (
              <p class="mt-1">{contribution}</p>
            ))}
          </div>
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
