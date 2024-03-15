import React from 'react';

const Table = ({
    mainCss = "rounded-md border",
    headItems,
    bodyItems,
    headCss,
    bodyCss,
    cellPadding = "py-2 px-4",
    colWidth = ["w-1/2", "w-1/2"]
}) => {
    return (
        <div className={`${mainCss} border rounded-md overflow-y-auto`}>
            <table className="w-full divide-y min-w-[500px]">

                {headItems && (
                    <thead className={`${headCss} bg-[#F5F6FD]`}>
                        <tr className="text-left text-primary">
                            {headItems.map((header, index) => (
                                <th key={index} className={`${cellPadding} whitespace-nowrap font-medium`}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                )}

                {bodyItems && (
                    <tbody className={`${bodyCss} divide-y`}>
                        {bodyItems.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className={`${colWidth[cellIndex]} ${cellPadding} bg-white`}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default Table;
