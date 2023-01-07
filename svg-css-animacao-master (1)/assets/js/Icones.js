class Icones{
    constructor(){
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones(){
        TweenMax.to(this.listaIcones, 0.5, {scale: 0.5, repeat: -1, yoyo: true})
    }

}

export { Icones }