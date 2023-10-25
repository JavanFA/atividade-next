export function Imag() {
    
    const imagem = "https://pt.wikipedia.org/wiki/Ficheiro:Simbolo-escudo-nautico.png"
    const descri = "Descricao da imagem"
    return(

        <div>
           <img src={imagem}
           alt={descri}/>
        </div>
    )
}