export default function ContadorDisplay(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '50px',
            borderRadius: '25px',
            background: '#222',
            color: '#FFF',
            fontSize: '2rem',
            margin: '20px',
        }}>
            {props.numero}
        </div>
    );
}