import { useState } from 'react';

import ContadorDisplay from '../../components/ContadorDisplay';

export default function Contador() {
    const [numero, setNumero] = useState(0);

    const inc = () => setNumero(numero + 1);

    const dec = () => setNumero(numero - 1);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1>Contador</h1>

            <ContadorDisplay numero={numero} />
            
            <div>
                <button onClick={dec} style={{ width: '40px', height: '40px' }}>-</button>

                <button onClick={inc} style={{ width: '40px', height: '40px' }}>+</button>
            </div>
        </div>
    );
}