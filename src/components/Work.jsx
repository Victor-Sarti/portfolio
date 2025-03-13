import ProjectCard from "./ProjectCard";
import itech from "../assets/itechplace.png"
import buguer from "../assets/figma1.png"
import gym from "../assets/gym.png"
import music from "../assets/schoolmusic.png"
import todo from "../assets/todo.png"

const works = [
    {
      imgSrc: itech,
      title: 'ItechPlace',
      tags: ['API', 'Development'],
      projectLink: 'https://itechplace-git-main-victors-projects-5fb761b6.vercel.app/'
    },
    {
      imgSrc: buguer,
      title: 'Menu Hamburguer',
      tags: ['Web-design', 'Development'],
      projectLink:'https://www.figma.com/proto/8AFc98jfGakcWxL8xnwPwg/Projeto-Hamburguer-Byel?node-id=1-2&p=f&t=BXBP8Zu9fx8ruTzT-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'
    },
    {
      imgSrc: gym,
      title: 'Gym',
      tags: [ 'API', 'Development' ],
      projectLink: 'https://teste-gym-tau.vercel.app/'
    },
    {
      imgSrc: todo,
      title: 'ToDoList',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: music,
      title: 'Music school',
      tags: ['Development'],
      projectLink: 'https://template-school-gold.vercel.app/'
    },
  ];



const Work = () => {

    return(
   <section id="work" className="section">

    <div className="container">
        <h2 className="headline-2 mb-8"> My portfólio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc,title,tags,projectLink}, key) => (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                  />

                
            ))}
        </div>
    </div>

   </section>     
    )
}

export default Work