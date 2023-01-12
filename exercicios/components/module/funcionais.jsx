function Comp1() {
    return <h2>Comp #01</h2>;
}

const Comp2 = function() {
    return <h2>Comp #02</h2>;
}

const Comp3 = () => {
    return <h2>Comp #03</h2>;
}

const Comp4 = () => <h2>Comp #04</h2>;    

export default function() {
    return <h2>Comp #05</h2>;
}

export {
    Comp1,
    Comp2,
    Comp3,
    Comp4,
}
