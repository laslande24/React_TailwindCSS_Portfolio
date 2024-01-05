import { useState } from 'react';
import './App.css';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin, } from "react-icons/ai"
import deved from "./images/dev-ed-wave.png"
import design from "./images/design.png"
import consulting from "./images/consulting.png"
import code from "./images/code.png"
import web1 from "./images/web1.png"
import web2 from "./images/web2.png"
import web3 from "./images/web3.png"
import web4 from "./images/web4.png"
import web5 from "./images/web5.png"
import web6 from "./images/web6.png"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-100'>developed-by-romaric</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'>
                {darkMode? <BsFillSunFill color='yellow' onClick={()=>setDarkMode(!darkMode)}/>: <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/>}
              </li>
              <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'><a href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium font-Poppins md:text-6xl'>Romaric Laslande</h2>
            <h3 className='text-3xl py-2 md: 4xl dark:text-cyan-100'>Developer and Designer. </h3>
            <p className='text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100'>Freelancer providing services for programming and design
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'  >
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='flex justify-center relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <img src={deved} className="max-w-lg " />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 font-Inter font-bold dark:text-cyan-100'>Services I offer</h3>
            <p className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-100'>
              Since the beginning of my journey as a freelance developer,
              I've done remote work for <span className='text-teal-500'>agencies</span> consulted for
              <span className='text-teal-500'>startups</span> and collaborated with talented people to create
              digital products for both business and consumer use
            </p>
            <p className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-100'>I offer from a wide range of services, including programming and teaching</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-gray-700 shadow-lg p-10 rounded-2xl my-10'>
              <img src={design} width={100} height={100} />
              <h3 className='text-2xl font-semibold dark:text-cyan-100'>Beautiful Designs</h3>
              <p className='py-2 font-medium pt-6 pb-2 dark:text-gray-100'>Creating elegant designs suited for your needs following
                core design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Adobe XD</p>
            </div>
            <div className='text-center shadow-gray-700 shadow-lg p-10 rounded-2xl my-10'>
              <img src={code} width={100} height={100} />
              <h3 className='text-2xl font-semibold dark:text-cyan-100'>Beautiful Designs</h3>
              <p className='py-2 font-medium pt-6 pb-2 dark:text-gray-100'>Creating elegant designs suited for your needs following
                core design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Adobe XD</p>
            </div>
            <div className='text-center shadow-gray-700 shadow-lg p-10 rounded-2xl my-10'>
              <img src={consulting} width={100} height={100} />
              <h3 className='text-2xl font-semibold dark:text-cyan-100'>Beautiful Designs</h3>
              <p className='py-2 font-medium pt-6 pb-2 dark:text-gray-100'>Creating elegant designs suited for your needs following
                core design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools used</h4>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-100'>Adobe XD</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 font-Inter font-bold dark:text-cyan-100'>Portfolio</h3>
            <p className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-100'>
              Since the beginning of my journey as a freelance developer,
              I've done remote work for <span className='text-teal-500'>agencies</span> consulted for
              <span className='text-teal-500'>startups</span> and collaborated with talented people to create
              digital products for both business and consumer use
            </p>
            <p className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-100'>I offer from a wide range of services, including programming and teaching</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><img src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} /></div>
            <div className='basis-1/3 flex-1'><img src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} /></div>
            <div className='basis-1/3 flex-1'><img src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"} /></div>
            <div className='basis-1/3 flex-1'><img src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} /></div>
            <div className='basis-1/3 flex-1'><img src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} /></div>
            <div className='basis-1/3 flex-1'><img src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"} /></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
