import prisma from "../../prisma_client";
import { Request, Response } from "express";

export async function toAddTask(req: Request, res: Response) {
  const { concept, notes, amount, img, completed, debit, initAt, source } =
    req.body;

  try {
    const $newTask = await prisma.tasks.create({
      data: {
        concept,
        notes,
        amount,
        img,
        completed,
        debit,
        initAt,
        source,
      },
    });
    if (!$newTask) return;
    res.json($newTask);
  } catch (error) {
    console.error(error);
  }
}

export const toGetTasks = async (_req: Request, res: Response) => {
  const $Tasks = await prisma.tasks.findMany();
  res.json({ $Tasks });
};
