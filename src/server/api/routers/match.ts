import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ 
      size: z.number(),
      time: z.number(),
      moves: z.number(),
      finished: z.boolean(),
      score: z.optional(z.number()),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.db.match.create({
        data: {
          size: input.size,
          time: input.time,
          moves: input.moves,
          finished: input.finished,
          score: input?.score,
          userId: ctx.session.user.id,
        },
      });
    }),
  getGlobalPositions: publicProcedure.query(({ ctx }) => {
    return ctx.db.match.findMany({
      orderBy: { score: "desc" },
      where: { finished: true },
    });
  }),
});
