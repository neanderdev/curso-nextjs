import If from '../../components/If';

export default function Condicional2() {
    const numero = 4;

    return (
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O número é par</h1>
            </If>

            <If teste={numero % 2 === 1}>
                <h1>O número é ímpar</h1>
            </If>
        </div>
    );
}