import Client from '../models/Client';
import Database from '../database/databaseClient';

const database = new Database();


export const resolvers: { [x: string]: { [x: string]: (_: any, __: any) => any }; } = {
    Query: {
        Client: async (_: any, {id}: {id: number | string}): Promise<any> => {
            return await database.get(id, "Cliente");
        },
        Clients: async (): Promise<any[]> => {
            return await database.getAll("Cliente");
        }
    },

    Mutation: {
        CreateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<any> => {
            
            return await database.create(input, "Cliente");
        },
        UpdateClient: async (_: any, {input}: {input: { [x: string]: string | number }}): Promise<any> => {
            return await database.update(input, "Cliente");
        },
        DeleteClient: async (_: any, {id}: {id: number | string }): Promise<any> => {
            return await database.delete(id, "Cliente");
        }
    }
};