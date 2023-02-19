import { configureStore } from '@reduxjs/toolkit'
import nameTrainer from "./slices/trainerName.slice"

export default configureStore({
  reducer: {
    nameTrainer
	}
})