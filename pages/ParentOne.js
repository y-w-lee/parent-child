import { useState } from "react";
import ChildOne from "./ChildOne";

export default function ParentToChild () {
    const [data, setData] = useState();
    const parentToChild = () => {
        setData('This is the data from the parent page which will be passed to the child page')
    }

    return (
        <>
        <ChildOne parentToChild={ data }/>
        <button onClick={() => parentToChild()}>Click parent to child</button>
        </> //button triggers function to be called
        // actually being displayed in ChildOne, but it's imbedded in the parent page, so we can see it
        // (content actually in ChildOne)
    )
}