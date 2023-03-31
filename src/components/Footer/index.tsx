import React from "react"
import * as M from "@mui/material"

function Header() {
    return (
        <M.Toolbar sx={{ justifyContent: 'center', background: '#fff', width: '100%' }} >
            <M.Typography>
                2023 © Todos os direitos reservados
            </M.Typography>
        </M.Toolbar>
    )
}

export default Header
