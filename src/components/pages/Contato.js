import OutraLista from '../OutraLista';

function Contato() {

    const meusItens = ['React', 'Vue', 'Angular']

    return(
        <div>
            <h1>Contato</h1>
            <OutraLista itens={meusItens}/>
        </div>
    )
}

export default Contato