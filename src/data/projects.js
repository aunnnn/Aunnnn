export const categories = [
  'HCI',       // 0
  'iOS',       // 1
  'Java',      // 2
  'Game',      // 3
  'Swift',     // 4
  'Framework', // 5
  'Research',  // 6
  'Python',    // 7
  'Mobile app',// 8
  'Web',       // 9
  'Desktop',   // 10
  'Talk',      // 11
  'ML',        // 12
];

export const projectsInfo = [
  {
    title: 'RHLinePlot',
    categories: [1, 4],
    keyword: 'RHLinePlot',
    subtitle: 'A line plot library like in the Robinhood iOS app in SwiftUI',
    url: 'https://github.com/aunnnn/RHLinePlot',
  },
  {
    title: 'MovingNumbersView',
    categories: [1, 4],
    keyword: 'MovingNumbersView',
    subtitle: 'A label with moving numbers effect like the Robinhood iOS app in SwiftUI',
    url: 'https://github.com/aunnnn/MovingNumbersView',
  },
  {
    title: '*A Corner-based Saliency Model',
    categories: [6, 7],
    keyword: 'CORS',
    subtitle: 'Visual saliency prediction (undergrad thesis)',
  },
  {
    title: 'App Store Interactive Transition Revealed',
    categories: [1, 4, 6, 11],
    keyword: 'AppStore',
    subtitle: 'Seamless interaction like Apple',
  },
  {
    title: 'Visualize NLP classifier',
    categories: [12, 7],
    keyword: 'CSE256',
    subtitle: 'Final group project for CSE256',
  },
  {
    title: 'Platonos',
    categories: [0, 9],
    keyword: 'Platonos',
    subtitle: 'Social network platform that encourages discussions',
  },
  {
    title: 'AutoSketch',
    categories: [1, 6],
    keyword: 'AutoSketch',
    subtitle: 'Visual documentation for iOS',
    url: 'https://blog.oozou.com/documenting-ios-apps-visually-e8736b431cf7',
  },
  {
    title: 'ViewElements',
    categories: [1, 4, 5],
    keyword: 'ViewElements',
    subtitle: 'Simplified views management',
  },
  {
    title: 'CreativeSwift',
    categories: [1, 4, 5],
    keyword: 'CreativeSwift',
    subtitle: 'Creative coding framework in Swift',
  },
  {
    title: 'Swifty Localization',
    categories: [1, 4],
    keyword: 'SwiftyLocalization',
    subtitle: 'Better localization workflow for mobile development',
  },
  {
    title: 'Quick Thai News',
    categories: [0, 1, 8],
    keyword: 'QuickThaiNews',
    subtitle: 'Minimal news reader iOS app',
  },
  {
    title: 'EmojiFaces',
    categories: [9],
    keyword: 'EmojiFaces',
    subtitle: 'Turn faces into Emojis',
  },
  {
    title: 'Shills.lol',
    categories: [9],
    keyword: null,
    subtitle: 'The place to shill cryptocurrencies',
    url: 'https://shills.lol',
  },
  {
    title: 'Studio Live',
    categories: [0, 1, 8],
    keyword: 'StudioLive',
    subtitle: 'Animation creator iOS app',
  },
  {
    title: 'Hover Explorer',
    categories: [0, 2, 10],
    keyword: 'HoverExplorer',
    subtitle: 'Alternative file explorer',
  },
  {
    title: 'The Space Boxer',
    categories: [2, 3, 10],
    keyword: 'SpaceBoxer',
    subtitle: '2D desktop game',
  },
  {
    title: 'Diamond Dash Bot',
    categories: [2, 10],
    keyword: 'DiamondDashBot',
    subtitle: 'Bot that plays Diamond Dash',
  },
];

// Only projects with a local detail page component (i.e., no external `url`).
export const detailPageKeywords = [
  'studiolive', 'quickthainews', 'cors', 'creativeswift', 'diamonddashbot',
  'spaceboxer', 'viewelements', 'hoverexplorer', 'platonos', 'emojifaces',
  'appstore', 'cse256', 'swiftylocalization',
];
