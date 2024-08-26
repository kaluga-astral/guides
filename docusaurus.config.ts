import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as process from "process";

const config: Config = {
  title: 'Astral.Frontend Guides',
  tagline: 'Frontend стандарты Астрал-Софт',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kaluga-astral.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/guides',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaluga-astral', // Usually your GitHub org/user name.
  projectName: 'guides', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'ru'],
      }
    ]
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kaluga-astral/guides/tree/main/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    headTags: [
      {
        tagName: 'meta',
        attributes: {
          name: 'description',
          content: 'Стандарты frontend-кода Астрал-Софт',
        },
      }
    ],
    navbar: {
      title: 'Frontend Guides',
      logo: {
        alt: 'Логотип Астрал-Софт',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          href: '/docs/issues',
          label: 'Issues',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          href: '/docs/arch/intro',
          label: 'Architecture Guide',
        },
        {
          href: 'https://github.com/kaluga-astral/guides',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
