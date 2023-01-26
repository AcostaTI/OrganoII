import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='redes-socias'>
                <img src='/img/fb.png' alt='logo facebook'/>
                <img src='/img/tw.png' alt='logo twitter'/>
                <img src='/img/ig.png' alt='logo instagram'/>
            </div>
            <div>
                <img src='/img/logo.png' alt='logo organo' />
            </div>
            <div className='copyright'>
                <h4>Desenvolvido por Alura.</h4>
            </div>
        </footer>
    )
}

export default Rodape