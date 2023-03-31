import React from "react"
import * as M from "@mui/material"
import LogoAcampa from "public/assets/svgs/LogoAcampa"

function Header() {
  return (
    <M.AppBar position="relative" variant="elevation">
      <M.Toolbar sx={{ background: '#fbfbfb', padding: '30px 0 20px', justifyContent: {
        xs: 'center',
        sm: 'space-between'
      } }} >
        <LogoAcampa width={200} />
      </M.Toolbar>
    </M.AppBar>
  )
}

export default Header
