import palettesFromJSON from '../palettes.json'
import { getLocalStorageKey, setLocalStorageKey, deleteLocalStorageKey } from './local-storage';
import { v4 as uuidv4 } from 'uuid';
import { makePaletteCard, intPaletteCards } from './dom-funcs';


export const handlePaletteForm = (event) => {
    event.preventDefault();
    const form = event.target
    const title = form.paletteTitle.value;
    const colors = [form.colorOne.value, form.colorTwo.value, form.colorThree.value];
    const temperature = form.temperature.value;
    let uuid = uuidv4()
    console.log(colors)
    makePaletteCard({ uuid, title, colors, temperature })

    const palettes = getLocalStorageKey('palettes')
    palettes.push({ uuid, title, colors, temperature })
    setLocalStorageKey('palettes', palettes)
    form.reset();
}

export const deletePalette = (event) => {
    event.preventDefault();

    if (event.target.matches('.delete-button')) {
        event.currentTarget.remove()
        let storage = getLocalStorageKey('palettes')
        let objectToDelete = event.currentTarget.id
        console.log(objectToDelete)
        let newStorage = storage.filter(obj => obj.uuid !== objectToDelete)
        setLocalStorageKey('palettes', newStorage)
    }
}
export const copyHexCode = (event) => {
    event.preventDefault();
    if (event.target.matches('.color-button')) {
        let textToCopy = event.target.textContent.split(" ")[1];
        navigator.clipboard.writeText(textToCopy)
        event.target.textContent = "Copied hex!"
        setTimeout(() => { event.target.textContent = `Copy ${textToCopy}` }, 1000)

        console.log(textToCopy)
    }
}