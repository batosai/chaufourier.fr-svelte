<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        title: `ERREUR ${status}`,
      },
    };
  }
</script>

<script>
  export let title;
</script>

<section class="px-4 py-24 mx-auto max-w-7xl">
  <div
    class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32"
  >
    <div>
      <p
        class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
      >
        {title}
      </p>
      <h1
        class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl"
      >
        Oups! La page que vous cherchez n'existe pas.
      </h1>
      <p class="mb-5 text-base text-left text-gray-800 md:text-xl">
        Vous avez peut-être la mauvaise adresse ou la page a peut-être bougé.
      </p>
      <a href="/" class="w-full mb-2 btn btn-lg btn-primary sm:w-auto sm:mb-0"
        >Retour à la page d'accueil
      </a>
    </div>
    <div>
      <div class="w-full h-full py-48 bg-gray-200 rounded-lg" />
    </div>
  </div>
</section>
