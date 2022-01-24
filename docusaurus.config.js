const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Project Nebula',
  tagline: `An initiative to build tools to make students' lives easier at UT Dallas.`,
  url: 'https://about.utdnebula.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/nebula-logo-full-bleed.png',
  organizationName: 'UTDNebula',
  projectName: 'project-nebula',
  themeConfig: {
    navbar: {
      title: 'Project Nebula',
      logo: {
        alt: 'Project Nebula Logo',
        src: 'img/logos/nebula-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about/overview',
          position: 'left',
          label: 'About',
        },
        {
          type: 'doc',
          docId: 'maintainers/overview',
          position: 'left',
          label: 'Maintainer Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/UTDNebula/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'The Nebula Family',
          items: [
            {
              label: 'Nebula Planner',
              href: 'https://github.com/UTDNebula/website',
            },
            {
              label: 'Nebula API',
              href: 'https://github.com/UTDNebula/nebula-api',
            },
            {
              label: 'UTD Survival Guide',
              href: 'https://utd.guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Project Discussion',
              href: 'https://github.com/UTDNebula/website/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'ACM UTD Website',
              href: 'https://acmutd.co',
            },
            {
              label: 'Website Source',
              href: 'https://github.com/UTDNebula/website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Nebula Maintainers. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/UTDNebula/website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/UTDNebula/website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
