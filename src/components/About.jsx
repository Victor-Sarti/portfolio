
import logo from '../assets/logo.svg'


const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 1
    }
];


const About = () => {
    return (
        <section id="about" className='section' >
            <div className="container">
                <div className=' bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                    <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
                        illo exercitationem cum eos voluptas quis quam commodi. Dignissimos
                        quasi ad rem, perferendis harum dolore eos blanditiis dicta incidunt facere
                        voluptatum totam, minus obcaecati, eum temporibus illo alias sunt impedit esse!
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
