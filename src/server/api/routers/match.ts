import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const matchRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ matchId: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.prisma.match.findUnique({
        where:{
          id: input.matchId
        }
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.match.findMany();
  }),

  createMatch: protectedProcedure
  .input(z.object({
    size: z.number(),
    moves: z.number(),
    time: z.number(),
    userId: z.string().min(1),
    finished: z.boolean(),
  }))
  .query(({ctx, input}) => {
    return ctx.prisma.match.create({
      data: {
        userId: input.userId,
        size: input.size,
        moves: input.moves,
        time: input.time,
        finished: input.finished,
      }
    });
  }),
});
