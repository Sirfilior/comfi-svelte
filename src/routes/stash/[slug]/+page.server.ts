import getContent from '$lib/server/content';
import { prisma } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const purchasedIds = (
    await prisma.roomContent.findMany({
      where: { type: params.slug, purchased: true },
      select: { id: true }
    })
  ).map((item) => item.id);
  const stash = getContent(params.slug).filter((item) => purchasedIds.includes(item.id));
  return { stash: stash, room: params.slug };
}) satisfies PageServerLoad;
