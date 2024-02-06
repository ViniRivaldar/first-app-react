import React from "react";

import { ContainerItens as Main } from "./style"; 

function ContainerItens({children, isBlur}){


    console.log(isBlur) 
    return <Main isBlur={isBlur}>{children}</Main>
}

export default ContainerItens