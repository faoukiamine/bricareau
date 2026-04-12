import { productMenuItems, commercialProductMenuItems, entreprisesProductMenuItems } from "./navigation";
import { faqCategories } from "./faqs";
import { categories as blogCategories } from "./blogCategories";
import { productIndex } from "./productIndex";

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: 'page' | 'faq' | 'blog' | 'product';
  category?: string;
  keywords?: string[];
}

export const getSearchData = (): SearchResult[] => {
  const results: SearchResult[] = [];

  // 1. Pages & Menu Items
  const allMenus = [
    ...productMenuItems,
    ...commercialProductMenuItems,
    ...entreprisesProductMenuItems
  ];

  allMenus.forEach(menu => {
    if (menu.href) {
      results.push({
        title: menu.name,
        description: `Solutions Bricareau en ${menu.name}.`,
        href: menu.href,
        type: 'page'
      });
    }
    menu.megamenuCards?.forEach(card => {
      results.push({
        title: card.title,
        description: card.description,
        href: card.href,
        type: 'page',
        category: menu.name
      });
    });
  });

  // 2. FAQ Items
  faqCategories.forEach(cat => {
    cat.items.forEach(item => {
      results.push({
        title: item.q,
        description: item.a,
        href: `/faq#${cat.id}`,
        type: 'faq',
        category: cat.title
      });
    });
  });

  // 3. Blog Articles
  blogCategories.forEach(cat => {
    cat.products.forEach(post => {
      results.push({
        title: post.title,
        description: post.desc,
        href: post.href,
        type: 'blog',
        category: cat.title
      });
    });
  });

  // 4. Detailed Product Index
  productIndex.forEach(item => {
    results.push({
      title: item.name,
      description: item.description,
      href: item.href,
      type: 'product',
      category: item.category,
      keywords: item.keywords
    });
  });

  // Remove duplicates by href & title
  const uniqueResults = results.filter((value, index, self) =>
    index === self.findIndex((t) => t.href === value.href && t.title === value.title)
  );

  return uniqueResults;
};

export const searchSite = (query: string): SearchResult[] => {
  if (!query || query.length < 2) return [];
  
  const data = getSearchData();
  const lowerQuery = query.toLowerCase();
  
  return data.filter(item => {
    const inTitle = item.title.toLowerCase().includes(lowerQuery);
    const inDescription = item.description.toLowerCase().includes(lowerQuery);
    const inCategory = item.category?.toLowerCase().includes(lowerQuery);
    const inKeywords = item.keywords?.some(k => k.toLowerCase().includes(lowerQuery));
    
    return inTitle || inDescription || inCategory || inKeywords;
  }).slice(0, 10); // Limit to top 10 results for live search
};
