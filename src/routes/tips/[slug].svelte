<script context="module">
  export async function load({ page, fetch }) {
    let article;

    try {
      article = await fetch(`/tips/${page.params.slug}.json`);
      article = await article.json();
    } catch (e) {
      console.log(e);
    }

    return {
      props: {
        article,
        tags: article.tags,
      },
    };
  }
</script>

<script>
  import { humanDate } from "$lib/utils";

  export let article;
  export let tags;
</script>

<svelte:head>
  <title>{article.data.meta_title}</title>
  <meta name="description" content={article.data.meta_description} />
</svelte:head>

<section class="px-4 py-10 mx-auto max-w-7xl">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Accueil</a></li>
      <li class="breadcrumb-item"><a href="/tips">Trucs et astuces</a></li>
      <li class="breadcrumb-item overflow-auto" aria-current="page">
        {article.data.title}
      </li>
    </ul>
  </nav>
</section>

<article
  class="px-4 py-14 mx-auto max-w-7xl"
  itemid="#"
  itemscope
  itemtype="http://schema.org/BlogPosting"
>
  <div class="w-full mx-auto mb-12 text-center md:w-2/3">
    <p
      class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase"
    >
      {#each tags as tag, index}
        <span class="badge bg-gray-100 text-gray-900">
          {tag}
        </span>
      {/each}
    </p>
    <h1
      class="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl"
      itemprop="headline"
      title="Rise of Tailwind - A Utility First CSS Framework"
    >
      {article.data.title}
    </h1>
    <p class="text-gray-700">
      <time
        itemprop="datePublished dateModified"
        datetime="2010-08-07 11:11:03-0400"
        pubdate>{humanDate(article.last_publication_date)}</time
      >
    </p>
  </div>

  <div class="mx-auto">
    {#each article.data.content as c}
      {#if c.type == "paragraph"}
        <p class="mb-4 text-base font-normal text-gray-600">{c.text}</p>
      {:else if c.type == "preformatted"}
        <div class="prose mx-auto mb-5 max-w-3xl">
          <pre>{c.text}</pre>
        </div>
      {/if}
    {/each}

    {#if article.data.sources.length}
      <p><strong>Sources :</strong></p>
      {#each article.data.sources as s}
        <a href={s.link.url} target="_blank">{s.link.url}</a><br />
      {/each}
    {/if}
  </div>
</article>
