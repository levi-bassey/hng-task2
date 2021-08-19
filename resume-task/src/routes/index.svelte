<script>
  import BrandIcon from "$lib/components/BrandIcon.svelte";

  let skills = ["React", "Svelte", "JavaScript", "CSS", "HTML", "Typescript"];
  let experience = [
    {
      role: "Back-end Developer Intern",
      company: "Javaplus Innovations",
      period: "Jan 2019 - Jan 2020",
    },
    {
      role: "Back-end Developer",
      company: "Lumifile",
      period: "Aug 2020 - Jun 2021",
    },
    {
      role: "Front-end Developer Intern",
      company: "HNG Internships",
      period: "Aug 2021 - Current",
    },
  ];
  let education = [
    {
      course: "Basic Education",
      school: "Command Day Secondary School",
      period: "2012 - 2015",
    },
    {
      course: "Software Engineering",
      school: "Digital bridge institute",
      period: "2018 - Current",
    },
  ];
</script>

<div>
  <div class="flex flex-col items-center">
    <div class="mt-6 w-32 h-32 rounded-full overflow-hidden">
      <img
        class="w-full object-cover object-center"
        src="/sming.jpg"
        alt="profile"
      />
    </div>
    <h1 class="mt-6 text-xl font-semibold text-center">Levi Bassey</h1>
    <p class="order-first mt-7 text-2xl font-semibold text-center">
      Frontend <br />Developer
    </p>
    <div class="mt-8 flex space-x-4">
      <div class="w-5 h-5">
        <BrandIcon name="twitter" />
      </div>
      <div class="w-5 h-5">
        <BrandIcon name="github" />
      </div>
      <div class="w-5 h-5">
        <BrandIcon name="linkedin" />
      </div>
    </div>
  </div>
</div>
<p class="mt-12 px-6 text-gray-100">
  I'm a software developer specializing in all things web. I love solving
  problems with code and building fast and accessible web apps. I'm always
  interested to learn about new career opportunities so please get in touch with
  me if you would like to chat.
</p>
<section class="mt-12 px-6">
  <h2 class="text-2xl capitalize font-semibold">Skills</h2>
  <ul class="mt-5 grid grid-cols-3 gap-4">
    {#each skills as skill}
      <li class="w-20 h-20 rounded-lg bg-gray-300">
        <div class="h-full flex flex-col items-center justify-center">
          <div class="w-7 h-7">
            <BrandIcon name={skill.toLowerCase()} />
          </div>
          <p class="mt-2 text-sm text-gray-100">
            {skill}
          </p>
        </div>
      </li>
    {/each}
  </ul>
</section>
<section class="mt-12 px-6">
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
<section class="mt-12 px-6">
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
