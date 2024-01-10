import React from "react";

type DisplayProps = {
    scoreLabelText: string;
    rowLabelText: string;
    levelLabelText: string;
}

const Display: React.FC<DisplayProps> = ({scoreLabelText, rowLabelText, levelLabelText}) => {
    return (
        <div>{scoreLabelText},
            {rowLabelText},
            {levelLabelText}
        </div>
    )
};

export default Display;