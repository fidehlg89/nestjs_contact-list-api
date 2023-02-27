import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  const contact1 = await prisma.contact.create({
    data: {
      name: 'John Doe',
      address: 'Guatemala City, Guatemala',
      phone: '014587962',
      email: 'john@gmail.com',
    },
  });
  const contact2 = await prisma.contact.create({
    data: {
      name: 'Jane Doe',
      address: 'París, France',
      phone: '222 222 222',
      email: 'jane@gmail.com',
    },
  });
  const contact3 = await prisma.contact.create({
    data: {
      name: 'David Smith',
      address: 'Spain, Spain',
      phone: '034 658 222',
      email: 'david@gmail.com',
    },
  });
  const contact4 = await prisma.contact.create({
    data: {
      name: 'Mike Smith',
      address: 'America, Colombia',
      phone: '222 222 222',
      email: 'mike@gmail.com',
    },
  });
  const contact5 = await prisma.contact.create({
    data: {
      name: 'Martha Doe',
      address: 'París, France',
      phone: '222 222 222',
      email: 'martha@simpson.com',
    },
  });
  const contact6 = await prisma.contact.create({
    data: {
      name: 'Joe Doe',
      address: 'Belgium',
      phone: '4444 222 222',
      email: 'joe@simpson.com',
    },
  });
  const contact7 = await prisma.contact.create({
    data: {
      name: 'Miss Smith',
      address: 'US, New York',
      phone: '01 222 222 55',
      email: 'smith@simpson.com',
    },
  });

  console.log({
    contact1,
    contact2,
    contact3,
    contact4,
    contact5,
    contact6,
    contact7,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
