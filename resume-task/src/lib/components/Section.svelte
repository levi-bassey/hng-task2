<script>
  export let heading;
</script>

<div class="mt-8 px-6">
  <h2 class="text-2xl capitalize font-semibold">{heading}</h2>
  <div class="mt-5">
    <slot />
  </div>
  <div class="mt-8 w-44 h-px bg-[#4F4D4D]" />
</div>
