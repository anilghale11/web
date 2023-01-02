
<script>
    import Linkedin from '$lib/assets/Linkedin.png';
    import logo from '$lib/assets/logo.png';
</script>


<footer class="text-anil-gray body-font bg-anil-gray">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div>
            <a href="/" class="flex">
                <img class="h-10" alt="Instructional designer, Motiona designer, 2d Animation" src={logo}/>
                <span class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Anil Ghale —
                    <a href="https://www.linkedin.com/in/anil-ghale-92300056/" class="text-white ml-1" rel="noopener noreferrer" target="_blank">@anilghale</a>
                </span>
            </a>
        </div>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div class="flex flex-col">
                <div >
                    <a href="https://www.linkedin.com/in/anil-ghale-92300056/" class="flex">
                        <span class="text-white font-italic leading-relaxed">Find me on</span>
                        <img class="h-5 ml-2" alt="Linkedin" src={Linkedin} />
                    </a>
                    <div class="w-16 h-1 rounded-full bg-anil-green "></div>
                </div>
                <div class="text-white mt-2">
                   <span class="text-bold"> Email: </span><span class="text-anil-green">hello@anilghale.com </span>
                </div>
                <div class="w-16 h-1 rounded-full bg-anil-green "></div>
            </div>
        </span>
    </div>
  </footer>