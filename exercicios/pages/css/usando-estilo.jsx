import Estilo from '../../components/Estilo';

export default function UsandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color='#000' />

            <Estilo numero={-3} color='#FFF' direita />
        </div>
    );
}