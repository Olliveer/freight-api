import prisma from "../../../../lib/prisma";
import AppError from "../../../shared/errors/AppError";

type RequestFreight = {
  zip_code: string;
  weight: string;
};

class ShowPriceFreightService {
  async execute({ zip_code, weight }: RequestFreight) {
    const zipCodes = await prisma.zipCode.findMany();

    const zipCodeExists = zipCodes.find(
      (el) =>
        Number(zip_code) >= el.initial_zip && Number(zip_code) <= el.final_zip
    );

    if (!zipCodeExists) {
      throw new AppError(`We do not attend this zipcode: ${zip_code}`);
    }

    const freight = await prisma.zipCode.findUnique({
      where: {
        id: zipCodeExists.id,
      },
    });

    const formattedPrice = {
      gris: freight.gris / 10000,
      price: freight.price / 100,
      advalorem: freight.advalorem / 10000,
      total_weight: Number(weight),
    };

    const totalFreigth =
      formattedPrice.gris * formattedPrice.price +
      formattedPrice.advalorem * formattedPrice.price +
      formattedPrice.total_weight * 0.005;

    return {
      price: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(totalFreigth),
      deadline: `${freight.deadline} days`,
    };
  }
}

export { ShowPriceFreightService };
