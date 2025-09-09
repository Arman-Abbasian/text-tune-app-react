import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { CircleCheckBig, CircleX, Eye } from 'lucide-react'
import { useState } from 'react'
import { useConfirmOrUnconfirmedTrainingVoiceMutation } from '../../../services/Admin'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table'
import TextAreaComp from '../../../components/TextAreaComp'
import ButtonComp from '../../../ui/ButtonComp'
import ModalComp from '../../../ui/ModalComp'

const AdminTextVoicesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [
    ConfirmOrUnconfirmedTrainingVoice,
    { isLoading: ConfirmOrUnconfirmedTrainingVoiceLoading },
  ] = useConfirmOrUnconfirmedTrainingVoiceMutation()

  const addCommentHandler = () => {
    ConfirmOrUnconfirmedTrainingVoice({
      id: '1',
      confirmationDescription: 'dsf',
    })
  }

  return (
    <>
      <Table className="rounded-lg overflow-hidden shadow-2xl drop-shadow-2xl">
        <TableHeader className="bg-primary-700">
          <TableRow>
            <TableHead className="text-right text-primary-300">
              نام کاربر
            </TableHead>
            <TableHead className="text-center text-primary-300">
              تاریخ ضبط
            </TableHead>
            <TableHead className="text-center text-primary-300">
              فایل صوتی
            </TableHead>
            <TableHead className="text-center text-primary-300">
              یادداشت
            </TableHead>
            <TableHead className="text-center text-primary-300">
              وضعیت
            </TableHead>
            <TableHead className="text-left text-primary-300">
              تغییر وضعیت
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-primary-900 bg-primary-100">
          {items.length === 0 ? (
            <p>متنی جهت خواندن موجود نیست</p>
          ) : (
            items.map((item) => (
              <TableRow key={item.id} className="text-primary-700">
                <TableCell className="text-right">{item.username}</TableCell>
                <TableCell className="text-center">{item.date}</TableCell>
                <TableCell className="text-center">{item.link}</TableCell>
                <TableCell className="flex justify-center text-center">
                  <Eye onClick={() => setIsModalOpen(true)} />
                </TableCell>
                <TableCell className="text-center">{item.condition}</TableCell>
                <TableCell className="flex justify-end gap-6">
                  <CircleCheckBig className="text-success" />
                  <CircleX className="text-danger" />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <ModalComp
        open={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
        title="یادداشت شما"
        description="می توانید یادداشت را بخوانید, ویرایش یا اضافه کنید"
      >
        <div className="flex justify-center items-center">
          <DotLottieReact
            src="/json/read.json"
            loop
            autoplay
            className="h-36 w-64 flex justify-center"
          />
        </div>
        <div className="flex flex-col gap-6">
          <TextAreaComp placeholder="هنوز یادداشت اضافه نکرده اید..." />
          <ButtonComp
            className={`flex-1 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
            isFormButton={true}
            canClick={true}
            type="submit"
            disabled={ConfirmOrUnconfirmedTrainingVoiceLoading}
            loading={ConfirmOrUnconfirmedTrainingVoiceLoading}
            onsubmit={addCommentHandler}
            text="افزودن"
          />
        </div>
      </ModalComp>
    </>
  )
}

export default AdminTextVoicesTable

const items = [
  {
    id: 1,
    username: 'کامیار شیبانی',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 2,
    username: 'علی محبی',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 3,
    username: 'احمد جابری',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'pending',
  },
  {
    id: 4,
    username: 'رجب قنبری',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'false',
  },

  {
    id: 5,
    username: 'احمد لیلاز',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'true',
  },
  {
    id: 6,
    username: 'محسن حاله',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'true',
  },
  {
    id: 7,
    username: 'احمد حاله',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'true',
  },
  {
    id: 8,
    username: 'احمد حاله',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'true',
  },
  {
    id: 9,
    username: 'احمد حاله',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'true',
  },
]
