<script context="module">
  export async function load({ page, fetch }) {
    let articles;
    const currentPage = page.query.has("page") ? page.query.get("page") : 1;
    const search = page.query.has("search") ? page.query.get("search") : "";

    try {
      articles = await fetch(`/tips.json?page=${currentPage}&search=${search}`);
      articles = await articles.json();
    } catch (e) {
      console.log(e);
    }

    let nextPage =
      articles.page < articles.total_pages ? articles.page + 1 : null;
    let prevPage = articles.page > 1 ? articles.page - 1 : null;

    return {
      props: {
        articles: articles.results,
        nextPage,
        prevPage,
        search
      },
    };
  }
</script>

<script>
  import { humanDate } from "$lib/utils";

  export let articles;
  export let prevPage;
  export let nextPage;
  export let search;
</script>

<svelte:head>
  <title>Trucs et astuces | chaufourier.fr</title>
  <meta name="description" content="Trucs et astuces pour développeurs" />
</svelte:head>

<section class="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
  <div class="mb-12 text-left md:text-center">
    <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">
      Trucs et astuces
    </h2>
    <p class="text-lg text-gray-500">
      Parce que nous ne sommes pas des machines, je consacre cette partie pour y
      référencer des tips, penses-bête et toutes sortes d'informations.
    </p>

    <div class="mt-6 bg-transparent border rounded-md dark:border-gray-700  focus-within:ring ring-primary focus-within:border-teal-500 ring-opacity-40">
      <form action="/tips" class="flex flex-wrap justify-between md:flex-row">
        <input type="search" name="search" value={search} placeholder="Recherche" class="flex-1 px-4 h-10 lg:h-12 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
        <button type="submit" class="flex justify-center items-center w-full lg:w-12 lg:h-12 p-2 lg:p-0 m-1 text-white transition-colors duration-200 transform rounded-md bg-primary hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </form>
    </div>
  </div>
  <div class="flex flex-col space-y-12 divide-y divide-gray-200">
    {#if articles.length}
      {#each articles as article}
        <div>
          <p class="pt-12 mb-3 text-sm font-normal text-gray-500">
            {humanDate(article.last_publication_date)}
          </p>
          <h2
            class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl"
          >
            <a
              href="/tips/{article.uid}"
              class="text-gray-900 hover:text-blue-700">{article.data.title}</a
            >
            {#each article.tags as tag, index}
              <span class="badge bg-primary text-white">
                {tag}
              </span>
            {/each}
          </h2>
          {#each article.data.preview as c}
            {#if c.type == "paragraph"}
              <p class="mb-4 text-base font-normal text-gray-600">{c.text}</p>
            {:else if c.type == "preformatted"}
              <div class="prose mx-auto mb-5">
                <pre>{c.text}</pre>
              </div>
            {/if}
          {/each}
          <a href="/tips/{article.uid}" class="btn btn-light btn-sm"
            >Continuer à lire</a
          >
        </div>
      {/each}
    {:else}
        Aucun article trouvé.
    {/if}
  </div>
  <div
    class="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row"
  >
    {#if prevPage}
      <a
        href="/tips?page={prevPage}&search={search}"
        class="w-full rounded-full btn btn-light btn-xl md:w-auto"
        >Page Précédente</a
      >
    {/if}
    {#if nextPage}
      <a
        href="/tips?page={nextPage}&search={search}"
        class="w-full rounded-full btn btn-light btn-xl md:w-auto"
        >Page Suivante</a
      >
    {/if}
  </div>
</section>
