import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import DefaultLayout from "@/layouts/DefaultLayout";
import { styled, tableCellClasses } from "@mui/material";
import Registered from "@/components/Registered";
import axios from "axios";
import ArrowLeft from "public/assets/svgs/ArrowLeft";
import { Header } from "@/components";
import Footer from "@/components/Footer";

function ListSubscribes() {
  const [listSubscribers, setListSubscribers] = useState<any>();

  useEffect(() => {
    axios
      .get("https://ibav-acampa-default-rtdb.firebaseio.com/infos.json")
      .then(function (response) {
        setListSubscribers(response.data);
      });
  }, []);

  const quantitySubscribes =
    listSubscribers && Object.values(listSubscribers).length.toString();
  const paymentConfirmed =
    listSubscribers &&
    Object.values(listSubscribers)
      ?.filter((item: any) => {
        return item.fields.statusPagamento;
      })
      .length.toString();

  const setPerson = new Set();

  const filterPerson =
    listSubscribers &&
    Object.values(listSubscribers)?.filter((person: any) => {
      const duplicatedPerson = setPerson.has(person.fields.nome);
      setPerson.add(person.fields.nome);
      return !duplicatedPerson;
    });

  const StyledTHeadCell = styled(M.TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.primary.dark,
      background: "#fff",
      textAlign: "center",
    },
  }));

  function compared(a: any, b: any) {
    if (a.fields.nome < b.fields.nome) return -1;
    if (a.fields.nome > b.fields.nome) return 1;
    return 0;
  }

  return (
    <DefaultLayout bgImage={"./assets/images/bg_site2.png"}>
      <Header />
      <M.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: {
            xs: "10px",
            sm: "2rem",
          },
        }}
      >
        <M.TableContainer sx={{ marginBottom: "10px" }}>
          <a
            href="/acampa2023"
            style={{
              color: "#fff",
              fontSize: "24px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ArrowLeft />
            Inscreva-se
          </a>
        </M.TableContainer>
        <M.Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: "center",
            width: "100%",
            padding: {
              xs: "10px",
              sm: "2rem",
            },
          }}
        >
          <M.Typography
            variant="body1"
            sx={{
              display: "flex",
              alignContent: "center",
              color: "#fff",
              padding: "5px 10px",
            }}
          >
            Total de Inscritos: {quantitySubscribes}
          </M.Typography>
          <M.Typography
            variant="body1"
            sx={{
              display: "flex",
              alignContent: "center",
              color: "#fff",
              padding: "5px 10px",
            }}
          >
            Pagamentos confirmados: {paymentConfirmed}
          </M.Typography>
          <M.Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color: "#fec401",
              border: "2px solid #fec401",
              padding: "5px 10px",
              textAlign: "center",
            }}
          >
            A confirmação será realizada no final do dia e mediante todo valor
            pago
          </M.Typography>
        </M.Box>
        <M.TableContainer
          component={M.Paper}
          sx={{ maxHeight: "650px", overflowY: "scroll" }}
        >
          <M.Table aria-label="customized table">
            <M.TableHead
              sx={{
                "&>:nth-of-type(even)": { background: "rgba(0, 0, 0, 0.1)" },
              }}
            >
              <M.TableRow>
                <StyledTHeadCell>Nome</StyledTHeadCell>
                <StyledTHeadCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "revert",
                    },
                  }}
                >
                  Celular
                </StyledTHeadCell>
                <StyledTHeadCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "revert",
                    },
                  }}
                >
                  Número de célula
                </StyledTHeadCell>
                <StyledTHeadCell>Lider</StyledTHeadCell>
                <StyledTHeadCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "revert",
                    },
                  }}
                >
                  Rede
                </StyledTHeadCell>
                <StyledTHeadCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "revert",
                    },
                  }}
                >
                  Igreja
                </StyledTHeadCell>
                <StyledTHeadCell>Aguardando pagamento</StyledTHeadCell>
              </M.TableRow>
              {listSubscribers &&
                filterPerson
                  .sort(compared)
                  .map((person: any, index: number) => {
                    return <Registered data={person} key={index} />;
                  })}
            </M.TableHead>
          </M.Table>
        </M.TableContainer>
      </M.Box>
      <Footer />
    </DefaultLayout>
  );
}

export default ListSubscribes;
