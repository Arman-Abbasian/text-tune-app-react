import { Bounce, toast } from 'react-toastify'

export const SuccessToast = (message: string) => {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    className: 'success-toast',
    transition: Bounce,
  })
}

export const RejectToast = (message: string) => {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    className: 'rejected-toast',
    transition: Bounce,
  })
}
