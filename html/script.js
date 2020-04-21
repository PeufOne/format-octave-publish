document.addEventListener('DOMContentLoaded', () => {

    /*

    Place le contenu des sous-titres dans des div organisé selon ce schema:
    
    divPart
        sub-title
        divContainer
            step
                divInput
                    .oct-code
                divOutput
                    .oct-code-output, img, p ...
            step
                ...
    */

    let all = document.querySelectorAll('body > *')
    let title = undefined
    let subTitle = undefined
    let divPart = undefined
    let divContainer = undefined
    let divInput = undefined
    let divOutput = undefined
    let newDivElements = []
    let newStep = undefined
    let steps = []
    
    let i = 0, j = 0
    while (i < all.length - 1) {

        //Regroupe les elements entre les titres dans newDivElements
        if (all[i].tagName === 'P' && all[i].firstChild && all[i].firstChild.tagName === 'B') {
            subTitle = all[i]
            j = i + 1
            while (j < all.length -1) {
                if (all[j].tagName === 'P' && all[j].firstChild && all[j].firstChild.tagName === 'B') {
                    j = all.length
                }else{
                    newDivElements.push(all[j])
                    j++
                }
            }
        }

        //Traite la partie regrouper
        if (newDivElements.length) {

            divPart = document.createElement('div')
            divPart.className = 'part'
            if (title) divPart.appendChild(title)
            title = undefined

            newDivElements.forEach(newElement => {
                if (newElement.classList.contains('oct-code')) {
                    newStep = document.createElement('div')
                    newStep.className = 'step'
                    divInput = document.createElement('div')
                    divInput.className = 'input'
                    divOutput = document.createElement('div')
                    divOutput.className = 'output'

                    divInput.appendChild(newElement)
                    newStep.appendChild(divInput)
                    newStep.appendChild(divOutput)
                    steps.push(newStep)

                }else if(newElement.classList.contains('oct-code-output') || newElement.tagName == 'IMG' || newElement.tagName == 'P'){
                    divOutput.appendChild(newElement)
                }else if (newElement.tagName == 'H2'){
                    title = newElement
                }
            })

            divContainer = document.createElement('div')
            divContainer.className = 'container'
            steps.forEach(step => {
                divContainer.appendChild(step)
            })

            divPart.appendChild(subTitle)
            divPart.appendChild(divContainer)
            document.body.appendChild(divPart)

            i += newDivElements.length
            newDivElements = []
            steps = []
        }

        i++
    }

    //replace le footer tout à la fin
    document.body.appendChild(document.querySelector('footer'))

    //Ajoute le saut a la ligne les lignes orizontals
    let parts = document.querySelectorAll('p b')
    parts.forEach(part => {
        part.parentElement.prepend(document.createElement('br'))
        part.parentElement.appendChild(document.createElement('hr'))
    })

    //Ajoute la signature
    let username = document.querySelector('script[src="script.js"]').dataset.signature
    let footer = document.querySelector('footer')
    let usernameSpan = document.createElement('span')
    usernameSpan.innerText = username
    usernameSpan.style.float = 'right'
    footer.appendChild(usernameSpan)

})
