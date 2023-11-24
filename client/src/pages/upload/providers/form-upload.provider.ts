import { createFormContext } from '@mantine/form'

import { CreatePinDto } from '@/modules/pin/pin.types'

export const [FormUploadProvider, useFormUploadContext, useFormUpload] = createFormContext<CreatePinDto>()
