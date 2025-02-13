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
          <h1 class="text-4xl font-bold mt-4">Hi, I'm [Your Name]</h1>
          <p class="text-lg mt-2">Welcome to my personal site & blog</p>
        </header>
        <main class="mt-8">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              Brief introduction about yourself. Share your interests, passions, or a short bio.
            </p>
          </section>
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
            <ul class="space-y-2">
              <li>
                <a href="/blog/post1" class="text-blue-600 hover:underline">
                  Blog Post Title 1
                </a>
              </li>
              <li>
                <a href="/blog/post2" class="text-blue-600 hover:underline">
                  Blog Post Title 2
                </a>
              </li>
              <li>
                <a href="/blog/post3" class="text-blue-600 hover:underline">
                  Blog Post Title 3
                </a>
              </li>
            </ul>
          </section>
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Working Experience</h2>
            <ul class="space-y-2">
              <li>
                <strong>Company Name</strong> – Job Title (Year – Year)
                <p class="mt-1">
                  A brief description of your role, responsibilities, and accomplishments.
                </p>
              </li>
              {/* Add more experiences as needed */}
            </ul>
          </section>
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Education</h2>
            <ul class="space-y-2">
              <li>
                <strong>Institution Name</strong> – Degree (Year – Year)
                <p class="mt-1">
                  A brief overview of your studies, major projects, or notable achievements.
                </p>
              </li>
              {/* Add more education details as needed */}
            </ul>
          </section>
          <section class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Interests</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Interest 1</li>
              <li>Interest 2</li>
              <li>Interest 3</li>
              {/* Add more interests as required */}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
