import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there! I'm <span className='text-[#915EFF]'>Kshama Mishra</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full">
                ✨ Aspiring AI Researcher
              </span>
              <span className="hidden lg:inline text-white/50">|</span>
              <span className="px-3 py-1 rounded-full">
                💻 Passionate Coder
              </span>
              <span className="hidden lg:inline text-white/50">|</span>
              <span className="px-3 py-1 rounded-full">
              🚀 Solving Real-World Problems Through Innovation 
              </span>
            </div>
            <div className="mt-3 text-white-100"></div>
          </div>
          <p className="mt-4 text-secondary text-xl max-w-6xl leading-relaxed">
            I am a third-year  student pursuing B.tech in Computer Science with a specialization in Artificial Intelligence, driven by a strong passion for technology and innovation. I have a keen interest in exploring the ever-evolving landscape of intelligent systems, advanced computing, and cutting-edge innovations shaping the future of technology.
          </p>
        </div>
      </div>

      


    </section>
  );
};

export default Hero;
