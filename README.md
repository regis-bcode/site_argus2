# Site institucional Argus Saúde Digital

Projeto estático (HTML + CSS + JS vanilla) com múltiplas páginas institucionais para empresa de tecnologia em saúde.

## Estrutura

- `index.html`
- `about.html`
- `solutions.html`
- `segments.html`
- `methodology.html`
- `resources.html`
- `faq.html`
- `contact.html`
- `privacy.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/` (placeholders)
- `robots.txt`
- `sitemap.xml`

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
