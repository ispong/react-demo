import React, {useCallback, useState} from "react";

const Father = () => {
    const [count, setCount] = useState(0);

    const changeNum = useCallback(
        (num: number) => {
            setCount(num);
        }, []
    );

    return <>
        <div>父亲,次数 {count}</div>
        <hr/>
        <Son num={count} changeNum={changeNum}/>
    </>;
};


interface sonProps {
    num: number;
    changeNum: Function;
}

const Son: React.FC<sonProps> = (props) => {

    const {num, changeNum} = props;

    const sonClick = useCallback(() => {
        changeNum(num + 1);
    }, [num]);

    return <>
        儿子,点击次数 {num}
        <button onClick={sonClick}>
            点击
        </button>
    </>;
};

export default function SonToFatherCallBack() {

    return <>
        <span>子传父 callback</span>

        <Father/>

    </>;

};