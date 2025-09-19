
import logo from '../assets/logo.svg'


const aboutItems = [
    {
        label: 'Projetos no repositório',
        number: 10
    }
];


const About = () => {
    return (
        <section id="about" className='section' >
            <div className="container">
                <div className=' bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                    <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Olá! Eu sou Victor Sarti, tenho 20 anos e atualmente estou no 5º semestre de Análise de Sistemas no Senac. <br /> <br />
                     Possuo certificações em programação que demonstram meu comprometimento e conhecimento técnico. Programar é uma verdadeira paixão para mim, o que me motiva a aprender constantemente. <br /> <br /> 
                     Trabalho na Minsait como desenvolvedor, onde aprimoro minhas habilidades práticas e técnicas. Meu objetivo é contribuir para projetos inovadores, com foco na criação de sites modernos e escaláveis, no desenvolvimento de software, APIs e bancos de dados. Estou sempre em busca da excelência nas soluções que ofereço.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className=" flex items-center md:mb-2">
                                        <span className=" text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className=" text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>

                                </div>
                            ))
                        }

                        <img src={logo} width={30} height={30} alt="logo" className='ml-auto md:w-[40px] md:h-[40px]' />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About
