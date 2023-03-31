import React from "react";;
import * as M from "@mui/material";
import { maskPhone } from "@/utils/masks";

function BoxForm({ fieldsProp, handleChangeProp }: any) {
  return (
    <M.Grid
      container
      direction='column'
      justifyContent='center'
      gap='2rem'
    >
      <M.Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <M.Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <M.TextField
            label="Nome completo"
            name="nome"
            value={fieldsProp.nome}
            onChange={handleChangeProp}
          />
          <M.TextField
            label="Celular"
            name="celular"
            value={maskPhone(fieldsProp.celular)}
            onChange={handleChangeProp}
          />
        </M.Grid>
        <M.Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <M.TextField
            label="Número da célula"
            name="celula"
            value={fieldsProp.celula}
            onChange={handleChangeProp}
          />
          <M.TextField
            label="Líder"
            name="lider"
            value={fieldsProp.lider}
            onChange={handleChangeProp}
          />
        </M.Grid>
        <M.Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
        >
          <M.TextField
            label="Rede"
            name="rede"
            value={fieldsProp.rede}
            onChange={handleChangeProp}
          />
          <M.TextField
            label="Igreja"
            name="igreja"
            value={fieldsProp.igreja}
            onChange={handleChangeProp}
          />
        </M.Grid>
      </M.Box>
    </M.Grid>
  )
}

export default BoxForm