import { ArrowDropDown } from '@mui/icons-material'
import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-scroll'

export default function LandingPage() {
  return (
    <div className={styles.main}>

        <div className={styles.section_1} id='section_1'>

            <div className={styles.navbar}>
                <nav class="bg-transparent border-gray-200 px-1 py-2.5 rounded">
                <div class="container flex flex-wrap items-center justify-between mx-3">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-4xl font-semibold whitespace-nowrap text-white">IDentify</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                        <a href="#section_1" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                        <Link to='section_2' smooth={true}><a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Stacks</a></Link>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Model</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Developers</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>

            <div className={styles.subsection_1}>
                <div className={styles.text_container}>
                    <h1>Face Recognition App</h1>
                    <p>Unimodal biometric identity verification tools for your eKYC system</p>
                    <a href="/facerecog">
                        Try Our Demo
                    </a>
                </div>
                <div className={styles.figure_container}>
                    <img src='lp-1.png'/>
                </div>
            </div>

            <footer> 
                <p>Learn More</p>
                <Link to='section_2' smooth={true}><ArrowDropDown className={styles.arrow} color='white'/></Link>
            </footer>
        </div>

        <div className={styles.section_2} id='section_2'>
            <h1 className={styles.title}>Technology Stacks</h1>
            <div className={styles.figure_container}>
                <div className={styles.figure}>
                    <img className='bg-white w-5/6 h-auto rounded-lg text-white' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png'/>
                    <h2>Python Flask</h2>
                </div>
                <div className={styles.figure}>
                    <img className='rounded-lg w-4/6 h-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                    <h2>React Javascript</h2>
                </div>
                <div className={styles.figure}>
                    <img className='w-4/6 h-auto' src='https://miro.medium.com/max/616/1*Tc88hRbPlTQCgP9COBVqRg.png'/>
                    <h2>Google Cloud Platform</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
