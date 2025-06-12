import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetSequencesIfEmpty() {
  try {
    const tables = await prisma.$queryRaw`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
    `;

    for (const { table_name } of tables) {
      // Verificar tipo de columna "id"
      const columnType = await prisma.$queryRawUnsafe(`
        SELECT data_type FROM information_schema.columns
        WHERE table_name = '${table_name}' AND column_name = 'id';
      `);

      if (!columnType.length || columnType[0].data_type !== 'integer') {
        console.log(`Tabla ${table_name} tiene id tipo ${columnType[0]?.data_type || 'desconocido'}, se omite.`);
        continue;
      }

      // Verificar si la tabla está vacía
      const count = await prisma.$queryRawUnsafe(`SELECT COUNT(*) FROM ${table_name}`);
      const rowCount = parseInt(count[0].count, 10);

      if (rowCount === 0) {
        const sequenceName = await prisma.$queryRawUnsafe(`
          SELECT pg_get_serial_sequence('${table_name}', 'id') AS seq_name;
        `);

        if (sequenceName[0].seq_name) {
          await prisma.$executeRawUnsafe(`ALTER SEQUENCE ${sequenceName[0].seq_name} RESTART WITH 0`);
          console.log(`Secuencia reiniciada en tabla ${table_name}.`);
        }
      } else {
        console.log(`Tabla ${table_name} tiene registros, no se reinicia la secuencia.`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetSequencesIfEmpty();
