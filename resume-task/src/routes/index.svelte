<script>
  import BrandIcon from "$lib/components/BrandIcon.svelte";
  import Section from "$lib/components/Section.svelte";

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

<Section heading="skills">
  <ul class="mt-5 grid grid-cols-3 gap-4">
    {#each skills as skill}
      <li
        class="w-20 h-20 flex flex-col items-center justify-center rounded-lg bg-[#373737]"
      >
        <BrandIcon --width="30px" --height="30px" name={skill.toLowerCase()} />
        <p class="mt-2 text-sm text-[#A4A3A3]">
          {skill}
        </p>
      </li>
    {/each}
  </ul>
</Section>
<Section heading="experience">
  <ul class="space-y-7">
    {#each experience as { role, company, period }}
      <li class="flex">
        <div class="">
          <div class="mt-2 w-2.5 h-2.5 bg-[#C4C4C4] rounded-full" />
          <div />
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-[#C4C4C4]">
            {role}
          </h3>
          <p class="mt-1.5 text-[#C4C4C4]">{company}</p>
          <p class="mt-1.5 text-[#7F7E7E]">{period}</p>
        </div>
      </li>
    {/each}
  </ul>
</Section>
<Section heading="education">
  <ul class="space-y-7">
    {#each education as { course, school, period }}
      <li class="flex">
        <div class="">
          <div class="mt-2 w-2.5 h-2.5 bg-[#C4C4C4] rounded-full" />
          <div />
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-[#C4C4C4]">
            {course}
          </h3>
          <p class="mt-1.5 text-[#C4C4C4]">{school}</p>
          <p class="mt-1.5 text-[#7F7E7E]">{period}</p>
        </div>
      </li>
    {/each}
  </ul>
</Section>
