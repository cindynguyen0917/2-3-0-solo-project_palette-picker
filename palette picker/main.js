import palettesFromJSON from '../palettes.json'
import { getLocalStorageKey, setLocalStorageKey, deleteLocalStorageKey } from './local-storage';
import { v4 as uuidv4 } from 'uuid';
import { makePaletteCard, intPaletteCards } from './dom-funcs';
import { deletePalette, handlePaletteForm, copyHexCode } from './event-funcs';
// const { uuid, title, colors, temperature } = palette

if (!getLocalStorageKey('palettes') || getLocalStorageKey('palettes').length === 0) {
  // console.log("The array is empty")
  deleteLocalStorageKey('palettes')
  setLocalStorageKey('palettes', palettesFromJSON)
}

const main = () => {
  intPaletteCards()
  document.querySelector('form').addEventListener('submit', handlePaletteForm)
}

main()
