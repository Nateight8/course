import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
   

      const newDesign = await ctx.prisma.design.create({
        data: {  },
      });

      return newDesign;
    }),
});
