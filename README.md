# Site institucional Argus Saúde Digital

Projeto estático (HTML + CSS + JS vanilla) com múltiplas páginas institucionais para empresa de tecnologia em saúde.

## Estrutura no GitHub

Arquivos e pastas principais do repositório (com links diretos):

- [`index.html`](./index.html)
- [`about.html`](./about.html)
- [`solutions.html`](./solutions.html)
- [`segments.html`](./segments.html)
- [`methodology.html`](./methodology.html)
- [`resources.html`](./resources.html)
- [`faq.html`](./faq.html)
- [`contact.html`](./contact.html)
- [`privacy.html`](./privacy.html)
- [`robots.txt`](./robots.txt)
- [`sitemap.xml`](./sitemap.xml)
- [`assets/css/style.css`](./assets/css/style.css)
- [`assets/js/main.js`](./assets/js/main.js)
- [`assets/img/hero-equipe-medica.png`](./assets/img/hero-equipe-medica.png)
- [`assets/images/Logo_Argus Branco.png`](./assets/images/Logo_Argus%20Branco.png)
- [`assets/images/hero-equipe-medica.png`](./assets/images/hero-equipe-medica.png)
- [`scripts/resolve_merge_conflicts_keep_relative.sh`](./scripts/resolve_merge_conflicts_keep_relative.sh)

Visão em árvore:

```text
.
├── index.html
├── about.html
├── solutions.html
├── segments.html
├── methodology.html
├── resources.html
├── faq.html
├── contact.html
├── privacy.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   └── hero-equipe-medica.png
│   └── images/
│       ├── Logo_Argus Branco.png
│       ├── hero-equipe-medica.png
│       └── pasta
└── scripts/
    └── resolve_merge_conflicts_keep_relative.sh
```

## Deploy no GitHub Pages

1. Faça push da branch para o repositório no GitHub.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (ou branch desejada) e pasta `/ (root)`.
4. Salve. Aguarde alguns minutos até gerar a URL pública.
5. Se usar domínio customizado, configure em **Custom domain** e ajuste DNS.

> Observação: os caminhos estão relativos (ex.: `assets/...`) para funcionar tanto na raiz quanto em subpastas (como GitHub Pages).

## Resolução rápida de conflitos de merge

Se aparecerem conflitos com marcadores (`<<<<<<<`, `=======`, `>>>>>>>`) e você quiser manter a versão com caminhos relativos, execute:

```bash
./scripts/resolve_merge_conflicts_keep_relative.sh
git add -A
git commit -m "Resolve conflitos mantendo paths relativos"
```
