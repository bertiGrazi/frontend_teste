/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

export default function Lista({ list }: { list: Array<ICity> }) {
  const [localList, setUsers] = useState<Array<ICity>>(list);

  useEffect(() => {
    async function getList() {
      try {
        const response = await fetch('/api/cities/10');
        const data = await response.json();

        if (!response.ok) throw new Error('Erro ao obter os dados');

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    getList();

    const intervalId = setInterval(() => {
      getList();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de cidades</h2>

        <div data-list-container>
          {localList.map((city) => (
            <div data-list-item key={city.id}>
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('/api/cities/10');
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Erro ao obter os dados');
    }

    return {
      props: {
        list: data,
      },
    };
  } catch (error) {
    console.error('🍎 Error in getServerSideProps:', error);
    return {
      props: {
        list: [],
      },
    };
  }
}
