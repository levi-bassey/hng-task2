<script context="module">
  import { dev } from "$app/env";

  export const hydrate = dev;
</script>

<script>
  import BrandIcon from "$lib/components/BrandIcon.svelte";

  let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "Tailwind",
    "React",
    "Svelte",
    "NodeJS",
    "postgreSQL",
    "Git",
  ];
  let experience = [
    {
      role: "Back-end Developer Intern",
      company: "Javaplus Innovations",
      period: "Jan 2019 - Jan 2020",
    },
    {
      role: "Front-end Developer Intern",
      company: "HNG Internships",
      period: "Aug 2021 - November 2021",
    },
    {
      role: "Full-stack Developer",
      company: "Lumifile",
      period: "Aug 2020 - current",
    },
  ];
  let education = [
    {
      course: "Software Engineering",
      school: "Digital bridge institute",
      period: "2018 - 2020",
    },
  ];
</script>

<div
  class="flex flex-col sm:max-w-xl sm:w-full sm:flex-row sm:justify-between md:max-w-2xl lg:max-w-4xl"
>
  <div class="mt-14">
    <div class="flex flex-col items-center">
      <div class="mt-6 w-32 h-32 rounded-full overflow-hidden">
        <img
          class="w-full object-cover object-center grayscale"
          src="/avatar.jpg"
          alt="profile"
        />
      </div>
      <h1 class="mt-6 text-xl font-semibold text-center">Levi Bassey</h1>
      <p class="order-first text-2xl font-semibold text-center">
        Frontend <br />Developer
      </p>
      <div class="mt-8 flex space-x-4">
        <div class="w-5 h-5">
          <a class="w-full h-full" href="https://twitter.com/LeviBassey">
            <BrandIcon name="twitter" />
          </a>
        </div>
        <div class="w-5 h-5">
          <a class="w-full h-full" href="https://github.com/levi-bassey">
            <BrandIcon name="github" />
          </a>
        </div>
        <div class="w-5 h-5">
          <a
            class="w-full h-full"
            href="https://www.linkedin.com/in/levi-bassey"
          >
            <BrandIcon name="linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-14 px-6 flex flex-col items-center sm:px-0">
    <div class="max-w-md w-full sm:max-w-sm md:max-w-md lg:max-w-xl">
      <p class="text-gray-100">
        I'm a software developer specializing in all things web. I love solving
        problems with code and building fast and accessible web apps. I'm always
        interested to learn about new career opportunities so please get in
        touch with me if you would like to chat.
      </p>
      <section class="mt-12">
        <h2 class="text-2xl capitalize font-semibold">Skills</h2>
        <ul class="mt-5 grid grid-cols-auto-grid gap-3">
          {#each skills as skill}
            <li
              style="padding-bottom: 100%;"
              class="relative w-full rounded-lg bg-gray-300"
            >
              <div
                class="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div class="w-7 h-7">
                  <BrandIcon name={skill.toLowerCase()} />
                </div>
                <p class="mt-2 text-sm text-gray-100 font-semibold">
                  {skill}
                </p>
              </div>
            </li>
          {/each}
        </ul>
      </section>
      <section class="mt-12">
        <h2 class="text-2xl capitalize font-semibold">Experience</h2>
        <ul class="mt-5 space-y-7">
          {#each experience as { role, company, period }}
            <li class="flex">
              <div class="">
                <div class="mt-2 w-2.5 h-2.5 bg-gray-100 rounded-full" />
                <div />
              </div>
              <div class="ml-8">
                <h3 class="text-lg font-semibold text-gray-100">
                  {role}
                </h3>
                <p class="mt-1.5 text-gray-100">{company}</p>
                <p class="mt-1.5 text-gray-200">{period}</p>
              </div>
            </li>
          {/each}
        </ul>
      </section>
      <section class="mt-12">
        <h2 class="text-2xl capitalize font-semibold">Education</h2>
        <ul class="mt-5 space-y-7">
          {#each education as { course, school, period }}
            <li class="flex">
              <div class="">
                <div class="mt-2 w-2.5 h-2.5 bg-gray-100 rounded-full" />
                <div />
              </div>
              <div class="ml-8">
                <h3 class="text-lg font-semibold text-gray-100">
                  {course}
                </h3>
                <p class="mt-1.5 text-gray-100">{school}</p>
                <p class="mt-1.5 text-gray-200">{period}</p>
              </div>
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </div>
</div>
