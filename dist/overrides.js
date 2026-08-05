"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MANAGED_TOKEN_SCOPES = exports.ALL_MANAGED_COLOR_KEYS = exports.BRACKET_KEYS = exports.WORKBENCH_MINIMAL_EXTRA_KEYS = exports.WORKBENCH_FLAT_KEYS = exports.ACCENT_KEYS = exports.THEMES = void 0;
exports.buildColorOverrides = buildColorOverrides;
exports.buildTokenOverrides = buildTokenOverrides;
exports.deepEqual = deepEqual;
const palette_1 = require("./palette");
exports.THEMES = {
    'Roveliese Dark': palette_1.dark,
    'Roveliese Light': palette_1.light,
    'Roveliese Storm': palette_1.storm,
};
exports.ACCENT_KEYS = [
    'focusBorder',
    'badge.background',
    'progressBar.background',
    'activityBarBadge.background',
    'pickerGroup.border',
    'pickerGroup.foreground',
    'commandCenter.activeBorder',
    'list.focusOutline',
    'inputOption.activeBorder',
    'settings.modifiedItemIndicator',
    'tab.lastPinnedBorder',
];
exports.WORKBENCH_FLAT_KEYS = [
    'sideBar.background',
    'editorGroupHeader.tabsBackground',
    'panel.background',
];
exports.WORKBENCH_MINIMAL_EXTRA_KEYS = [
    'tab.inactiveBackground',
    'tab.activeBackground',
    'activityBar.background',
    'statusBar.background',
];
exports.BRACKET_KEYS = [
    'editorBracketHighlight.foreground1',
    'editorBracketHighlight.foreground2',
    'editorBracketHighlight.foreground3',
    'editorBracketHighlight.foreground4',
    'editorBracketHighlight.foreground5',
    'editorBracketHighlight.foreground6',
];
exports.ALL_MANAGED_COLOR_KEYS = [
    ...exports.ACCENT_KEYS,
    ...exports.WORKBENCH_FLAT_KEYS,
    ...exports.WORKBENCH_MINIMAL_EXTRA_KEYS,
    ...exports.BRACKET_KEYS,
];
exports.MANAGED_TOKEN_SCOPES = ['keyword', 'comment'];
function buildColorOverrides(existing, settings) {
    const result = JSON.parse(JSON.stringify(existing));
    for (const [name, p] of Object.entries(exports.THEMES)) {
        const scope = `[${name}]`;
        const block = { ...(result[scope] ?? {}) };
        // Clear all managed keys before re-populating
        for (const key of exports.ALL_MANAGED_COLOR_KEYS) {
            block[key] = undefined;
        }
        // Accent
        if (settings.accentColor !== 'mauve') {
            const hex = p[settings.accentColor];
            for (const key of exports.ACCENT_KEYS) {
                block[key] = hex;
            }
        }
        // Workbench mode
        if (settings.workbenchMode === 'flat' || settings.workbenchMode === 'minimal') {
            for (const key of exports.WORKBENCH_FLAT_KEYS) {
                block[key] = p.base;
            }
        }
        if (settings.workbenchMode === 'minimal') {
            for (const key of exports.WORKBENCH_MINIMAL_EXTRA_KEYS) {
                block[key] = p.base;
            }
        }
        // Bracket colors — only write overrides for non-default modes.
        // monochromatic is already defined in the static theme JSON.
        if (settings.bracketColors !== 'monochromatic') {
            const bracketValues = resolveBracketColors(settings.bracketColors, p);
            for (let i = 0; i < 6; i++) {
                block[exports.BRACKET_KEYS[i]] = bracketValues[i];
            }
        }
        const stripped = stripUndefined(block);
        if (Object.keys(stripped).length > 0) {
            result[scope] = stripped;
        }
        else {
            delete result[scope];
        }
    }
    return result;
}
function buildTokenOverrides(existing, settings) {
    const result = JSON.parse(JSON.stringify(existing));
    for (const name of Object.keys(exports.THEMES)) {
        const scope = `[${name}]`;
        const block = result[scope] ?? {};
        const existingRules = block.textMateRules ?? [];
        // Remove previously managed rules, preserve user-added ones
        const userRules = existingRules.filter((r) => !exports.MANAGED_TOKEN_SCOPES.includes(r.scope ?? ''));
        const newRules = [...userRules];
        // Keyword font style
        const kwStyle = buildFontStyle(settings.italicKeywords, settings.boldKeywords);
        if (kwStyle !== '') {
            newRules.push({ scope: 'keyword', settings: { fontStyle: kwStyle } });
        }
        // Comment italic — baseline is italic; override only when disabled
        if (!settings.italicComments) {
            newRules.push({ scope: 'comment', settings: { fontStyle: '' } });
        }
        if (newRules.length > 0) {
            result[scope] = { ...block, textMateRules: newRules };
        }
        else {
            const cleaned = stripManagedTokenBlock(block);
            if (Object.keys(cleaned).length > 0) {
                result[scope] = cleaned;
            }
            else {
                delete result[scope];
            }
        }
    }
    return result;
}
function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
function resolveBracketColors(mode, p) {
    switch (mode) {
        case 'dimmed':
            return [p.text, p.subtext1, p.subtext0, p.overlay2, p.overlay1, p.overlay0];
        case 'rainbow':
            return [p.teal, p.pink, p.lavender, p.yellow, p.peach, p.sapphire];
    }
}
function buildFontStyle(italic, bold) {
    const parts = [];
    if (italic)
        parts.push('italic');
    if (bold)
        parts.push('bold');
    return parts.join(' ');
}
function stripUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter((e) => e[1] !== undefined));
}
function stripManagedTokenBlock(block) {
    const copy = { ...block };
    delete copy['textMateRules'];
    return copy;
}
