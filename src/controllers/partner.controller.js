import prisma from "../models/prisma_client.js";

export const getPartners = async (req, res) => {
  const partners = await prisma.partner.findMany();
  res.json(partners);
};

export const getPartnerById = async (req, res) => {
  const { id } = req.params;
  const partner = await prisma.partner.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!partner) {
    return res.status(404).json({ error: "Partner not found" });
  }

  res.json(partner);
};

export const createPartner = async (req, res) => {
  const {
    fullname,
    description,
    address,
    sector,
    social,
    website,
    email,
    tel,
    city,
    country,
    state,
    zip,
    img,
    since,
    notes,
    source,
  } = req.body;

  const id = crypto.randomUUID(); // Generate a unique ID for the partner

  if (!fullname || !description || !email || !tel || !address || !social) {
    return res.status(402).json({ error: "All fields are required" });
  }

  const isPartner = await prisma.partner.findUnique({
    where: { email },
  });
  if (isPartner) {
    return res.status(409).json({ error: "This partner already exists" });
  }
  const isNamePartner = await prisma.partner.findFirst({
    where: { fullname },
  });
  if (isNamePartner) {
    return res.status(406).json({ error: "This partner already exists" });
  }

  try {
    const newPartner = await prisma.partner.create({
      data: {
        id,
        fullname,
        description,
        address,
        sector,
        social,
        website,
        email,
        tel,
        city,
        country,
        state,
        zip,
        img,
        since,
        notes,
        source,
      },
    });
    res.status(201).json(newPartner);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePartner = async (req, res) => {
  const { id } = req.params;
  const {
    fullname,
    description,
    address,
    sector,
    social,
    website,
    email,
    tel,
    city,
    country,
    state,
    zip,
    img,
    since,
    notes,
    source,
  } = req.body;

  if (!fullname || !description || !email || !tel || !address || !social) {
    return res.status(402).json({ error: "All fields are required" });
  }

  try {
    const updatedPartner = await prisma.partner.update({
      where: { id: parseInt(id, 10) },
      data: {
        fullname,
        description,
        address,
        sector,
        social,
        website,
        email,
        tel,
        city,
        country,
        state,
        zip,
        img,
        since,
        notes,
        source,
      },
    });
    res.json(updatedPartner);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deletePartner = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPartner = await prisma.partner.delete({
      where: { id },
    });
    res.status(410).json({ message: "Partner deleted successfully" });
  } catch (error) {
    return res.status(403).json({ error: "Forbidden" });
  }
};

// id        String   @id @unique
// fullname  String
// description String
// address   String
// sector    String
// website   String?
// social    String
// email     String   @unique
// tel       String
// city      String  @default("valencia")
// country   String?  @default("venezuela")
// state     String?  @default("carabobo")
// zip       String?  @default("2001")
// img       String?
// since     String
// notes     String?
// source    String?  @default("form-partner")
