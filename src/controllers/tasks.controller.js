import prisma from "../models/prisma_client.js";

export async function toAddTask(req, res) {
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

export const getTasks = async (req, res) => {
  const $Tasks = await prisma.tasks.findMany();
  res.json({ $Tasks });
};
