function toggMode() {
    const html = document.documentElement

    //if (html.classList.contains('light')) {
    //    html.classList.remove('light')
   // } else{
   //     html.classList.add('light')
   // }
   html.classList.toggle('light')

   //pegar a tag image
   

    //Se tiver light mode add a imagem light
   //susbtituir a imagem
   //se tiver sem light mode, manter a imagem
   
   const img= document.querySelector("#profile img")
   if (html.classList.contains('light')) {
        img.setAttribute('src', './imagens/avatar-light.png' )
    } else{
        img.setAttribute('src', './imagens/Avatar.png' )
    }




}