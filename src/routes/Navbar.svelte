<script>
    import "../app.css";
    import logo from '$lib/assets/logo.png';

    import {page} from "$app/stores";
    $: routeID = $page.route.id;
</script>

<header class="text-slate-100 body-font bg-anil-gray">
    <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
      <a href="/">
        <img class="h-10" alt="Instructional designer, Motiona designer, 2d Animation" src={logo}/>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center active:text-anil-green">
        <a class="mr-5 hover:text-anil-green" href="/">Home</a>
        <!--<a class="mr-5 hover:text-anil-green" href="/My Process">My Process</a>-->
        <a class="mr-5 hover:text-anil-green" href="/Portfolio" data-sveltekit-preload-data="hover">Portfolio</a>
      </nav>
    </div>
</header>