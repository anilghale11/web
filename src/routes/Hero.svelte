<script>
    import hero from '$lib/assets/hero.png';
    import Linkedin from '$lib/assets/Linkedin.png';

</script>

<section class="text-anil-gray body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-0 font-black text-gray-900">Hi, I am <span class="text-anil-green">Anil</span>.
        </h1>
        <h6 class="title-font sm:text-2xl text-xl mb-4 font-black text-gray-900">Instructional Designer/ Motion Designer/ 2D Animator</h6>
        <p class="mb-8 leading-relaxed">I will help you minimize the risk in your workplace, Maximize your productivity by creating a tailored training materials specific for your companies.</p>
        <!--<div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div>-->
        <a href="https://www.linkedin.com/in/anil-ghale-92300056/" class="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0 sm:mb-0">
            <span class="text-anil-green font-medium leading-relaxed">Find me on
            </span>
            <img class="h-5 ml-2" alt="Linkedin" src={Linkedin} />
        </a>
        <div class="w-16 h-1 rounded-full bg-anil-green inline-flex"></div>
        <div class="flex title-font font-medium items-center text-gray-900 mb-1 mt-1 md:mt-2 sm:mt-0">
          <span class="text-anil-gray font-medium leading-relaxed">Email: </span><span class="text-anil-green font-medium leading-relaxed"> hello@anilghale.com</span>
        </div>
        <div class="w-16 h-1 rounded-full bg-anil-green inline-flex"></div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src={hero} />
      </div>
    </div>
  </section>