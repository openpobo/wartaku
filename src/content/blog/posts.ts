export const posts = Array.from({length:30}).map((_,i)=>({
  slug:`news-${i+1}`,
  title:`Cadobongda Premium News ${i+1}`,
  category:i % 2 === 0 ? 'AI' : 'Technology',
  image:'/images/default.webp',
  excerpt:'Portal berita modern Astro static ultra SEO.',
  author:'Cadobongda Editorial',
  date:'2026-05-20',
  content:`
## Headline
Portal berita modern membutuhkan performa cepat.

## SEO Modern
Astro static membantu Core Web Vitals.

## Internal Linking
Internal linking meningkatkan authority.
`
}));