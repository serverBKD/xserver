import prisma from "../models/prisma_client.js";
import crypto from "node:crypto";

export const getHanyu = async (req, res) => {
  const hanyus = await prisma.hanyu.findMany();
  res.json(hanyus);
};

export const createHanyu = async (req, res) => {
    const {
        hanzi,
        pinyin,
        xinbanya,
        tone,
        img,
        source,
    } = req.body;
    
    
    const isHanyu = await prisma.hanyu.findUnique({
        where: { hanzi: hanzi },
    });
    if (isHanyu) {
        return res.status(409).json({ error: "This Hanyu already exists" });
    }
    const isNameHanyu = await prisma.hanyu.findFirst({
        where: { xinbanya: xinbanya },
    });
    if (isNameHanyu) {
        return res.status(406).json({ error: "This Hanyu already exists" });
    }
    
    const id = crypto.randomUUID();

    try {
        const hanyu = await prisma.hanyu.create({
        data: {
            id,
            hanzi,
            pinyin,
            xinbanya,
            tone,
            img,
            source,
        },
        });
        res.status(201).json(hanyu);
    } catch (error) {
        console.error("Error creating Hanyu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    }    
    
    
export const updateHanyu = async (req, res) => {
    const { id } = req.params;
    const {
        hanzi,
        pinyin,
        xinbanya,
        tone,
        img,
        source,
    } = req.body;

    try {
        const updatedHanyu = await prisma.hanyu.update({
            where: { id: id },
            data: {
             hanzi,
             pinyin,
             xinbanya,
             tone,
             img,
             source,
            },
        });
        res.json(updatedHanyu);
    } catch (error) {
        console.error("Error updating Hanyu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
     
export const deleteHanyu = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.hanyu.delete({
            where: { id: id},
        });
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting Hanyu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
// };
//
// export const getPartnerById = async (req, res) => {
