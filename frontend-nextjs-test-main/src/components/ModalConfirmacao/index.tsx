import styles from './style.module.css';

type ModalConfirmacaoProps = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose?: (type: 'click' | 'esc', target: EventTarget) => void;
	onPositiveConfirmation?: () => void;
  onNegativeConfirmation?: () => void;
  footer?: {
		hidden?: boolean;
		confirmTextPositive?: string;
		confirmTextNevative?: string;
	};
};

export const ModalConfirmacao: React.FC<ModalConfirmacaoProps> = ({ children, title, isOpen, ...props }) => {
  function handleCloseClick(e: React.MouseEvent) {
		props.onClose?.('click', e.target);
	}

  function handlePositiveConfirmationClick(e: React.MouseEvent) {
		props.onPositiveConfirmation?.();
	}

  function handleNegativeConfirmationClick(e: React.MouseEvent) {
		props.onNegativeConfirmation?.();
	}

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Escape') props.onClose?.('esc', e.target);
	}

	if (!isOpen) return null;

  return(
    <div data-modal-wrapper className={styles.wrapper} onKeyDown={handleKeyDown}>
      <div data-modal-container>
        <header data-modal-header>
          <div data-modal-elements>
            <h2>{title}</h2>
          </div>
          <button data-modal-close onClick={handleCloseClick}>
            X
          </button>
          {children}

        </header>
        
        {!props.footer?.hidden && (
            <div data-modal-footer>
              <button onClick={handleNegativeConfirmationClick}
              data-type="negative"
              >
                {props.footer?.confirmTextNevative ?? "Não"}
                
              </button>

              <button onClick={handlePositiveConfirmationClick}
              data-type="positive"
              >
              {props.footer?.confirmTextPositive ?? "Sim"}
              </button>
            </div>
          )}
      </div>
    </div>
  )
}