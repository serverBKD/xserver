const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.createMany({
    data: [
      {
        id: '1',
        fullname: 'Empresa ABC',
        description: 'Empresa líder en tecnología',
        address: 'Av. Principal, 123',
        sector: 'Tecnología',
        website: 'https://empresaabc.com',
        social: '@empresaabc',
        email: 'contacto@empresaabc.com',
        tel: '+58 412-3456789',
        city: 'valencia',
        country: 'venezuela',
        state: 'carabobo',
        zip: '2001',
        img: 'https://empresaabc.com/logo.png',
        since: '2005',
        notes: 'Empresa con enfoque en innovación',
        source: 'form-partner',
      },
      {
        id: '2',
        fullname: 'Servicios XYZ',
        description: 'Consultora en negocios digitales',
        address: 'Calle Secundaria, 456',
        sector: 'Consultoría',
        website: 'https://serviciosxyz.com',
        social: '@serviciosxyz',
        email: 'info@serviciosxyz.com',
        tel: '+58 412-9876543',
        city: 'valencia',
        country: 'venezuela',
        state: 'carabobo',
        zip: '2001',
        img: 'https://serviciosxyz.com/logo.png',
        since: '2010',
        notes: 'Expertos en transformación digital',
        source: 'form-partner',
      },
    ],
  });

  console.log('Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });