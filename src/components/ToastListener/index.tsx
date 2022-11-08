import React from 'react'
import useToast from 'hooks/useToast'
import { ToastContainer } from '../Toast'

const ToastListener = () => {
  const { toasts, remove } = useToast()

  const handleRemove = (id: string) => remove(id)

  return <ToastContainer toasts={toasts} onRemove={handleRemove} stackSpacing={75} />
}

export default ToastListener
