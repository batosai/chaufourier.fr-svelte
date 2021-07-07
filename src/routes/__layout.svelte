<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  import "../styles/theme.css";
</script>

<!-- <svelte:head>
	<title>Welcome</title>
</svelte:head> -->

<section class="min-h-screen bg-gray-50 flex flex-col">
  <Header />
  <div class="flex-grow">
    <slot />
  </div>
  <div>
    <Footer />
  </div>
</section>
