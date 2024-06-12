import { Request, Response } from 'express';
//import { prisma } from '../../data/postgres';
import { CreateMeseroDto, UpdateMeseroDto } from '../../domain/dtos';
import { MeseroRepository } from '../../domain';

export class MeseroController {

  constructor(
    private readonly MeseroRepository: MeseroRepository,
  ) { }

  public getMesero = async (req: Request, res: Response) => {
    const meseros = await this.MeseroRepository.getAll();
    return res.json(meseros);
  };

  public getMeseroById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const mesero = await this.MeseroRepository.findById(id);
      res.json(mesero);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createMesero = async (req: Request, res: Response) => {
    const [error, createMeseroDto] = CreateMeseroDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const mesero = await this.MeseroRepository.create(createMeseroDto!);
    res.json(mesero);
  };

  public updateMesero = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateMeseroDto] = UpdateMeseroDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedMesero = await this.MeseroRepository.updateById(updateMeseroDto!);
    return res.json(updatedMesero);
  };

  public deleteMesero = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedMesero = await this.MeseroRepository.deleteById(id);
    res.json(deletedMesero);
  };
}
