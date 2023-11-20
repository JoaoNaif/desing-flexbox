const pointer = document.querySelectorAll('.pointer')


pointer.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        console.log(indice)

        const pointerAtivo = document.querySelector('.ativo')
        pointerAtivo.classList.remove('ativo')

        botao.classList.add('ativo')

        const slider = document.querySelector('.sliders')
        if(indice == 0){
            slider.style.marginLeft = '0'
        }else{
            let a = (indice * 100) * -1
            let s = a.toString()
            console.log(s)
            slider.style.marginLeft = `${s}vw`
        }
    })
})

const carrossel = document.querySelectorAll('.carrossel')


carrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        console.log(indice)

        const carrosselAtivo = document.querySelector('.selecionado')
        carrosselAtivo.classList.remove('selecionado')

        botao.classList.add('selecionado')

        const slider = document.querySelector('.workers')
        if(indice == 0){
            slider.style.marginLeft = '0'
        }else if(indice == 1){
            slider.style.marginLeft = '-880px'
        }else{
            slider.style.marginLeft = '-1760px'
        }
    })
})


const client = document.querySelectorAll('.client')


client.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        console.log(indice)

        const clientAtivo = document.querySelector('.mark')
        clientAtivo.classList.remove('mark')

        botao.classList.add('mark')

        const slider = document.querySelector('.section-clients')
        if(indice == 0){
            slider.style.marginLeft = '0'
            slider.style.animation = 'lateral1 1s linear'
        }else if(indice == 1){
            slider.style.marginLeft = '-100%'
            slider.style.animation = 'lateral2 1s linear'
        }else{
            slider.style.marginLeft = '-200%'
            slider.style.animation = 'lateral3 1s linear'
        }
    })
})


document.querySelector('.fa-bars').addEventListener('click', function(){
    const nav = document.querySelector('.nav')
    if(nav.style.display =='flex'){
        nav.style.display = 'none'
    }else{
        nav.style.display = 'flex'
    }
})

