<script>
  import "../app.postcss";
</script>

<svelte:head>
  <title>Resume</title>
</svelte:head>

<div class="min-h-screen bg-gray-400 text-white overflow-auto">
  <header class="flex justify-center p-6 lg:px-32">
    <div class="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <a class="font-semibold text-xl" href="https://zuri.team/"
        >Zuri<span class="text-[red]">.</span>Team</a
      >
    </div>
  </header>
  <main class="flex justify-center pb-20 sm:px-10 md:px-16 lg:px-32">
    <slot />
  </main>
</div>
