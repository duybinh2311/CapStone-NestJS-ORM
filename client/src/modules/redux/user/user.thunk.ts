import { createAsyncThunk } from '@reduxjs/toolkit'

import { UserModule } from '@/modules/user/user.module'

export class UserThunk {
  static getSavedPins = createAsyncThunk('user/getSavedPins', UserModule.getSavedPins)
}
