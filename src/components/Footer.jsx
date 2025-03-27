import React from 'react'
import {ButtonPrimary} from './Button';
import logo from '../assets/logo.svg'

const sitemap = [
    {
        label: 'Início',
        href: '#home'
    },
    {
        label: 'Sobre',
        href: '#about'
    },
    {
        label: 'Projeto',
        href: '#work'
    },
    {
        label: 'Contata-me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/Victor-Sarti'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/victor-sarti-ab6807249/'
    },

    {
        label: 'Instagram',
        href: 'https://www.instagram.com/_sarti00/'
    }
];

export default function Footer() {
    return (
        <footer className='section'>
            <div className="container">

                <div className="lg: grid lg:grid-cols-2 ">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]"> Vamos trabalhar juntos hoje!
                        </h2>
                        <ButtonPrimary href="mailto:sartivictor24@gmail.com?subject=Início de Projeto&body=Olá, gostaria de discutir sobre um novo projeto." label='Inicie Agora!' icon="chevron_right" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2"> Sitemap</p>
                            <ul>
                                {sitemap.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200" > {label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <p className="mb-2"> Social</p>
                            <ul>
                                {socials.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a href={href} target='_blank' className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200" > {label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>            
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className=''>
                        <img src={logo} alt="logo" width={40} height={40} />
                    </a>

                    <p className='text-zinc-500 text-sm '> &copy; 2025 <span className='text-zinc-200'>VictorSarti</span> </p>
                </div>

            </div>
        </footer>
    )
}
