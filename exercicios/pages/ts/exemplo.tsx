import Pessoa from '../../components/Pessoa';

export default function Exemplo() {
    return (
        <div>
            <Pessoa nome='Nome 1' idade={21} />

            <Pessoa nome='Nome 2' />
        </div>
    );
}
