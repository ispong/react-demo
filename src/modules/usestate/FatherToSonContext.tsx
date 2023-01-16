import React, {createContext, useCallback, useContext, useState} from "react";


export const CustomContext = createContext(0);

const Father = () => {
    const [count, setCount] = useState(0);

    const changeNum = useCallback(
        (num: number) => {
            setCount(num);
        }, []
    );

    return <>
        <div>父亲,次数 {count}</div>
        <button onClick={() => {
            setCount(count + 1);
        }}>
            点击
        </button>
        <hr/>
        <CustomContext.Provider value={count}>
            <Son num={count}/>
        </CustomContext.Provider>
    </>;
};

interface sonProps {
    num: number;
}

const Son: React.FC<sonProps> = () => {

    const num = useContext(CustomContext);

    return <>
        儿子,点击次数 {num}
        <hr/>
        <GraderSon/>
    </>;
};

const GraderSon = () => {

    const num = useContext(CustomContext);

    return <>
        孙子,点击次数 {num}
    </>;
};

export default function FatherToSonContext() {

    return <>
        <span>父传子 useContext</span>

        <Father/>

    </>;

};