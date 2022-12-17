import livingroom from '$lib/content/livingroom/livingroom';
import library from '$lib/content/library/library';
import kitchen from '$lib/content/kitchen/kitchen';

// Infer for json files seems to be a bit buggy
export type JsonContent = {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string;
  media: string;
  type: string;
};

function getContent(slug: string): JsonContent[] {
  switch (slug) {
    case 'livingroom':
      return livingroom;
    case 'kitchen':
      return kitchen;
    case 'library':
      return library;
    default:
      return [];
  }
}

export default getContent;
