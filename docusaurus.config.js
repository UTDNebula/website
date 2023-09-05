// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nebula Labs',
  tagline: `An initiative to build tools to make students' lives easier at UT Dallas.`,
  url: 'https://about.utdnebula.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/nebula-logo-full-bleed.png',
  organizationName: 'UTDNebula',
  projectName: 'project-nebula',
  themeConfig: {
    announcementBar: {
      id: 'join_us',
      content:
        'We are currently updating our website! <a target="_blank" href="https://discord.gg/tcpcnfxmeQ">Join our Discord</a> to get involved!',
      backgroundColor: '#4659A7',
      textColor: '#FFFFFF',
      isCloseable: false,
    },
    metadata: [
      {
        name: 'og:site_name',
        content: 'Nebula Labs',
      },
    ],
    navbar: {
      title: 'Nebula Labs',
      logo: {
        alt: 'Nebula Labs Logo',
        src: 'img/logos/icon.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'projects/overview',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'doc',
          docId: 'divisions/overview',
          position: 'left',
          label: 'Divisions',
        },

        {
          type: 'doc',
          docId: 'api-docs/getting-started',
          position: 'left',
          label: 'Nebula API Docs',
        },
        {
          type: 'doc',
          docId: 'team/meet-team',
          position: 'left',
          label: 'Team',
        },
        {
          to: '/contact',
          label: 'Contact Us',
          position: 'right',
        },
        {
          href: 'https://github.com/UTDNebula/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'The Nebula Family',
          items: [
            {
              label: 'Nebula Planner',
              href: 'https://github.com/UTDNebula/planner',
            },
            {
              label: 'Nebula API',
              href: 'https://github.com/UTDNebula/nebula-api',
            },
            {
              label: 'UTD Survival Guide',
              href: 'https://github.com/UTDNebula/survival-guide',
            },
            {
              label: 'UTD Trends',
              href: 'https://github.com/UTDNebula/utd-trends',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Code of Conduct',
              to: '/code-of-conduct',
            },
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
              label: 'Website Source',
              href: 'https://github.com/UTDNebula/website',
            },
            {
              label: 'Contact Us',
              href: '/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nebula Labs Maintainers. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/UTDNebula/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/UTDNebula/website/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-tailwindcss'],
};
