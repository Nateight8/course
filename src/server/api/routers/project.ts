import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure
    .input(
      z.object({ name: z.string(), description: z.string(), image: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      const user = ctx.session.user;

      const newDesign = await ctx.prisma.design.create({
        data: {
          description: input.description,
          name: input.name,
          image: input.image,
          userId: user.id,
        },
      });

      return newDesign;
    }),

  getProjects: publicProcedure.query(({ ctx }) =>
    ctx.prisma.design.findMany({
      include: { user: true },
    })
  ),

  getUsersWithProjects: publicProcedure.query(({ ctx }) =>
    ctx.prisma.user.findMany({
      where: {
        role: "pro",
      },
      include: {
        designs: true,
      },
    })
  ),

  returnUserRole: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const user = await ctx.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    return user;
  }),

  updateUserRole: protectedProcedure
    .input(
      z.object({
        username: z.string(),
        profession: z.string(),
        location: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const updateRole = await ctx.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          username: input.username,
          profession: input.profession,
          location: input.location,
          role: "pro",
        },
      });

      return updateRole;
    }),
});
