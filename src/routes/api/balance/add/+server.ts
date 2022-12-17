import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { prisma } from '$lib/server/database';

export const POST = (async () => {
  const result =
    (
      await prisma.balance.upsert({
        where: { id: 1 },
        update: { balance: { increment: 1 } },
        create: { id: 1, balance: 1 }
      })
    ).balance || 0;

  return json(result);
}) satisfies RequestHandler;
