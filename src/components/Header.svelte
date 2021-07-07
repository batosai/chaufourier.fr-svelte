<script>
  import { fade } from "svelte/transition";
  import outside from "$lib/svelte-outside-click";

  let visible = false;

  function toggleMenu() {
    visible = !visible;
  }
</script>

<header class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-md">
  <div class="flex items-center justify-between mx-auto max-w-7xl">
    <a href="/" title="Chaufourier Page Accueil" class="flex items-center">
      <img src="/logo.svg" alt="Chaufourier" />
      <span class="sr-only">Chaufourier</span>
    </a>
    <div class="flex items-center space-x-1">
      <div class="hidden space-x-1 md:inline-flex">
        <a href="/tips" class="btn btn-sm btn-link text-gray-900"
          >Trucs et astuces</a
        >
      </div>
      <div class="inline-flex md:hidden">
        <button
          class="flex-none px-2 btn btn-link text-gray-900 btn-sm"
          on:click={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span class="sr-only">Open Menu</span>
        </button>
        {#if visible}
          <div
            class="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow"
            transition:fade
            use:outside={toggleMenu}
          >
            <button
              class="self-end flex-none px-2 ml-2 btn btn-link btn-icon"
              on:click={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span class="sr-only">Close Menu</span>
            </button>
            <a href="/tips" class="w-full btn btn-link text-gray-900"
              >Trucs et astuces</a
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</header>
