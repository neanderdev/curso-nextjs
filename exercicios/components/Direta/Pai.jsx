import Filho from './Filho';

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>

            <Filho nome="Nome 1" familia={props.familia} />

            <Filho nome="Nome 2" familia={props.familia} />

            <Filho {...props} nome="Nome 3" />
        </div>
    );
}