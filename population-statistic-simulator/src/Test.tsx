import { ReactElement } from "react";

function Test(x: number): ReactElement {
    let y: String = `Test Says ${x}`;
    return (<p>{y}</p>);
}

export default Test;