import React, { useState } from "react";

export default function Body(
    {children}: {children: React.ReactNode}
) {
    return (
        <body data-theme="lofi">
            {children}
        </body>
    )
}