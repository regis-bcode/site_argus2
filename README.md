# Site institucional ARGUS Watch

Projeto estático (HTML + CSS + JS vanilla) com narrativa comercial orientada por valor para governança de risco assistencial hospitalar.

## Estrutura do código e conteúdo

```text
.
├── index.html                # Home: contexto, solução, impacto, prova e CTA
├── produto.html              # Visão do produto e módulos principais
├── solutions.html            # Frentes de solução (CCIH, NSP, Governança, Conformidade)
├── comofunciona.html         # Fluxo operacional da implantação
├── methodology.html          # Metodologia AGF (gates e princípios)
├── resultados.html           # Resultados clínicos, operacionais e financeiros
├── clientes.html             # Prova social e instituições atendidas
├── segments.html             # Segmentos com dor → risco → resultado
├── resources.html            # Whitepapers, estudos e guias
├── investment.html           # Modelo SaaS e tese de valor (sem valores)
├── about.html                # Missão, visão e posicionamento institucional
├── contact.html              # Conversão e formulário de demonstração
├── faq.html
├── privacy.html
├── assets/
│   ├── css/
│   │   └── style.css         # Design system + motion design
│   ├── js/
│   │   └── main.js           # Menu, reveal, parallax e page transitions
│   ├── img/
│   └── images/
├── scripts/
│   └── resolve_merge_conflicts_keep_relative.sh
├── robots.txt
└── sitemap.xml
```

## Diretriz de UX aplicada

- Jornada: Dor → Contexto clínico → Solução → Impacto → Confiança → Conversão.
- Linguagem acessível com explicação de termos técnicos em contexto.
- Foco em proposta de valor (sem exposição de preço).

## Motion e interação implementados

- CSS Transitions
- CSS Animations / Keyframes
- Microinteractions (botões, cards e estados ativos)
- Page Transitions
- Motion Design com easing customizado
- Scroll Animations (reveal effects)
- Parallax Effect
- Fade / Slide / Zoom / Scale / Rotate
- Hover Effects

## Deploy no GitHub Pages

1. Faça push da branch para o repositório no GitHub.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (ou branch desejada) e pasta `/ (root)`.
4. Salve e aguarde alguns minutos até gerar a URL pública.

## Resolução rápida de conflitos de merge

```bash
./scripts/resolve_merge_conflicts_keep_relative.sh
git add -A
git commit -m "Resolve conflitos mantendo paths relativos"
```
