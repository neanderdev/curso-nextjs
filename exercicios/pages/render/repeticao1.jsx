export default function Repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ];

    function renderizarLista() {
        return listaAprovados.map((nome, index) => {
            return <li key={index}>{nome}</li>
        });
    }

    // function renderizarLista() {
    //     const itens = [];

    //     for (let i = 0; i <listaAprovados.length; i++) {
    //         itens.push(<li key={i}>{listaAprovados[i]}</li>);
    //     }

    //     return itens;
    // }

    return (
       <ul>
            {renderizarLista()}
       </ul>
    );
}