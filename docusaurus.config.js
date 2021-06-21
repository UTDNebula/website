const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Project Nebula by ACM',
  tagline:
    'Information about an initiative to make tools to make students lives easier, built by students.',
  url: 'https://nebula.acmutd.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'acmutd',
  projectName: 'project-nebula',
  themeConfig: {
    navbar: {
      title: 'Project Nebula',
      logo: {
        alt: 'Project Nebula Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'For Contributors',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/acmutd/project-nebula',
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
              label: 'Nebula Web',
              href: 'https://github.com/acmutd/nebula-web',
            },
            {
              label: 'Nebula Data Service',
              href: 'https://github.com/acmutd/nebula-data-service',
            },
            {
              label: 'UTD Survival Guide',
              href: 'https://utdsurvivalguide.netlify.app',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Project Discussion',
              href: 'https://github.com/acmutd/project-nebula/discussions',
            },
            {
              label: 'ACM Discord Server',
              href: 'https://acmutd.co/discord',
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
              label: 'Website Source',
              href: 'https://github.com/acmutd/project-nebula',
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
          editUrl: 'https://github.com/acmutd/project-nebula/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/acmutd/project-nebula/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
