import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1651174123006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name:'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'provider',
                        type: 'uuid',
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: "create_at",
                        type:'timestamp',
                        default: 'now()'
                    },
                    {
                        name: "update_at",
                        type:'timestamp',
                        default: 'now()'
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments')
    }

}


/**
 * Linha do tempo
 * 1° semana: Agendamentos
 * 2° semana: Usuários
 * (NOVO DEV) 3° Edição Agendamentos
 * 4 ° semana: Compras
 *
 */
