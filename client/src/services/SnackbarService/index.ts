import {
  ISnackbarOptions,
  ISnackbarOptionsWithID,
} from '@app/stores/SnackbarStore/ISnackbar'

export const SnackbarService = {
  generateSnackbarOptions: (
    id: number,
    content: ISnackbarOptions
  ): ISnackbarOptionsWithID => {
    const snack: ISnackbarOptionsWithID = { id, ...content }
    if (content.withSound) {
      const audio = new Audio('https://sound-pack.net/download/Sound_11086.wav')
      audio.play().then()
    }
    return snack
  },
}
