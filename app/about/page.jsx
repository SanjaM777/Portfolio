import React from 'react';
import Header from '../../Components/Header';
import Image from 'next/image';
import { about } from '../images/index'
const About = () => {
  return (
    <section id='about' className='font-Poppins'>
      {/*<hr className="border-t-10 border-green-500" />*/}
      <div className='font-sans gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8' style={{ borderTop: '5px solid #ffff00', color: 'white' }}>
        {/* Content of the About section goes here */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-2 text-left text-xl'>
            <h2 className='text-left text-5xl my-4 py-2 font-Merriweather ' style={{ color: '#ffff00' }}>About me</h2>
            <p className='text-left'>
            Many people question why I, as a woman, chose a career in development. I firmly believe that technology knows no gender, and women are just as capable of changing the world. Fueled by this belief, I pursued a bachelor's degree and delved into the world of programming, crafting numerous web and mobile applications along the way.

My mantra, 'Working makes me true and necessary,' encapsulates my dedication to my craft in a single phrase. With a Bachelor's degree under my belt, I embarked on my journey as a full-stack developer, accumulating four years of invaluable experience. It wasn't always easy mastering various programming languages, but I persisted and conquered challenges one by one.

Today, I boast proficiency in a range of languages including C++, Python, JavaScript, TypeScript, C#, and PHP, among others. In the realm of full-stack development, I specialize in React, Next.js, Node.js, Express.js, Nest.js, PHP, Laravel, Java, MongoDB, Firebase, Vue, and Angular.

My skill set extends beyond mere technical proficiency. I am deeply committed to delivering excellence and earning the trust of my clients. This commitment drives me to continually hone my skills and stay abreast of industry trends.

On a personal note, my journey into development was sparked by a childhood fascination with technology. Growing up, I spent countless hours tinkering with computers and teaching myself to code. This passion eventually blossomed into a fulfilling career, where each day presents new opportunities for growth and innovation.

In addition to my professional endeavors, I am an avid advocate for diversity and inclusion in the tech industry. I actively mentor aspiring developers, particularly women, and strive to create a more equitable and welcoming environment for all.

As I continue on my journey, I remain steadfast in my belief that women have an essential role to play in shaping the future of technology. Through hard work, determination, and a love for coding, I am determined to make my mark and inspire others to do the same.

Thank you for visiting my profile.

            </p>
            <p className='my-2 text-left'>
              <strong className='font-Merriweather' style={{ color: "#ffff00" }}>Core Skills:</strong>
              <br />
              Three.js,WebGL,Web3.js, React.js, Next.js, Node.js, MongoDB, Block Chain
            </p>

            <p className='my-2 text-left'>
              <strong className='font-Merriweather' style={{ color: "#ffff00" }}>Hobbies:</strong>
              <br />
              Beyond the world of coding, I find joy in the simplicity of life. In my free time, you'll often find me enjoying the tranquility of swimming, immersing myself in captivating movies and series, and cherishing moments spent with my close circle.
            </p>

            <p className='text-left'>
              Let's connect and explore the possibilities together!
            </p>
          </div>

          <div className='md:col-span-1 lg:col-span-1 flex items-center justify-center my-8'>
            <Image
              src={about}
              width={500}
              height={500}
              alt="About Image"
              layout="fixed"
              objectFit="cover"
              objectPosition="center center"
              className='about-image rounded-full mx-auto md:w-500 md:h-500 lg:w-96 lg:h-96 xl:w-120 xl:h-120'  // Add rounded styling if needed
            />
            {/* Additional content or styling for the image */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;