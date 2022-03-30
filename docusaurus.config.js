// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waypost',
  tagline: 'A/B Testing and Feature Flagging',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'waypost-io', // Usually your GitHub org/user name.
  projectName: 'waypost', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/waypost-io/waypost-documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Waypost',
        logo: {
          alt: 'Waypost Logo',
          src: 'img/Waypost_graphic_color.svg',
          srcDark: 'img/Waypost_logo_color.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/waypost-io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quickstart',
                to: '/docs/quickstart',
              },
              {
                label: 'About',
                to: '/docs/introduction',
              },
              {
                label: 'SDKs',
                to: '/docs/sdk/overview',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/waypost-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Waypost. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/shadesOfPurple'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
