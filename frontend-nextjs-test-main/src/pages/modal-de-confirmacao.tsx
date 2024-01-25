/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { ModalConfirmacao } from '@/components/ModalConfirmacao';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('Confirmou Resposta');
	}

	function handleModalConfirmNegative() {
		setModalIsOpen(false);
		alert('Não Confirma Resposta');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			{/* Renderizar modal de confirmação */}
			<ModalConfirmacao 
				children={undefined}	
				isOpen={modalIsOpen}
				title="Confirmação"

				onClose={handleModalClose}
				onNegativeConfirmation={handleModalConfirmNegative}
				onPositiveConfirmation={handleModalConfirm}
				footer={{
					confirmTextNevative: "Não quero confirmar",
					confirmTextPositive: "Sim, quero confirmar"
					}} 		
				>
			</ModalConfirmacao>
		</>
	);
}
