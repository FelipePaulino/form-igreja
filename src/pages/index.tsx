import React, { useState } from 'react'
import DefaultLayout from '@/layouts/DefaultLayout'
import * as M from "@mui/material"
import { MaritalStatus, ApplicationForm, Header } from '@/components'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'

function Home() {
  const [maritalStatusSelect, setMaritalStatusSelect] = useState(false);
  const [married, setMarried] = useState(false);
  const [titleForm, setTitleForm] = useState('');
  const { push } = useRouter();

  if (typeof window !== 'undefined') {
    document.title = 'Acampamento Erupção | Nada além de Jesus!'
  }

  const RenderingComponents = () => {
    if (maritalStatusSelect === false) {
      return (
        <MaritalStatus
          setMaritalStatusSelectProp={setMaritalStatusSelect}
          setTitleFormProp={setTitleForm}
          setMarriedProp={setMarried}
        />
      )
    }
    else if (maritalStatusSelect === true) {
      return (
        <ApplicationForm
          setMaritalStatusSelectProp={setMaritalStatusSelect}
          titleFormProp={titleForm}
          marriedProp={married}
          setMarriedProp={setMarried}
        />
      )
    }
  }


  return (
    <DefaultLayout bgImage={"./assets/images/bg_site2.png"}>
      <Header />
      <M.Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          gap: '20px'
        }}
      >
        <M.Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'rgb(232, 240, 254, 0.9)',
            borderRadius: '10px'
          }}
        >
          {RenderingComponents()}
        </M.Grid>
        <M.Button
          onClick={() => push('/listaDeInscritos')}
          variant="contained"
          sx={{ backgroundColor: "primary.dark" }}
        >
          Lista de inscritos
        </M.Button>
      </M.Box>
      <Footer />
    </DefaultLayout>
  )
}

export default Home
