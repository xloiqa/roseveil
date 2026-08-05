"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.THEMES = void 0;
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const overrides_1 = require("./overrides");
Object.defineProperty(exports, "THEMES", { enumerable: true, get: function () { return overrides_1.THEMES; } });
const RETIRED_WARM_THEME = 'Roveliese Warm';
const WARM_THEME_REPLACEMENT = 'Roveliese Light';
async function activate(context) {
    await migrateRetiredWarmTheme();
    applyOverrides();
    warnIfIndentRainbowConflict();
    new IndentGuideController(context);
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('roveliese'))
            applyOverrides();
        if (e.affectsConfiguration('workbench.colorTheme')) {
            migrateRetiredWarmTheme().catch(error => console.error('Roveliese theme migration failed:', error));
        }
    }));
}
async function migrateRetiredWarmTheme() {
    const rootConfig = vscode.workspace.getConfiguration('workbench');
    const rootInspection = rootConfig.inspect('colorTheme');
    if (rootInspection?.globalValue === RETIRED_WARM_THEME) {
        await rootConfig.update('colorTheme', WARM_THEME_REPLACEMENT, vscode.ConfigurationTarget.Global);
    }
    if (rootInspection?.workspaceValue === RETIRED_WARM_THEME) {
        await rootConfig.update('colorTheme', WARM_THEME_REPLACEMENT, vscode.ConfigurationTarget.Workspace);
    }
    for (const folder of vscode.workspace.workspaceFolders ?? []) {
        const folderConfig = vscode.workspace.getConfiguration('workbench', folder.uri);
        const folderInspection = folderConfig.inspect('colorTheme');
        if (folderInspection?.workspaceFolderValue === RETIRED_WARM_THEME) {
            await folderConfig.update('colorTheme', WARM_THEME_REPLACEMENT, vscode.ConfigurationTarget.WorkspaceFolder);
        }
    }
}
function warnIfIndentRainbowConflict() {
    const cfg = vscode.workspace.getConfiguration('roveliese.indent');
    if (!cfg.get('enabled', true))
        return;
    if (vscode.extensions.getExtension('oderwat.indent-rainbow')) {
        vscode.window.showWarningMessage('Roveliese: indent-rainbow extension is also active — disable it to avoid duplicate highlights.');
    }
}
function deactivate() { }
function applyOverrides() {
    const cfg = vscode.workspace.getConfiguration('roveliese');
    const settings = {
        accentColor: cfg.get('accentColor', 'mauve'),
        italicKeywords: cfg.get('italicKeywords', false),
        boldKeywords: cfg.get('boldKeywords', false),
        italicComments: cfg.get('italicComments', true),
        workbenchMode: cfg.get('workbenchMode', 'default'),
        bracketColors: cfg.get('bracketColors', 'monochromatic'),
    };
    const globalCfg = vscode.workspace.getConfiguration();
    const target = vscode.ConfigurationTarget.Global;
    // workbench.colorCustomizations
    const existingColor = JSON.parse(JSON.stringify(globalCfg.get('workbench.colorCustomizations') ?? {}));
    const newColor = (0, overrides_1.buildColorOverrides)(existingColor, settings);
    if (!(0, overrides_1.deepEqual)(globalCfg.get('workbench.colorCustomizations'), newColor)) {
        globalCfg.update('workbench.colorCustomizations', newColor, target);
    }
    // editor.tokenColorCustomizations
    const existingToken = JSON.parse(JSON.stringify(globalCfg.get('editor.tokenColorCustomizations') ?? {}));
    const newToken = (0, overrides_1.buildTokenOverrides)(existingToken, settings);
    if (!(0, overrides_1.deepEqual)(globalCfg.get('editor.tokenColorCustomizations'), newToken)) {
        globalCfg.update('editor.tokenColorCustomizations', newToken, target);
    }
}
const INDENT_GUIDE_PRESETS = {
    'Roveliese Dark': {
        colors: ['rose', 'peachWarm', 'yellow', 'green', 'teal', 'lavender'],
        backgroundOpacity: 16,
        lineOpacity: 60,
    },
    'Roveliese Light': {
        colors: ['rose', 'peach', 'yellow', 'green', 'sky', 'lavender'],
        backgroundOpacity: 18,
        lineOpacity: 32,
    },
    'Roveliese Storm': {
        colors: ['mauve', 'sapphire', 'sky', 'teal', 'lavender', 'roseLight'],
        backgroundOpacity: 18,
        lineOpacity: 60,
    },
};
const FALLBACK_THEME = 'Roveliese Dark';
const INDENT_UPDATE_DELAY_MS = 60;
class IndentGuideController {
    constructor(context) {
        this.context = context;
        this.decorations = [];
        context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(() => this.scheduleUpdate()), vscode.window.onDidChangeVisibleTextEditors(() => this.scheduleUpdate()), vscode.window.onDidChangeTextEditorVisibleRanges(() => this.scheduleUpdate()), vscode.workspace.onDidChangeTextDocument(e => {
            if (vscode.window.visibleTextEditors.some(editor => editor.document === e.document)) {
                this.scheduleUpdate();
            }
        }), vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('roveliese.indent') || e.affectsConfiguration('workbench.colorTheme')) {
                this.refreshDecorations();
                this.scheduleUpdate();
            }
        }), { dispose: () => this.dispose() });
        this.refreshDecorations();
        this.scheduleUpdate();
    }
    scheduleUpdate() {
        if (this.timer)
            clearTimeout(this.timer);
        this.timer = setTimeout(() => this.updateVisibleEditors(), INDENT_UPDATE_DELAY_MS);
    }
    updateVisibleEditors() {
        const settings = getIndentGuideSettings();
        if (!settings.enabled) {
            this.clearAllEditors();
            return;
        }
        for (const editor of vscode.window.visibleTextEditors) {
            this.updateEditor(editor);
        }
    }
    updateEditor(editor) {
        const buckets = this.decorations.map(() => []);
        const tabSize = getTabSize(editor);
        const visibleRanges = editor.visibleRanges.length
            ? editor.visibleRanges
            : [new vscode.Range(0, 0, editor.document.lineCount - 1, 0)];
        for (const visibleRange of visibleRanges) {
            const start = Math.max(0, visibleRange.start.line);
            const end = Math.min(editor.document.lineCount - 1, visibleRange.end.line);
            for (let lineNumber = start; lineNumber <= end; lineNumber++) {
                const line = editor.document.lineAt(lineNumber);
                const indentLength = getIndentLength(line.text);
                if (indentLength === 0)
                    continue;
                let column = 0;
                let segmentStart = 0;
                let segmentLevel = 0;
                for (let charIndex = 0; charIndex < indentLength; charIndex++) {
                    const charWidth = line.text.charAt(charIndex) === '\t'
                        ? tabSize - (column % tabSize)
                        : 1;
                    const nextColumn = column + charWidth;
                    const level = Math.max(0, Math.floor(nextColumn / tabSize) - 1) % this.decorations.length;
                    if (charIndex > segmentStart && level !== segmentLevel) {
                        buckets[segmentLevel].push(new vscode.Range(lineNumber, segmentStart, lineNumber, charIndex));
                        segmentStart = charIndex;
                    }
                    segmentLevel = level;
                    column = nextColumn;
                }
                buckets[segmentLevel].push(new vscode.Range(lineNumber, segmentStart, lineNumber, indentLength));
            }
        }
        this.decorations.forEach((decoration, index) => editor.setDecorations(decoration, buckets[index]));
    }
    refreshDecorations() {
        this.disposeDecorations();
        const settings = getIndentGuideSettings();
        const { palette, preset } = getActiveIndentGuideTheme();
        const isLine = settings.style === 'line';
        const opacity = settings.opacity ?? (isLine ? preset.lineOpacity : preset.backgroundOpacity);
        this.decorations = preset.colors.map(color => {
            const hex = withAlpha(palette[color], opacity);
            return isLine
                ? vscode.window.createTextEditorDecorationType({
                    borderStyle: 'none none none solid',
                    borderWidth: `0 0 0 ${settings.lineWidth}px`,
                    borderColor: hex,
                    isWholeLine: false,
                    rangeBehavior: vscode.DecorationRangeBehavior.ClosedClosed,
                })
                : vscode.window.createTextEditorDecorationType({
                    backgroundColor: hex,
                    isWholeLine: false,
                    rangeBehavior: vscode.DecorationRangeBehavior.ClosedClosed,
                });
        });
    }
    clearAllEditors() {
        for (const editor of vscode.window.visibleTextEditors) {
            for (const decoration of this.decorations) {
                editor.setDecorations(decoration, []);
            }
        }
    }
    disposeDecorations() {
        this.clearAllEditors();
        for (const decoration of this.decorations) {
            decoration.dispose();
        }
        this.decorations = [];
    }
    dispose() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
        this.disposeDecorations();
    }
}
function getIndentGuideSettings() {
    const cfg = vscode.workspace.getConfiguration('roveliese.indent');
    return {
        enabled: cfg.get('enabled', true),
        style: cfg.get('style', 'line'),
        opacity: cfg.get('opacity', null),
        lineWidth: cfg.get('lineWidth', 1),
    };
}
function getActiveIndentGuideTheme() {
    const themeName = vscode.workspace.getConfiguration('workbench').get('colorTheme', FALLBACK_THEME);
    const canonicalTheme = themeName === RETIRED_WARM_THEME ? WARM_THEME_REPLACEMENT : themeName;
    const resolvedTheme = canonicalTheme && overrides_1.THEMES[canonicalTheme] ? canonicalTheme : FALLBACK_THEME;
    return {
        palette: overrides_1.THEMES[resolvedTheme],
        preset: INDENT_GUIDE_PRESETS[resolvedTheme],
    };
}
function getTabSize(editor) {
    const raw = editor.options.tabSize;
    return typeof raw === 'number' && raw > 0 ? raw : 4;
}
function getIndentLength(text) {
    const match = text.match(/^[\t ]+/);
    return match ? match[0].length : 0;
}
function withAlpha(hex, opacityPercent) {
    const alpha = Math.round(255 * (opacityPercent / 100));
    return `${hex}${alpha.toString(16).padStart(2, '0')}`;
}
