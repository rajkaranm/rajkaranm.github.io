export default function Footer() {
  return (
    <div className="px-48 w-full h-96 flex justify-between items-center">
      <div>
        <h1 className="py-5 text-4xl font-bold">Rajkaran Mishra</h1>
        <p className="w-[30rem]">
          I have build many Full Stack Application from Blockchain to
          E-commerce, I Also have a lot interest Cyber Security.
        </p>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold">Social</h1>
        <div className="w-60 m-5 flex justify-evenly items-center">
          <a href="mailto:rajkaranvir456@gmail.com">
            <i className="fa-solid fa-envelope text-2xl"></i>
          </a>
          <a href="https://medium.com/@imrajkaran" target="_blank">
            <i className="fa-brands fa-medium text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/@ItsRkEver/" target="_blank">
            <i className="fa-brands fa-youtube text-2xl"></i>
          </a>
          <a href="https://twitter.com/RealRajkaran" target="_blank">
            <i className="fa-brands fa-twitter text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/raj-karan/" target="_blank">
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com/rajkaranm" target="_blank">
            <i className="fa-brands fa-github text-2xl p-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
