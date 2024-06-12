import { prisma } from '../../data/postgres';
import { CreateMeseroDto, MeseroDatasource, MeseroEntity, UpdateMeseroDto } from '../../domain';

export class MeseroDatasourceImpl implements MeseroDatasource {

    async create(createMeseroDto: CreateMeseroDto): Promise<MeseroEntity> {
        const mesero = await prisma.mesero.create({
            data: createMeseroDto
        });

        return MeseroEntity.fromObject(mesero);
    }

    async getAll(): Promise<MeseroEntity[]> {
        const meseros = await prisma.mesero.findMany();
        return meseros.map(mesero => MeseroEntity.fromObject(mesero));
    }

    async findById(id: number): Promise<MeseroEntity> {
        const mesero = await prisma.mesero.findFirst({
            where: { id }
        });

        if (!mesero) throw `Mesero with id ${id} not found`;
        return MeseroEntity.fromObject(mesero);
    }

    async updateById(updateMeseroDto: UpdateMeseroDto): Promise<MeseroEntity> {
        await this.findById(updateMeseroDto.id);

        const updatedMesero = await prisma.mesero.update({
            where: { id: updateMeseroDto.id },
            data: updateMeseroDto
        });

        return MeseroEntity.fromObject(updatedMesero);
    }

    async deleteById(id: number): Promise<MeseroEntity> {
        await this.findById(id);
        const deleted = await prisma.mesero.delete({
            where: { id }
        });

        return MeseroEntity.fromObject(deleted);
    }

}
