import getContent from '$lib/server/content';
import { prisma } from '$lib/server/database';
import type { PageServerLoad } from '../../stash/[slug]/$types';
import type { Actions } from './$types';
import config from '$lib/config';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  buy: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    const room = data.get('room');

    if (!id || !room) return fail(422, { error: 'Missing id or room' });

    const idString = id.toString();
    const roomString = room.toString();

    try {
      const updatedBalance = await prisma.balance.updateMany({
        where: { id: 1, balance: { gte: config.PRICE } },
        data: { balance: { decrement: config.PRICE } }
      });

      if (updatedBalance.count === 0) {
        return fail(422, { id: id, room: room, error: 'Not enough balance' });
      }

      await prisma.roomContent.upsert({
        where: { id: idString },
        update: { purchased: true },
        create: { id: idString, type: roomString, purchased: true }
      });
    } catch {
      return fail(422, { id: id, room: room, error: 'Failed to buy item' });
    }
    return { status: 200 };
  }
};

export const load = (async ({ params }) => {
  const purchasedIds = (
    await prisma.roomContent.findMany({
      where: { type: params.slug, purchased: true },
      select: { id: true }
    })
  ).map((item) => item.id);
  const store = getContent(params.slug).filter((item) => !purchasedIds.includes(item.id));
  return { products: store, room: params.slug };
}) satisfies PageServerLoad;
