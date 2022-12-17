import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib/server/database';

export const load = (async (event) => {
  const balance =
    (
      await prisma.balance.findUnique({
        where: {
          id: 1
        }
      })
    )?.balance || 0;
  return {
    session: await event.locals.getSession(),
    balance: balance
  };
}) satisfies LayoutServerLoad;
