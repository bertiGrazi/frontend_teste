/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import React, { useState } from 'react';

import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '@/components/ToastMessage';
import { IToastMessage } from '@/types/toast-message';

export default function ContextApi() {
  const [messages, setMessages] = useState<Array<IToastMessage>>([]);

  function handleSuccessButtonClick() {
    const newSuccessMessage: IToastMessage = {
      id: String(Math.random()), 
      message: 'Mensagem de sucesso',
      type: 'success',
    };
    setMessages([...messages, newSuccessMessage]);
  }

  function handleErrorButtonClick() {
    const newErrorMessage: IToastMessage = {
      id: String(Math.random()), 
      message: 'Mensagem de erro',
      type: 'error',
    };
    setMessages([...messages, newErrorMessage]);
  }

  function handleToastClose(id: string) {
    setMessages(messages.filter((message) => message.id !== id));
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles['toast-container']}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} onClose={() => handleToastClose(message.id)} />
        ))}
      </div>
    </>
  );
}
