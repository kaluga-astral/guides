import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as process from "process";

const config: Config = {
  title: 'Astral.Frontend Guides',
  tagline: 'Стандарты проектирования frontend Астрал-Софт',
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
      title: 'Frontend Style Guide',
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
          href: 'https://github.com/kaluga-astral/guides',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Rules',
          items: [
            {
              label: 'React',
              to: '/docs/category/react',
            },
          ],
        },
        {
          title: 'Eslint configs',
          items: [
            {
              label: '@astral/eslint-config-react-ts',
              to: 'https://www.npmjs.com/package/@astral/eslint-config-react-ts',
            },
            {
              label: '@astral/eslint-config-node',
              to: 'https://www.npmjs.com/package/@astral/eslint-config-node',
            },
            {
              label: '@astral/eslint-config-node-ts',
              to: 'https://www.npmjs.com/package/@astral/eslint-config-node-ts',
            },
            {
              label: '@astral/eslint-config-vitest',
              to: 'https://www.npmjs.com/package/@astral/eslint-config-vitest',
            },
            {
              label: '@astral/eslint-config-react-vitest',
              to: 'https://www.npmjs.com/package/@astral/eslint-config-react-vitest',
            },
          ],
        },
        {
          title: 'Stylelint configs',
          items: [
            {
              label: '@astral/stylelint-config-styled',
              to: 'https://www.npmjs.com/package/@astral/stylelint-config-styled',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    themes: ['@docusaurus/theme-search-algolia'],
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || 'test',
      apiKey: process.env.ALGOLIA_API_KEY || 'test',
      indexName: 'guides',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
