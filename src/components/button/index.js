import React from "react";

import { Button as ButtonContainer} from "./style";

function Button({children, ...props}){

    return <ButtonContainer {...props}>{children}</ButtonContainer>

}

export default Button

