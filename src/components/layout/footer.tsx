import React from 'react';

type Props = {

}

const footerLinks = {
  "Product": [
    "Overview",
    "Features",
    "Solutions",
    "Tutorials",
    "Pricing",
    "Releases",
  ],
  "Company": [
    "About us",
    "Careers",
    "Press",
    "News",
    "Media Kit",
    "Contact",
  ],
  "Resources": [
    "Blog",
    "Newsletter",
    "Events",
    "Help Center",
    "Guides",
    "Support",
  ],
  "Use cases": [
    "Marketing",
    "Sales",
    "Customer Service",
    "Product",
    "Engineering",
    "Finance",
  ],
  "Social": [
    "Twitter",
    "Facebook",
    "LinkedIn",
    "Instagram",
    "YouTube",
    "GitHub",
  ],
  "Legal": [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "GDPR",
    "Data Process",
    "Contact",
  ],
}

const Footer = (props: Props) => {
  const {} = props;

  return (
    <footer
      className="text-white bg-black overflow-hidden rounded-none sm:rounded-3xl flex flex-col items-center justify-center relative mt-8 py-12 px-8"
    >
      <h5 className="text-2xl font-semibold text-center">Let's get started on something great</h5>
      <h6 className='leading-10 text-base text-center'>Sign up to our newsletter</h6>
      <form className='mt-6 flex gap-2'>
        <input 
          className='border-2 rounded-lg h-8 sm:h-10 border-white bg-transparent px-2 sm:px-4 font-bold text-sm focus:outline-none' 
          placeholder='example@domain.com'
        />
        <button className='border-2 rounded-lg h-8 sm:h-10 border-white bg-transparent px-2 sm:px-4 font-bold text-sm'>Sign Up</button>
      </form>
      <div className='flex justify-between sm:justify-evenly items-center w-full'>
        {Object.entries(footerLinks).map(([header, items], index) => (
          <div className={`mt-8 ${index > 2 && 'hidden sm:block'}`} key={header}>
            <h6 className='text-sm font-bold'>{header}</h6>
            <ul className='mt-4'>
              {items.map((text) => (
                <li className='mt-2' key={text}>
                  <a href="#" className='text-sm relative group'>
                    {text}
                    <span className='absolute top-full h-0.5 left-0 right-full group-hover:right-0 bg-white transition-all' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='w-full mt-16 sm:px-20'>
        <p className='font-semibold text-xs float-right'>©2023 TheWriteStuff. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
