import ChildTwo from "./ChildTwo";
import { useState } from "react";

export default function ParentTwo() {
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData);
    }

    return ( 
    <>
        { data }
        <ChildTwo childParent = { childToParent }/>
    </>          //childParent is data from ChildTwo
    )
}