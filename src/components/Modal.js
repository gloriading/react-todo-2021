import React, { useState, useCallback, useEffect, forwardRef, useImperativeHandle } from 'react'

import { createPortal } from 'react-dom';
import { FiXCircle } from "react-icons/fi";

const modalRoot = document.getElementById('modal-root');

function Modal({ children }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const closeFn = useCallback(() => setIsOpen(false), []);
  const closeByEsc = useCallback((e) => {
    if (e.keyCode === 27) closeFn();
  }, [closeFn]);
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closeByEsc, false);
    }
    return () => document.removeEventListener('keydown', closeByEsc, false)
  },[isOpen, closeByEsc])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: closeFn,
  }), [closeFn])

  return createPortal(isOpen ? (
    <div className="modal">
      
      <div className="modal__content">
      <FiXCircle className="modal__close" onClick={closeFn} size="1.5rem" />
      { children }
      </div>      
    </div>
  ): null, modalRoot);
}

export default forwardRef(Modal)
