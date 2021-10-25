import prisma from "../lib/prisma";
import { zipcodes } from "./zipcodes";

async function Seed() {
  for (let zipcode of zipcodes) {
    await prisma.zipCode.create({
      data: zipcode,
    });
  }
}

Seed()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
