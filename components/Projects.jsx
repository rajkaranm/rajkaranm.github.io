import Image from "next/image";

export default function Projects() {
  return (
    <div id="projects" className="p-8">
      <h1 className="text-6xl font-bold text-center">PROJECTS</h1>

      <div
        class="w-full sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:justify-evenly xl:flex xl:flex-row my-28 xl:justify-evenly xl:items-center"
        data-aos="fade-up"
      >
        <Image
          class="w-[30rem] h-[19rem] rounded-xl"
          src="https://raw.githubusercontent.com/rajkaranm/crypton/main/img/crypton.png"
          alt=""
          width="400"
          height="300"
        />
        <div class="w-[20rem] m-10">
          <h3 class="text-[2rem] font-bold">#1 Crypton</h3>
          <p class="opacity-50">
            It is integrated with Meta Mask. User can transfer ETH on to another
            user's Wallet on Etherium blockchain. User is provided with Tools
            page where user can view live price and live graph of the price of
            the coin.
          </p>
          <button style={{ borderBottom: "1px solid lightblue" }}>
            <a href="https://github.com/Rajkaranm/spacehub" target="_blank">
              Github
            </a>
          </button>
        </div>
      </div>

      <div
        class="w-full sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:justify-evenly xl:flex xl:flex-row my-28 xl:justify-evenly xl:items-center"
        data-aos="fade-up"
      >
        <Image
          class="w-[30rem] h-[19rem] rounded-xl"
          src="https://raw.githubusercontent.com/rajkaranm/scrpyard/main/img/scrpyard.png"
          alt=""
          width="400"
          height="300"
        />
        <div class="w-[20rem] m-10">
          <h3 class="text-[2rem] font-bold">#2 Scrpyard</h3>
          <p class="opacity-50">
            Scrpyard is E-Commerce website, It has feature to <b>share</b> your
            project and <b>buy</b> products of other users, It has{" "}
            <b>Cart feature</b>, It is also integrated with <b>Razorpay's</b>{" "}
            payment gateway. Scrpyard was build with <b>MERN Stack</b>.
          </p>
          <button style={{ borderBottom: "1px solid lightblue" }}>
            <a href="https://github.com/rajkaranm/scrpyard" target="_blank">
              Github
            </a>
          </button>
        </div>
      </div>

      <div
        class="w-full sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:justify-evenly xl:flex xl:flex-row my-28 xl:justify-evenly xl:items-center"
        data-aos="fade-up"
      >
        <Image
          class="w-[30rem] h-[19rem] rounded-xl"
          src="https://raw.githubusercontent.com/rajkaranm/share_source/main/github-assests/share_source.png"
          alt=""
          width="400"
          height="300"
        />
        <div class="w-[20rem] m-10">
          <h3 class="text-[2rem] font-bold">#3 Share Source</h3>
          <p class="opacity-50">
            Share Source is Social Media Forum were people can join various
            channels and post interesting thing, It is build using power of
            SvelteKit and PostgreSQL.
          </p>
          <button style={{ borderBottom: "1px solid lightblue" }}>
            <a href="https://github.com/rajkaranm/share_source" target="_blank">
              Github
            </a>
          </button>
        </div>
      </div>

      <div
        class="w-full sm:flex sm:flex-col sm:items-center md:flex md:flex-row md:justify-evenly xl:flex xl:flex-row my-28 xl:justify-evenly xl:items-center"
        data-aos="fade-up"
      >
        <Image
          class="w-[30rem] h-[19rem] rounded-xl"
          src="https://raw.githubusercontent.com/Rajkaranm/spacehub/master/img/home.jpg"
          alt=""
          width="400"
          height="300"
        />
        <div class="w-[20rem] m-10">
          <h3 class="text-[2rem] font-bold">#4 Spacehub</h3>
          <p class="opacity-50">
            It provide various information about space through <b>APIs</b> like
            NASA's Astronomy picture of the day and Various Other APIs. It is
            purely build with <b>Django</b>
          </p>
          <button style={{ borderBottom: "1px solid lightblue" }}>
            <a href="https://github.com/Rajkaranm/spacehub" target="_blank">
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
