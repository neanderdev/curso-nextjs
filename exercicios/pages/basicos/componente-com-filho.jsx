import Lista from '../../components/Lista';
import Item from '../../components/Item';

export default function ComponenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item #1" />
                <Item conteudo="Item #2" />
                <Item conteudo="Item #3" />
                <Item conteudo="Item #4" />
                <Item conteudo="Item #5" />
                <Item conteudo="Item #6" />
            </Lista>
        </div>
    );
}