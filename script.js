const d = document
const body = d.querySelector('body')
body.setAttribute('style', 'background-color: black; display: flex; align-items: center; justify-content: center; height: 95vh; font-family: Arial;')

const mainDiv = d.createElement('div')
const h1 = d.createElement('h1')
mainDiv.setAttribute('style', 'display: flex; align-items: center; justify-content: center; border-radius: 20px; flex-direction: column;')
h1.textContent = 'Press any key.'
h1.setAttribute('style', 'font-weight: normal; color: white; background-color: grey; width: 300px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px;')
body.appendChild(mainDiv)
mainDiv.appendChild(h1)

const keyName = d.createElement('h1')
const keyCode = d.createElement('h1')
keyName.setAttribute('style', 'font-weight: normal; color: white; background-color: grey; width: 350px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px; margin-bottom: 5px; padding: 5px; white-space: pre;')
keyCode.setAttribute('style', 'font-weight: normal; color: #5BBC7A; background-color: grey; width: 100px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 20px; margin-top: 5px; padding: 5px;')
const spanKeyName = d.createElement('span')

body.addEventListener('keypress', e => {
    if (!mainDiv.contains(keyName) && !mainDiv.contains(keyCode)) {
        mainDiv.removeChild(h1)
        keyName.textContent = 'You have pressed '
        spanKeyName.textContent = e.key
        spanKeyName.style.color = '#5BBC7A'
        keyName.appendChild(spanKeyName)
        keyCode.textContent = e.keyCode
        mainDiv.appendChild(keyName)
        mainDiv.appendChild(keyCode)
    } else {
        spanKeyName.textContent = e.key
        keyName.textContent = 'You have pressed '
        spanKeyName.style.color = '#5BBC7A'
        keyName.appendChild(spanKeyName)
        keyCode.textContent = e.keyCode
    }
})
