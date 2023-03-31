import React, { useState } from "react";
import * as M from "@mui/material"
import axios from "axios";
import { BoxForm } from "..";
import { SelectChangeEvent } from "@mui/material";

function ApplicationForm({
  setMaritalStatusSelectProp,
  titleFormProp,
  marriedProp,
  setMarriedProp
}: any) {

  const [payment, setPayment] = useState('');
  const [fields, setFields] = useState<any>({
    nome: "",
    celula: "",
    rede: "",
    celular: "",
    lider: "",
    igreja: "",
    statusPagamento: false
  });

  const [fieldsMarried, setFieldsMarried] = useState<any>({
    nome: "",
    celula: "",
    rede: "",
    celular: "",
    lider: "",
    igreja: "",
    statusPagamento: false
  });

  const handleChangePayment = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  const handleChange = (e: any) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }

  const handleChangeMarried = (e: any) => {
    setFieldsMarried({ ...fieldsMarried, [e.target.name]: e.target.value });
  }

  const cadastro = () => {
    axios.post('https://ibav-acampa-default-rtdb.firebaseio.com/infos.json', {
      fields
    })
      .then(() => {
        alert('Cadastrado com successo!')
        if (marriedProp) {
          if (payment === 'pix') {
            window.location.href = 'https://nubank.com.br/pagar/3ywsb/iBPlwugvrQ'
          }
          if (payment === 'cartao') {
            window.location.href = 'https://pag.ae/7Z5g1kDEn'
          }
        } else {
          if (payment === 'pix') {
            window.location.href = 'https://nubank.com.br/pagar/3ywsb/XWYzB8iduI'
          }
          if (payment === 'cartao') {
            window.location.href = 'https://pag.ae/7Z5eci7-n'
          }
        }
      }).catch(function () {
        alert('algo deu errado')
      })
  }

  const cadastroConjugue = () => {
    axios.post('https://ibav-acampa-default-rtdb.firebaseio.com/infos.json', {
      fields: fieldsMarried
    })
  }

  const registerSubscribed = () => {
    if (marriedProp) {
      if (fields.nome.length > 0 &&
        fields.celula.length > 0 &&
        fields.rede.length > 0 &&
        fields.celular.length > 0 &&
        fields.lider.length > 0 &&
        fields.igreja.length > 0 &&
        fieldsMarried.nome.length > 0 &&
        fieldsMarried.celula.length > 0 &&
        fieldsMarried.rede.length > 0 &&
        fieldsMarried.celular.length > 0 &&
        fieldsMarried.lider.length > 0 &&
        fieldsMarried.igreja.length > 0 &&
        payment
      ) {
        if (payment === 'pix') {
          cadastro()
          cadastroConjugue()
        }
        if (payment === 'cartao') {
          cadastro()
          cadastroConjugue()
        }
      } else {
        alert('Preencha todos os campos')
      }
    } else {
      if (fields.nome.length > 0 &&
        fields.celula.length > 0 &&
        fields.rede.length > 0 &&
        fields.celular.length > 0 &&
        fields.lider.length > 0 &&
        fields.igreja.length > 0 &&
        payment
      ) {
        if (payment === 'pix') {
          cadastro()
        }
        if (payment === 'cartao') {
          cadastro()
        }
      } else {
        alert('Preencha todos os campos')
      }
    }
  }

  return (
    <M.FormControl
      sx={{
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <M.Typography variant="h4">
        {titleFormProp}
      </M.Typography>
      <M.Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        gap='2rem'
      >
        <BoxForm
          handleChangeProp={handleChange}
          fieldsProp={fields}
        />
        {marriedProp &&
          <>
            <M.Divider />
            <M.Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <BoxForm
                handleChangeProp={handleChangeMarried}
                fieldsProp={fieldsMarried}
              />
            </M.Box>
          </>
        }
        <M.FormControl sx={{
          width: {
            xs: '223px',
            sm: '470px'
          }
        }}>
          <M.InputLabel id="demo-select-small">Forma de pagamento</M.InputLabel>
          <M.Select
            value={payment}
            label="Forma de pagamento"
            onChange={handleChangePayment}
          >
            <M.MenuItem value='pix'>Pix</M.MenuItem>
            {/* <M.MenuItem value='cartao'>Cartão</M.MenuItem> */}
          </M.Select>
        </M.FormControl>
      </M.Grid>
      <M.Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center" sx={{ gap: '0.5rem' }}
      >
        <M.Button
          variant='contained'
          onClick={registerSubscribed}
          sx={{
            width: '40%',
          }}
        >
          enviar
        </M.Button>
        <M.Button
          variant='contained'
          sx={{ alignSelf: "flex-end" }}
          onClick={() => {
            setMaritalStatusSelectProp(false);
            setMarriedProp(false)
          }}
        >
          Voltar
        </M.Button>
      </M.Grid>
    </M.FormControl>
  )
}

export default ApplicationForm