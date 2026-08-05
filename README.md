<h3 align="center">
    <img src="https://raw.githubusercontent.com/roveliese/.github/main/assets/icon.png" width="100" alt="Logo"/><br/>
    <br/>
    Roveliese for <a href="https://code.visualstudio.com">VS Code</a>
    <br/>
</h3>

<p align="center">
  A quiet, atmospheric theme family built around a rose identity.
</p>

## Previews

<details>
<summary>Dark</summary>
<img src="https://raw.githubusercontent.com/roveliese/vscode/main/images/preview-dark.webp"/>
</details>

<details>
<summary>Light</summary>
<img src="https://raw.githubusercontent.com/roveliese/vscode/main/images/preview-light.webp"/>
</details>

<details>
<summary>Storm</summary>
<img src="https://raw.githubusercontent.com/roveliese/vscode/main/images/preview-storm.webp"/>
</details>

## Usage

### Install from Marketplace

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Roveliese.roveliese-vsc)
- [Open VSX](https://open-vsx.org/extension/Roveliese/roveliese-vsc)

### Manual installation

Download the VSIX from the [latest GitHub release](https://github.com/roveliese/vscode/releases). Open the Command Palette and select **Extensions: Install from VSIX...**, then select the file you just downloaded.

After installing, open the Command Palette and select **Preferences: Color Theme**, then choose your variant:

- **Roveliese Dark**
- **Roveliese Light**
- **Roveliese Storm**

The product icon theme is optional and separate from the color theme. To enable it, open the Command Palette and select **Preferences: Product Icon Theme**, then choose **Roveliese Product Icons**.

## Customization

### Recommended settings

```jsonc
{
  // Roveliese ships semantic token rules; keep this enabled
  "editor.semanticHighlighting.enabled": true,
  // Preserve Roveliese's tuned terminal palette, especially in Light
  "terminal.integrated.minimumContrastRatio": 1,
  // Use the workbench color for the title bar
  "window.titleBarStyle": "custom",
  // Optional: enable Go semantic tokens from gopls
  "gopls": {
    "ui.semanticTokens": true
  }
}
```

### Roveliese settings

Open **Settings** (`Ctrl+,`) and search for `roveliese` to find all options.

| Setting | Default | Options |
|---|---|---|
| `roveliese.accentColor` | `mauve` | `mauve` `rose` `lavender` `sapphire` `teal` `sky` |
| `roveliese.workbenchMode` | `default` | `default` `flat` `minimal` |
| `roveliese.bracketColors` | `monochromatic` | `monochromatic` `dimmed` `rainbow` |
| `roveliese.italicKeywords` | `false` | boolean |
| `roveliese.boldKeywords` | `false` | boolean |
| `roveliese.italicComments` | `true` | boolean |
| `roveliese.indent.enabled` | `true` | boolean |
| `roveliese.indent.style` | `line` | `line` `background` |
| `roveliese.indent.opacity` | per-theme | 5–100 |
| `roveliese.indent.lineWidth` | `1` | 1–4 |

**Accent color** recolors badges, progress bar, focus indicators, and picker borders across all active variants. Button colors stay rose.

**Workbench mode** controls chrome layering: `flat` blends the sidebar into the editor background; `minimal` extends that to tabs, activity bar, and status bar.

**Bracket colors**: `dimmed` fades brackets progressively by depth; `rainbow` cycles six palette colors across levels.

**Indent guides** highlight each indentation level with palette colors matched to the active variant. `line` draws a 1 px vertical line at the left edge of each level; `background` fills the full indent region. If you have the indent-rainbow extension installed, disable it to avoid duplicate highlights.

All changes apply immediately without reloading.

### Custom overrides

For fine-grained overrides, use VS Code's built-in settings directly. These stack on top of both the static theme and the Roveliese settings layer.

```jsonc
{
  "workbench.colorCustomizations": {
    "[Roveliese Storm]": {
      "focusBorder": "#c0b0f0"
    },
    "[Roveliese Dark][Roveliese Storm]": {
      "editor.selectionBackground": "#2d3060"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Roveliese Dark]": {
      "comments": "#888899"
    }
  }
}
```

## Design

Roveliese centers on a quiet editor and a visible rose identity. Accents appear only where the interface needs emphasis: active controls, focus rings, selections, diagnostics, errors. Syntax stays readable without carrying the brand color everywhere.

The mascot sets the visual temperature: a white kitsune with rose-pink flame wisps and icy cyan eyes. That contrast runs through all three variants: rose warmth, cool highlights, restrained surfaces.

Each variant keeps the same Roveliese character while adjusting its contrast, temperature, and syntax balance for a different reading environment.

## What's Covered

- Product icons for the Activity Bar, toolbar, panels, and other VS Code UI icons
- Editor, tabs, sidebar, panels, status bar, command center
- IntelliSense, Outline, and breadcrumbs symbol icons aligned with syntax highlighting
- Git decorations, diff view, merge editor
- Terminal ANSI colors with tuned contrast across all variants
- Testing and debug UI
- Syntax highlighting for Python, JS/TS, Rust, Go, C/C++, Java, PHP, C#, Ruby, Kotlin, Swift, CSS, HTML, Markdown, SQL, Shell, PowerShell, YAML, TOML, JSON, XML, Dockerfile, GraphQL, Protocol Buffers, Terraform/HCL, and more
- Semantic tokens: Pylance (Python), Intelephense (PHP), rust-analyzer, gopls, jdtls (Java), C# Dev Kit, C/C++, JS/TS

## Extension Support

Roveliese themes the following extensions out of the box:

- [ErrorLens](https://github.com/usernamehw/vscode-error-lens)
- [GitHub Pull Requests and Issues](https://github.com/microsoft/vscode-pull-request-github)
- [GitLens](https://github.com/gitkraken/vscode-gitlens)

## Support

Found an issue or have a suggestion? Open an issue on [GitHub](https://github.com/roveliese/vscode/issues) or reach out via the Marketplace Q&A.

<p align="center">
<img src="https://raw.githubusercontent.com/roveliese/.github/main/assets/footer.png" width="600" alt=""/>
</p>

<p align="center">
Copyright &copy; 2026-present <a href="https://github.com/xloiqa">xloiqa</a>
</p>

<p align="center">
<a href="https://github.com/roveliese/vscode/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=f4e9e8&colorA=2b2b44&colorB=c75e7a"/></a>
</p>
