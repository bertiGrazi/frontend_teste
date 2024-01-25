/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';

export default (req: NextApiRequest, res: NextApiResponse) => {

	const users: IUser[] = [
    {
      id: 323,
      name: 'Usuário 323',
      email: 'user-323@mail.com',
    },
    {
      id: 324,
      name: 'Usuário 324',
      email: 'user-324@mail.com',
    },
		{
      id: 325,
      name: 'Usuário 325',
      email: 'user-325@mail.com',
    },
  ];

	if (req.method === 'GET') {
    return res.status(200).json(users);
  } else {
    return res.status(500).json(users);
  }
};
