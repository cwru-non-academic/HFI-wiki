const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');



// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Human Fusions Institute - Wiki',
  tagline: 'Because all good work starts with a good foundation',
  url: 'https://cwru-non-academic.github.io/',
  baseUrl: '/HFI-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/HFI-Logo.ico',
  organizationName: 'cwru-non-academic', // Usually your GitHub org/user name.
  projectName: 'HFI-wiki', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],


  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',

          // remarkPlugins: [math],
          // rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'HFI Wiki',
        logo: {
          alt: 'HFILogo',
          src: 'img/HFI-Logo.png',
        },
        items: [
          
          {to: '/blog', label: 'Blog', position: 'left'},

          {type: 'dropdown', position: 'left', label: 'Robotics Wiki' , items: [
            
            {
              type: 'doc',
            docId: 'Robotic-Wikis/Kinova-Gen3/Introduction',
            label: 'Kinova Gen3',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'Franka Emika Panda',
            },
            {
              type: 'doc',
            docId: 'Robotic-Wikis/Gimbal/Introduction',
            label: '2 DOF Gimbal',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'Zed Mini Camera',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'All Robotics Software'
            }

           ]},

           {type: 'dropdown', position: 'left', label: 'VAMR Wiki' , items: [
            
            {
              type: 'doc',
            docId: 'VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up',
            label: 'Callibration and Teleop Unity Interface',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'All VAMR Software',
            },

           ]},

           {type: 'dropdown', position: 'left', label: 'Communications Wiki' , items: [
            
            {
              type: 'doc',
            docId: 'intro',
            label: 'NeuroReality',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'Common Data Library',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'All Communication Software',
            },

           ]},

           {type: 'dropdown', position: 'left', label: 'Stimulators Wiki' , items: [
            
            {
              type: 'doc',
            docId: 'intro',
            label: 'Stim Software',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'Stim Hardware',
            },
            {
              type: 'doc',
            docId: 'intro',
            label: 'All Stimulators',
            },

           ]},

           {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'All Wikis',      //TO DO Change to right link
          },

           {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Archived Wikis', //TO DO Change to right link
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'Human Fusions',
                href: 'https://humanfusions.org/',
              },
              {
                label: 'Case Western Reserve University',
                href: 'https://case.edu/humanfusions/',
              },
              {
                label: 'University of California, Los Angeles',
                href: 'https://biomechatronics.ucla.edu/',
              },
            ],
          },
          {
            title: 'Contributors',
            items: [
              {
                label: 'S. M. Asjad',
                href: 'https://www.linkedin.com/in/smasjad',
              },
              {
                label: 'Luis Mesias Flores',
                href: 'https://www.linkedin.com/in/luis-mesias/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Human Fusions Institute.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
