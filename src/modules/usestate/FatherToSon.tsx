import React, {useState} from "react";

const Father = () => {
    const [count, setCount] = useState(0);

    return <>
        <div>父亲,点击次数 {count}</div>
        <button onClick={() => {
            setCount(count + 1);
        }}>
            点击
        </button>
        <hr/>
        <Son num={count}/>
    </>;
};


interface sonProps {
    num: number;
}

const Son: React.FC<sonProps> = (props) => {

    const {num} = props;

    return <>
        儿子,次数 {num}
    </>;
};


export default function FatherToSon() {

    return <>
        <span>父传子</span>

        <Father/>

    </>;

};