module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'The Wooden Chips Handyman Service',
  siteDescription:
    'The Wooden Chips Handyman Service: A handyman with experience, honesty, and respect',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'The Wooden Chips LLC', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'thewoodenchips@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#A2D6F9', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'The Wooden Chips Handyman Service is ready to help and', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'The Wooden Chips updates',
    description:
      'Updates on our services and mroe'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Organization name',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: '(757)-822-9210',
    email: 'thewoodenchips@gmail.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
