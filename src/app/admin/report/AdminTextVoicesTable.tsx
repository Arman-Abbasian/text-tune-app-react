import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import {
  Check,
  CircleCheckBig,
  CircleX,
  Eye,
  HourglassIcon,
  X,
} from 'lucide-react'
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
import LottieWrapper from '../../../components/Lottie'
import type { TrainingTextVoiceDto } from '@/services/types/Admin'
import moment from 'moment-jalaali'
import BeatLoaderButton from '@/ui/BeatLoaderButton'
import { RejectToast, SuccessToast } from '@/ui/Toasts'
import AudioPlayer from '@/components/AudioPlayer'

interface AdminTextVoicesTablePropsType {
  item: TrainingTextVoiceDto[] | null
  setItem: React.Dispatch<React.SetStateAction<TrainingTextVoiceDto[] | null>>
}

const AdminTextVoicesTable = (props: AdminTextVoicesTablePropsType) => {
  const { item, setItem } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [voiceElement, setVoiceElement] = useState<TrainingTextVoiceDto | null>(
    null
  )
  const [voiceComment, setVoiceComment] = useState('')

  const [
    ConfirmOrUnconfirmedTrainingVoice,
    { isLoading: ConfirmOrUnconfirmedTrainingVoiceLoading },
  ] = useConfirmOrUnconfirmedTrainingVoiceMutation()

  const addCommentHandler = async () => {
    try {
      const response = await ConfirmOrUnconfirmedTrainingVoice({
        id: String(voiceElement?.id),
        confirmationDescription: voiceComment,
      }).unwrap()

      if (response.isSuccess) {
        SuccessToast('عملیات با موفقیت انجام شد')
        setItem(null)
        setVoiceComment('')
        setVoiceElement(null)
        setIsModalOpen(false)
      } else {
        RejectToast(response.message || 'مشکلی رخ داده است')
      }
    } catch (error) {
      RejectToast('مشکلی رخ داده است')
    }
  }
  const voiceConfirmationHandler = async (
    element: TrainingTextVoiceDto,
    confirmation: 'true' | 'false'
  ) => {
    try {
      const response = await ConfirmOrUnconfirmedTrainingVoice({
        id: String(element.id),
        isConfirmed: confirmation,
      }).unwrap()
      if (response.isSuccess) {
        SuccessToast('عملیات با موفقیت انجام شد')
        setItem(null)
      } else {
        RejectToast(response.message || 'مشکلی رخ داده است')
      }
    } catch (error) {
      RejectToast('مشکلی رخ داده است')
    }
  }

  const voiceCommentHandler = (element: TrainingTextVoiceDto) => {
    setIsModalOpen(true)
    setVoiceElement(element)
    setVoiceComment(element.confirmationDescription)
  }

  const changeCommentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVoiceComment(e.target.value)
  }

  if (!item) {
    return (
      <div className="flex flex-col gap-8">
        <p className="text-center text-secondary-500 text-2xl font-semibold">
          برای نمایش جزئیات هر متن لطفا روی متن مورد نظر کلیک کنید
        </p>
        <LottieWrapper src="/json/click.json" loop autoplay className="h-52" />
      </div>
    )
  }
  if (item.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <p className="text-center text-secondary-500 text-xl font-semibold">
          هیچ ویسی برای این متن ثبت نشده است
        </p>
        <LottieWrapper src="/json/click.json" loop autoplay className="h-52" />
      </div>
    )
  }

  if (item.length > 0)
    return (
      <>
        <Table className="rounded-lg overflow-hidden shadow-2xl drop-shadow-2xl">
          <TableHeader className="bg-primary-700">
            <TableRow>
              <TableHead className="text-right text-primary-100">
                نام کاربر
              </TableHead>
              <TableHead className="text-center text-primary-100 w-32">
                تاریخ ضبط
              </TableHead>
              <TableHead className="text-center text-primary-100 w-64">
                فایل صوتی
              </TableHead>
              <TableHead className="text-center text-primary-100">
                یادداشت
              </TableHead>
              <TableHead className="text-center text-primary-100 w-20">
                وضعیت
              </TableHead>
              <TableHead className="text-left text-primary-100 w-32">
                تغییر وضعیت
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-primary-900 bg-primary-100">
            {item.map((element) => (
              <TableRow key={element.id} className="text-primary-700">
                <TableCell className="text-right">
                  {element.insertedUserName}
                </TableCell>
                <TableCell className="text-center">
                  {moment(element.insertedDateTime).format('jYYYY/jMM/jDD')}
                </TableCell>
                <TableCell className="text-center">
                  <AudioPlayer audioUrl={element.voicePath} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-center text-center">
                    <Eye
                      onClick={() => voiceCommentHandler(element)}
                      className="cursor-pointer"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center">
                    {element.isConfirmed === true ? (
                      <Check className="text-success" />
                    ) : element.isConfirmed === false ? (
                      <X className="text-danger" />
                    ) : (
                      <HourglassIcon className="text-secondary-500" />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-6">
                    {ConfirmOrUnconfirmedTrainingVoiceLoading ? (
                      <BeatLoaderButton color="yellow" />
                    ) : element.isConfirmed === true ? (
                      <CircleX
                        className="text-danger cursor-pointer"
                        onClick={() =>
                          voiceConfirmationHandler(element, 'false')
                        }
                      />
                    ) : element.isConfirmed === false ? (
                      <CircleCheckBig
                        className="text-success cursor-pointer"
                        onClick={() =>
                          voiceConfirmationHandler(element, 'true')
                        }
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <CircleCheckBig
                          className="text-success cursor-pointer"
                          onClick={() =>
                            voiceConfirmationHandler(element, 'true')
                          }
                        />
                        <CircleX
                          className="text-danger cursor-pointer"
                          onClick={() =>
                            voiceConfirmationHandler(element, 'false')
                          }
                        />
                      </div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
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
            <TextAreaComp
              placeholder="هنوز یادداشت اضافه نکرده اید..."
              value={voiceComment}
              onChange={changeCommentHandler}
            />
            <ButtonComp
              className={`flex-1 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 disabled:`}
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
