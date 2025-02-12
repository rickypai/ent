
/**
 * Copyright 2019-present Facebook Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found
 * in the LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'User1',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: '/img/undraw_open_source.svg',
        infoLink: 'https://www.facebook.com',
        pinned: true,
    },
];

const siteConfig = {
    title: 'ent', // Title for your website.
    tagline: 'An entity framework for Go',
    url: 'https://entgo.io', // Your website URL
    baseUrl: '/', // Base URL for your project */

    // Used for publishing and more
    projectName: 'ent',
    organizationName: 'facebook',


    customDocsPath: 'md',
    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc: 'getting-started', label: 'Docs'},
        {doc: 'tutorial-setup', label: 'Tutorial'},
        {href: 'https://pkg.go.dev/entgo.io/ent?tab=doc', label: 'GoDoc', external: true },
        {href: 'https://github.com/ent/ent', label: 'Github', external: true },
        {blog: true, label: 'Blog' },
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/logo.png',
    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#85daff',
        secondaryColor: '#4d8eaa',
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright ${new Date().getFullYear()} Facebook Inc.`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'androidstudio',
        hljs: function(hljs) {
            hljs.registerLanguage('gotemplate', function(hljs) {
                return {
                    name: 'GoTemplate',
                    aliases: ['gotmpl'],
                    keywords: {
                        keyword:
                            'break default func interface select case map struct chan else goto package switch ' +
                            'const fallthrough if range type continue for import return var go defer ' +
                            'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
                            'uint16 uint32 uint64 int uint uintptr rune with define block end',
                        literal:
                            'true false iota nil',
                        built_in: 'append cap close complex copy imag len make new panic print println real recover delete' +
                            'printf fail slice dict list'
                    },
                    contains: [
                        hljs.COMMENT('{{-* */\\*', '\\*/ *-*}}'),
                        hljs.C_LINE_COMMENT_MODE,
                        {
                            className: 'string',
                            variants: [
                                hljs.QUOTE_STRING_MODE,
                                hljs.APOS_STRING_MODE,
                                {begin: '`', end: '`'},
                            ]
                        },
                        {
                            begin: /:=/
                        },
                    ]
                };
            });
            hljs.registerLanguage('graphql', function(hljs) {
                return {
                    name: 'GraphQL',
                    aliases: ['gql'],
                    keywords: {
                        literal: 'Boolean Cursor Float ID Int String Time false null true',
                        keyword: '... enum fragment implements input interface mutation on query scalar schema type union',
                    },
                    contains: [
                        hljs.HASH_COMMENT_MODE,
                        hljs.QUOTE_STRING_MODE,
                        hljs.NUMBER_MODE,
                    ],
                };
            });
        }
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/js/code-block-buttons.js',
        '/js/custom.js',
    ],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    // docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
    gaTrackingId: 'UA-189726777-1',

    algolia: {
        apiKey: 'bfc8175da1bd5078f1c02e5c8a6fe782',
        indexName: 'entgo',
    }
};

module.exports = siteConfig;
