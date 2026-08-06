"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storm = exports.light = exports.dark = void 0;
exports.dark = {
    crust: '#0f0f14',
    darker: '#101017',
    mantle: '#101016',
    darkest: '#12121c',
    base: '#14141c',
    buttonFg: '#1a1114',
    listHover: '#1c1c27',
    surface1: '#1b1b28',
    lineHighlight: '#20202b',
    inactiveSelection: '#272738',
    termBlack: '#22222d',
    surface0: '#222232',
    listActive: '#2c2c3a',
    selectionBg: '#32324b',
    overlay0: '#30304a',
    surface2: '#313244',
    findRange: '#3e5767',
    overlay1: '#45475a',
    overlay2: '#585b70',
    scrollActiveDark: '#6c7086',
    mauve: '#7c6a8a',
    subtext0: '#7f849c',
    teal: '#72c1bd',
    brightCyan: '#6bd7ca',
    brightBlue: '#74a8fc',
    brightGreen: '#89d88b',
    sky: '#89dceb',
    htmlPunct: '#a4a4a4',
    breakpointUnverified: '#a6738c',
    subtext1: '#a6adc8',
    green: '#8fb368',
    rose: '#a9828a',
    lavender: '#9a8ee8',
    brightWhite: '#bac2de',
    roseHover: '#b99098',
    buttonSecondaryHover: '#56596e',
    roseMid: '#b09199',
    red: '#cc7c8a',
    neutral: '#cccccc',
    text: '#cdd6f4',
    parameter: '#d6d6dd',
    e4base: '#e4e4e4',
    pink: '#cd82c9',
    peachWarm: '#dab57b',
    brightYellow: '#ebd391',
    peach: '#de9f75',
    tabActiveFg: '#dccacc',
    sponsor: '#f5c2e7',
    roseLight: '#f5e0dc',
    errorRed: '#f14c4c',
    brightMagenta: '#f2aede',
    brightRed: '#f37799',
    metaTag: '#e4b75f',
    yellow: '#e4b75f',
    sapphire: '#79b3ef',
    white: '#ffffff',
};
exports.light = {
    // Backgrounds — lightest to darkest (inverted polarity vs dark)
    crust: '#e9e2e0', // inputs / quickInput (lightest floating surface)
    darker: '#d1c6c8', // unfocused inactive tab (recedes)
    mantle: '#d8cecf', // sidebar, activity bar, panel, title bar, tabs header
    darkest: '#2a2330', // shadow + dark contrast-fg on accent backgrounds
    base: '#e2dad8', // editor bg, terminal bg, minimap; warm neutral paper
    buttonFg: '#fff7f7', // button / extension button foreground
    listHover: '#d3c9ca', // quiet hover against chrome
    surface1: '#dcd3d2', // hover widgets, breadcrumb picker, inlay hints
    lineHighlight: '#d7cecd', // visible without becoming a stripe
    inactiveSelection: '#cec2c6', // editor inactive selection
    termBlack: '#141414eb', // terminal ansi black (must stay dark)
    surface0: '#dacfd0', // breadcrumb bg, editorCursor bg, menu, peek title
    listActive: '#c6b8bf', // list active/focus, statusBarItem active, quickInputList focus
    selectionBg: '#c4b5bd', // editor selection background
    overlay0: '#c1b5b9', // sash hover, text separator, panel/sidebar border
    surface2: '#d3c8c9', // editorGutter comment, stickyScroll hover, suggest selected
    findRange: '#c1ced0', // editor find range highlight (faint teal)
    overlay1: '#dacfd0', // checkbox, listFilter, tree inactive, settings inputs
    overlay2: '#b9acb1', // various UI separators, scrollbars, borders, indent guide
    scrollActiveDark: '#8a8490', // scrollbar slider active (alpha base only)
    mauve: '#906078', // selection, badge, picker, progress bar
    subtext0: '#5d555a', // statusBar fg, editorCodeLens, line number
    teal: '#246568', // keywords/operators: dark counterpart of Dark teal
    brightCyan: '#1e6670', // terminal bright cyan
    brightBlue: '#24658b', // terminal bright blue
    brightGreen: '#286b49', // terminal bright green
    sky: '#256778', // cursor, links, informational contrast
    htmlPunct: '#141414ad', // HTML tag punctuation
    breakpointUnverified: '#9a6781', // debug icon unverified breakpoint
    subtext1: '#5a5257', // disabled fg, panelTitle inactive, inlay type
    green: '#316843', // macros, decorators, added resources
    rose: '#9c586a', // button primary background
    lavender: '#63509c', // properties and method specials
    brightWhite: '#403941', // terminal bright white (dark on light background)
    roseHover: '#934f61', // button hover background
    buttonSecondaryHover: '#c1b5b9', // secondary button hover background
    roseMid: '#9f697a', // focus border
    red: '#ad2748', // errors, deleted resources
    neutral: '#2b272bcc', // C/C++ neutrals, namespaces
    text: '#242024eb', // main foreground
    parameter: '#2b272bcc', // semantic parameter token
    e4base: '#141414', // must be dark (used with alpha for comments/brackets)
    pink: '#8b416f', // strings: dark rose-magenta counterpart of Dark pink
    peachWarm: '#75571e', // methods, integers and units
    brightYellow: '#785913', // terminal bright yellow
    peach: '#8f492a', // functions and declarations
    tabActiveFg: '#211c1f', // tab active foreground (dark for light bg)
    sponsor: '#bd5388', // extension sponsor icon
    roseLight: '#9b5668', // icon fg, active tab border, active line number
    errorRed: '#ad2748', // PHP illegal, error token
    brightMagenta: '#873e70', // terminal bright magenta
    brightRed: '#a8324d', // terminal bright red
    metaTag: '#785913', // meta.tag
    yellow: '#785913', // constants, warnings, git modified
    sapphire: '#1f5f88', // classes/types and blue links
    white: '#ffffff', // badge fg, find match fg
};
exports.storm = {
    crust: '#0d1018',
    darker: '#10131b',
    mantle: '#111520',
    darkest: '#121724',
    base: '#161b28',
    buttonFg: '#0c0e18',
    listHover: '#18243b',
    surface1: '#17213a',
    lineHighlight: '#192538',
    inactiveSelection: '#1e2a50',
    termBlack: '#1a2236',
    surface0: '#1a2648',
    listActive: '#22345d',
    selectionBg: '#283866',
    overlay0: '#273a6c',
    surface2: '#263560',
    findRange: '#1e3860',
    overlay1: '#334478',
    overlay2: '#40508c',
    scrollActiveDark: '#5068b4',
    mauve: '#6068b0',
    subtext0: '#7a88a8',
    teal: '#82d2d8',
    brightCyan: '#62d0c8',
    brightBlue: '#66a8f8',
    brightGreen: '#82d888',
    sky: '#7ed8f0',
    htmlPunct: '#9298b0',
    breakpointUnverified: '#9872a8',
    subtext1: '#9298c2',
    green: '#a0c878',
    rose: '#a07888',
    lavender: '#a2a0f8',
    brightWhite: '#b0c0de',
    roseHover: '#b08898',
    buttonSecondaryHover: '#3d568f',
    roseMid: '#c0a0b8',
    red: '#c07888',
    neutral: '#c0c8e0',
    text: '#c6d2f0',
    parameter: '#c4cee4',
    e4base: '#dce4f4',
    pink: '#d888e0',
    peachWarm: '#d8c278',
    brightYellow: '#dcd090',
    peach: '#e49870',
    tabActiveFg: '#e8eeff',
    sponsor: '#d8b8f0',
    roseLight: '#d4a8c0', // cool rose accent: brand warmth on cold base (was #cec0e8 pure lavender — too far from rose identity)
    errorRed: '#f04860',
    brightMagenta: '#e0a8f0',
    brightRed: '#f07888',
    metaTag: '#e8c870',
    yellow: '#e4c860',
    sapphire: '#7cc8ff',
    white: '#ffffff',
};
