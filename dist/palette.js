"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storm = exports.warm = exports.light = exports.dark = void 0;
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
    crust: '#eae3e1', // inputs / quickInput (lightest surface)
    darker: '#d8cecf', // unfocused inactive tab (recedes)
    mantle: '#dbd1d2', // sidebar, activity bar, panel, title bar, tabs header
    darkest: '#2a2330', // shadow + dark contrast-fg on accent backgrounds
    base: '#e4dcda', // editor bg, terminal bg, minimap; low-glare matte paper
    buttonFg: '#fff7f7', // button / extension button foreground
    listHover: '#dfd5d6', // list hover, tab hover, statusBar item hover
    surface1: '#ded5d4', // hover widgets, breadcrumb picker, inlay hints; distinct from editor
    lineHighlight: '#dad1d0', // editor line highlight; visible without becoming a stripe
    inactiveSelection: '#d5cbce', // editor inactive selection
    termBlack: '#141414eb', // terminal ansi black (must stay dark)
    surface0: '#ddd3d2', // breadcrumb bg, editorCursor bg, menu, peek title
    listActive: '#d4c7cd', // list active/focus, statusBarItem active, quickInputList focus
    selectionBg: '#d1c3cc', // editor selection background
    overlay0: '#c5b9be', // sash hover, text separator, panel/sidebar border
    surface2: '#d9cece', // editorGutter comment, stickyScroll hover, suggest selected
    findRange: '#c2cfd1', // editor find range highlight (faint teal)
    overlay1: '#ddd3d2', // checkbox, listFilter, tree inactive, settings inputs
    overlay2: '#c1b4b9', // various UI separators, scrollbars, borders, indent guide
    scrollActiveDark: '#8a8490', // scrollbar slider active (alpha base only)
    mauve: '#94627d', // selection, badge, picker, progress bar
    subtext0: '#645b61', // statusBar fg, editorCodeLens, line number
    teal: '#9b2148', // keywords (soft crimson on light)
    brightCyan: '#206977', // terminal bright cyan
    brightBlue: '#23668b', // terminal bright blue
    brightGreen: '#1b6e51', // terminal bright green
    sky: '#23668b', // cursor, links, tree guide (darker teal for light)
    htmlPunct: '#141414ad', // HTML tag punctuation
    breakpointUnverified: '#9a6781', // debug icon unverified breakpoint
    subtext1: '#62595f', // disabled fg, panelTitle inactive, inlay type
    green: '#166e50', // macros, decorators, added resources, strings
    rose: '#a25d6e', // button primary background
    lavender: '#6550aa', // property, constructor, method specials
    brightWhite: '#3c3640', // terminal bright white (dark on light bg: 9:1 vs #f8f3f3; #ffffff was invisible 1.10:1)
    roseHover: '#9c5868', // button hover background
    buttonSecondaryHover: '#c1b6ba', // secondary button hover background
    roseMid: '#a66f7f', // focus border
    red: '#b52449', // errors, deleted resources
    neutral: '#242024cc', // C/C++ neutrals, namespaces
    text: '#242024eb', // main foreground
    parameter: '#242024cc', // semantic parameter token
    e4base: '#141414', // must be dark (used with alpha for comments/brackets)
    pink: '#7a4d9a', // strings, CSS values, template literals
    peachWarm: '#934a23', // integers, units, JS functions
    brightYellow: '#825817', // terminal bright yellow
    peach: '#91502d', // functions, self param, method declarations
    tabActiveFg: '#1f1a1c', // tab active foreground (dark for light bg)
    sponsor: '#c0568f', // extension sponsor icon
    roseLight: '#a05566', // icon fg, active tab border, active line number (dark rose)
    errorRed: '#b52449', // PHP illegal, error token
    brightMagenta: '#963e75', // terminal bright magenta
    brightRed: '#aa384e', // terminal bright red
    metaTag: '#825817', // meta.tag
    yellow: '#825817', // numbers, warnings, constants, git modified
    sapphire: '#175c86', // class names, CSS property names, blue links
    white: '#ffffff', // badge fg, find match fg
};
exports.warm = {
    crust: '#120e0f',
    darker: '#151112',
    mantle: '#191415',
    darkest: '#1c1617',
    base: '#1f191a',
    buttonFg: '#1a0f10',
    listHover: '#282021',
    surface1: '#2a2021',
    lineHighlight: '#292122',
    inactiveSelection: '#35292b',
    termBlack: '#241c1deb',
    surface0: '#28201f',
    listActive: '#352729',
    selectionBg: '#402f30',
    overlay0: '#423033',
    surface2: '#342829',
    findRange: '#443633',
    overlay1: '#514044',
    overlay2: '#66535a',
    scrollActiveDark: '#80656b',
    mauve: '#876a76',
    subtext0: '#92777a',
    teal: '#78cbc8',
    brightCyan: '#6ccfc5',
    brightBlue: '#78a8f3',
    brightGreen: '#8ccf8a',
    sky: '#d59a72',
    htmlPunct: '#a99691',
    breakpointUnverified: '#a1737a',
    subtext1: '#ad9291',
    green: '#b0cc78', // warmer yellow-green vs Dark #a8cc7c (was 1:1 copy, now warm-shifted)
    rose: '#b87968',
    lavender: '#b1a0f0',
    brightWhite: '#dfd0c9',
    roseHover: '#c58a76',
    buttonSecondaryHover: '#6c555b',
    roseMid: '#d19a82',
    red: '#d07b88',
    neutral: '#d0c7c2',
    text: '#ead9cf',
    parameter: '#dbcac2',
    e4base: '#e3d5cc',
    pink: '#e89bc8', // warm rose-pink vs Dark #e394dc (was 1:1 copy, now warmer/less magenta)
    peachWarm: '#e5b883',
    brightYellow: '#e6c981',
    peach: '#e9a37d',
    tabActiveFg: '#f4e7df',
    sponsor: '#d99a8a',
    roseLight: '#e7b49c',
    errorRed: '#d45f73',
    brightMagenta: '#f0a9d8',
    brightRed: '#f07b93',
    metaTag: '#e9bd80',
    yellow: '#edc66d',
    sapphire: '#8abfff',
    white: '#ffffff',
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
