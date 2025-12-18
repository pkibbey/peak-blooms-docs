import { getSingletonHighlighter } from 'shiki';

let highlighter: Awaited<ReturnType<typeof getSingletonHighlighter>> | null = null;

async function getHighlighterInstance() {
  if (!highlighter) {
    highlighter = await getSingletonHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['typescript', 'tsx', 'jsx', 'javascript', 'json', 'css', 'html'],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, language: string = 'typescript'): Promise<string> {
  const h = await getHighlighterInstance();
  const html = h.codeToHtml(code, {
    lang: language,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });
  return html;
}
