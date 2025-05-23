import React from 'react';

const socials = [
  {
    href: 'mailto:gadicherlasri@gmail.com',
    label: 'Email',
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1em] h-[1em]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Sr1g4',
    label: 'GitHub',
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1em] h-[1em]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/srivatsa-gadicherla-b56553221/',
    label: 'LinkedIn',
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-[1em] h-[1em]">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
];

export default function Socials() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '1.5rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        gap: '1rem'
      }}
    >
      {socials.map(({ href, label, svg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group text-neutral-200 text-[2.8rem] md:text-[3.5rem] transition-colors duration-200"
        >
          <span className="inline-flex items-center justify-center rounded-full transition-all duration-200 group-hover:bg-neutral-900/70 group-hover:shadow-lg group-hover:text-cyan-400 w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem]">
            {svg}
          </span>
        </a>
      ))}
    </div>
  );
} 