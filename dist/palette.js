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
    crust: '#e1d9d7', // inputs / quickInput (lightest surface)
    darker: '#c8bcbe', // unfocused inactive tab (recedes)
    mantle: '#cec3c4', // sidebar, activity bar, panel, title bar, tabs header
    darkest: '#2a2330', // shadow + dark contrast-fg on accent backgrounds
    base: '#dbd3d1', // editor bg, terminal bg, minimap; low-glare matte paper
    buttonFg: '#fff7f7', // button / extension button foreground
    listHover: '#d4c9ca', // list hover, tab hover, statusBar item hover
    surface1: '#d2c8c7', // hover widgets, breadcrumb picker, inlay hints; distinct from editor
    lineHighlight: '#d0c6c5', // editor line highlight; visible without becoming a stripe
    inactiveSelection: '#c8bdc1', // editor inactive selection
    termBlack: '#141414eb', // terminal ansi black (must stay dark)
    surface0: '#d0c5c4', // breadcrumb bg, editorCursor bg, menu, peek title
    listActive: '#c2b4ba', // list active/focus, statusBarItem active, quickInputList focus
    selectionBg: '#beb0b8', // editor selection background
    overlay0: '#b8acb0', // sash hover, text separator, panel/sidebar border
    surface2: '#cbc0c0', // editorGutter comment, stickyScroll hover, suggest selected
    findRange: '#b7c4c6', // editor find range highlight (faint teal)
    overlay1: '#d0c5c4', // checkbox, listFilter, tree inactive, settings inputs
    overlay2: '#b4a7ac', // various UI separators, scrollbars, borders, indent guide
    scrollActiveDark: '#8a8490', // scrollbar slider active (alpha base only)
    mauve: '#895873', // selection, badge, picker, progress bar
    subtext0: '#574f54', // statusBar fg, editorCodeLens, line number
    teal: '#92203f', // keywords (soft crimson on light)
    brightCyan: '#185f6d', // terminal bright cyan
    brightBlue: '#1b5d80', // terminal bright blue
    brightGreen: '#126447', // terminal bright green
    sky: '#1b5d80', // cursor, links, tree guide (darker teal for light)
    htmlPunct: '#141414ad', // HTML tag punctuation
    breakpointUnverified: '#9a6781', // debug icon unverified breakpoint
    subtext1: '#554d52', // disabled fg, panelTitle inactive, inlay type
    green: '#0e6446', // macros, decorators, added resources, strings
    rose: '#995466', // button primary background
    lavender: '#5c479d', // property, constructor, method specials
    brightWhite: '#3c3640', // terminal bright white (dark on light bg: 9:1 vs #f8f3f3; #ffffff was invisible 1.10:1)
    roseHover: '#914c5e', // button hover background
    buttonSecondaryHover: '#b8acb0', // secondary button hover background
    roseMid: '#966071', // focus border
    red: '#aa1f43', // errors, deleted resources
    neutral: '#242024cc', // C/C++ neutrals, namespaces
    text: '#242024eb', // main foreground
    parameter: '#242024cc', // semantic parameter token
    e4base: '#141414', // must be dark (used with alpha for comments/brackets)
    pink: '#70448e', // strings, CSS values, template literals
    peachWarm: '#87421e', // integers, units, JS functions
    brightYellow: '#76500f', // terminal bright yellow
    peach: '#854625', // functions, self param, method declarations
    tabActiveFg: '#1f1a1c', // tab active foreground (dark for light bg)
    sponsor: '#c0568f', // extension sponsor icon
    roseLight: '#934d60', // icon fg, active tab border, active line number (dark rose)
    errorRed: '#aa1f43', // PHP illegal, error token
    brightMagenta: '#89356a', // terminal bright magenta
    brightRed: '#9f3046', // terminal bright red
    metaTag: '#76500f', // meta.tag
    yellow: '#76500f', // numbers, warnings, constants, git modified
    sapphire: '#10547d', // class names, CSS property names, blue links
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
