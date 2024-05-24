import palettesFromJSON from '../palettes.json'
import { getLocalStorageKey, setLocalStorageKey, deleteLocalStorageKey } from './local-storage';
import { v4 as uuidv4 } from 'uuid';
import { deletePalette, copyHexCode } from './event-funcs';

export const makePaletteCard = (palette) => {
    const { uuid, title, colors, temperature } = palette
    console.log(uuid, title, colors, temperature)
    const li = document.createElement('li')
    const titleHeader = document.createElement('h3')
    const colorContainer1 = document.createElement('div')
    const colorPreview1 = document.createElement('div')
    const colorBlock1 = document.createElement('p')
    const colorBlock1b = document.createElement('span')
    const colorButton1 = document.createElement('button')
    const colorContainer2 = document.createElement('div')
    const colorPreview2 = document.createElement('div')
    const colorBlock2 = document.createElement('p')
    const colorBlock2b = document.createElement('span')
    const colorButton2 = document.createElement('button')
    const colorContainer3 = document.createElement('div')
    const colorPreview3 = document.createElement('div')
    const colorBlock3 = document.createElement('p')
    const colorBlock3b = document.createElement('span')
    const colorButton3 = document.createElement('button')
    const deleteButton = document.createElement('button')
    const temperatureFooter = document.createElement('footer')
    li.addEventListener('click', deletePalette)
    li.addEventListener('click', copyHexCode)

    li.append(titleHeader, colorContainer1, colorContainer2, colorContainer3, deleteButton, temperatureFooter)
    colorContainer1.append(colorPreview1, colorButton1)
    colorContainer2.append(colorPreview2, colorButton2)
    colorContainer3.append(colorPreview3, colorButton3)
    colorPreview1.append(colorBlock1, colorBlock1b)
    colorPreview2.append(colorBlock2, colorBlock2b)
    colorPreview3.append(colorBlock3, colorBlock3b)

    li.setAttribute('id', uuid)
    colorContainer1.classList.add('color-container')
    colorContainer2.classList.add('color-container')
    colorContainer3.classList.add('color-container')
    colorPreview1.classList.add('color-preview')
    colorPreview2.classList.add('color-preview')
    colorPreview3.classList.add('color-preview')
    colorBlock1.classList.add('color-example')
    colorBlock1b.classList.add('color-example')
    colorBlock2.classList.add('color-example')
    colorBlock2b.classList.add('color-example')
    colorBlock3.classList.add('color-example')
    colorBlock3b.classList.add('color-example')
    colorButton1.classList.add('color-button')
    colorButton2.classList.add('color-button')
    colorButton3.classList.add('color-button')
    deleteButton.classList.add('delete-button')
    deleteButton.type = 'button'
    li.classList.add('palette')
    console.log(li)

    titleHeader.textContent = title;
    colorBlock1.textContent = `Text`
    colorBlock1b.textContent = 'Example'
    colorPreview1.style.backgroundColor = colors[0]
    colorButton1.textContent = `Copy ${colors[0]}`
    colorBlock2.textContent = 'Text'
    colorBlock2b.textContent = 'Example'
    colorPreview2.style.backgroundColor = colors[1]
    colorButton2.textContent = `Copy ${colors[1]}`
    colorBlock3.textContent = 'Text'
    colorBlock3b.textContent = 'Example'
    colorPreview3.style.backgroundColor = colors[2]
    colorButton3.textContent = `Copy ${colors[2]}`
    deleteButton.textContent = 'Delete Palette'
    temperatureFooter.textContent = temperature;
    if (temperature === 'cool') {
        temperatureFooter.style.backgroundColor = '#121e43';
    } else if (temperature === 'warm') {
        temperatureFooter.style.backgroundColor = '#431212';
    } else {
        temperatureFooter.style.backgroundColor = '#555555';
    }

    document.querySelector('#palette-list').append(li)

}

export const intPaletteCards = () => {
    getLocalStorageKey('palettes').forEach(makePaletteCard)
}