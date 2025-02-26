import ProjectCard from "./ProjectCard";
import itech from "../assets/itechplace.png"

const works = [
    {
      imgSrc: itech,
      title: 'ItechPlace',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://itechplace-git-main-victors-projects-5fb761b6.vercel.app/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];



const Work = () => {

    return(
   <section id="work" className="section">

    <div className="container">
        <h2 className="headline-2 mb-8"> My portfólio highlights</h2>

        <div className="">
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