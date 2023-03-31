import React from "react";
import * as M from "@mui/material"

function MaritalStatus({
  setMaritalStatusSelectProp,
  setTitleFormProp,
  setMarriedProp
}: any) {

  return (
    <M.Grid
      container
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <M.Typography variant='h3'>
        Você é...
      </M.Typography>
      <M.Grid
        container
        sx={{
          gap: '1rem'
        }}
      >
        <M.Button
          variant='contained'
          onClick={() => {
            setMaritalStatusSelectProp(true);
            setTitleFormProp('Preencha com seus dados')
          }}
        >
          Solteiro(a)
        </M.Button>
        <M.Button
          variant='contained'
          onClick={() => {
            setMaritalStatusSelectProp(true);
            setTitleFormProp('Preencha com seus dados e de seu cônjuge');
            setMarriedProp(true)
          }}
        >
          Casado(a)
        </M.Button>
      </M.Grid>
    </M.Grid>
  )
}

export default MaritalStatus