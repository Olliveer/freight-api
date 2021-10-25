import { Request, Response } from "express";
import { ShowPriceFreightService } from "../services/ShowPriceFreightService";

class FreightController {
  async handle(req: Request, res: Response) {
    const { zip_code, weight } = req.params;

    const showPriceFreightService = new ShowPriceFreightService();

    const calculationFreight = await showPriceFreightService.execute({
      zip_code,
      weight,
    });

    return res.status(200).json(calculationFreight);
  }
}

export { FreightController };
