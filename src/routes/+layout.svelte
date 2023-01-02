<script>
    import "../app.css";
	  import Footer from "./Footer.svelte";
	  import Navbar from "./Navbar.svelte";

</script>
<svelte:head>
  <title>Anil Ghale | Instructional Designer, Motion Designer, 2D Animator</title>
  <meta name="description" content="I wil help you solve your problem by creating engaging e-Learning course, meaningful motion design or 2d animation videos.
  I can also help you grow your business with impactful social media ads video.">
</svelte:head>
<Navbar />
<slot/>
<Footer />