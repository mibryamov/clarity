const fs = require('fs');
const path = require('path');
const markdownItAttrs = require('markdown-it-attrs');

const order = ['code', 'usage', 'demo', 'api', 'accessibility'];

function getChildren(dir) {
  return fs
    .readdirSync(path.join(process.cwd(), dir))
    .filter(file => file.includes('.md') && !file.includes('README'))
    .map(file => `/${dir}/${file.replace('.md', '')}`);
}

function camelCase(str) {
  const parts = str.split('-');
  return parts.map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');
}

function sortComponentChildren(children) {
  return children.sort((a, b) => {
    const aIndex = order.findIndex(o => a.includes(o));
    const bIndex = order.findIndex(o => b.includes(o));
    return aIndex - bIndex;
  });
}

function getComponentChildren() {
  const base = path.join(process.cwd(), 'components');
  const components = fs
    .readdirSync(base)
    .filter(basename => fs.statSync(path.join(base, basename)).isDirectory())
    .map(dir => {
      return {
        title: camelCase(dir),
        path: '/components/' + dir,
        children: [`/components/${dir}/`, ...sortComponentChildren(getChildren(`components/${dir}`))],
      };
    });
  return components;
}

module.exports = {
  title: 'Clarity Design System',
  description: 'Clarity Design System is the premiere design system for application development.',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  dest: '../../dist/website',
  themeConfig: {
    algolia: {
      apiKey: 'd3349af25a19e3824cb48e57fe88fdcb',
      indexName: 'clarity',
    },
    lastUpdated: 'Last Updated',
    search: true,
    sidebar: [
      {
        title: 'Get Started',
        path: '/get-started/',
        children: getChildren('get-started'),
      },
      {
        title: 'Foundation',
        path: '/foundation/',
        children: getChildren('foundation'),
      },
      {
        title: 'Components',
        path: '/components/',
        children: getComponentChildren(),
      },
      {
        title: 'Releases',
        path: '/releases/',
        children: ['/releases/v3'],
      },
    ],
  },
  markdown: {
    extendMarkdown: md => {
      // Disabling include plugin until I figure out if it casuse Vuepress to hang.
      // md.use(require('markdown-it-include'));
      md.use(markdownItAttrs);
    },
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '🔗',
    },
  },
  plugins: [
    'vuepress-plugin-table-of-contents',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    // SUMMARY BLOCK
    [
      'vuepress-plugin-container',
      {
        type: 'summary',
        render: function (tokens, idx) {
          const item = tokens[idx];
          if (item.type === 'container_summary_open') {
            return `<ClrSummary>`;
          } else if (item.type === 'inline') {
            return item.content;
          } else if (item.type === 'container_summary_close') {
            return `</ClrSummary>`;
          }
        },
      },
    ],
  ],
};
