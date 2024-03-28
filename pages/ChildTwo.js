export default function ChildTwo({ childParent }) {
    const data = "This is data from the child page to the parent page."

    return (
        <>
            <button onClick={() => childParent( data )}>
                Click Child to Parent
            </button>
           {/* button on ChildTwo. When clicked, will take ( data ) and store in the childParent */}
                           {/* note here, childParent is NOT a function. It is data (property) */}
            
        </>
    )
}