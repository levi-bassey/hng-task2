<script>
  import BrandIcon from "$lib/components/BrandIcon.svelte";

  let skills = ["React", "Svelte", "JavaScript", "CSS", "HTML", "Typescript"];
</script>

<section class="px-6">
  <h2 class="text-2xl">Skills</h2>
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
</section>
