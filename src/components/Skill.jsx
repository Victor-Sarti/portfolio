import SkillCard from "./SkillCard";
import figma from "../assets/figma.svg"
import css from "../assets/css3.svg"
import js from "../assets/javascript.svg"
import nodejs from "../assets/nodejs.svg"
import expo from "../assets/expo.png"
import sql from "../assets/mysql.png"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwindcss.svg"

const skillItem = [
  { imgSrc: figma, label: 'Figma', desc: 'Design tool' },
  { imgSrc: css, label: 'CSS', desc: 'User Interface' },
  { imgSrc: js, label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: nodejs, label: 'NodeJS', desc: 'Web Server' },
  { imgSrc: expo, label: 'Expo', desc: 'Framework for React Native' },
  { imgSrc: sql, label: 'MySql', desc: 'Database' },
  { imgSrc: react, label: 'React', desc: 'Framework' },
  { imgSrc: tailwind, label: 'TailwindCSS', desc: 'User Interface' },
];

const Skill = () => {
  return (
   <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies
      I use to create exceptional, high-performing 
            websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => 
                    (
                    
                     <SkillCard 
                     key={key}
                     imgSrc={imgSrc}
                     label={label}
                     desc={desc}
                     classes="reveal-up"
                     />
                    ))
                }
            </div>

        </div>
   </section>
  )
}
export default Skill
