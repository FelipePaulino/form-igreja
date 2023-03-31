import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import DefaultLayout from "@/layouts/DefaultLayout";
import { styled, tableCellClasses } from "@mui/material";
import Registered from "@/components/Registered";
import axios from "axios";
import LogoAcampa from "public/assets/svgs/LogoAcampa";
import ArrowLeft from "public/assets/svgs/ArrowLeft";
import {url} from '../../utils/urlbase'

function UserAdmin() {
  const [listSubscribers, setListSubscribers] = useState<any>();
  const [updateList, setUpdateList] = useState(false);
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const quantitySubscribes =
    listSubscribers && Object.values(listSubscribers).length.toString();
  const paymentConfirmed =
    listSubscribers &&
    Object.values(listSubscribers)
      ?.filter((item: any) => {
        return item.fields.statusPagamento;
      })
      .length.toString();

  const authentication = () => {
    if (
      (email === "administrador@aguaviva.com.br" && senha === "123456") ||
      (email === "mateusmsouza04@gmail.com" && senha === "CalebeFe#07")
    ) {
      setLogged(true);
    } else {
      alert("Email ou senha incorreto");
    }
  };

  useEffect(() => {
    axios
      .get("https://ibav-acampa-default-rtdb.firebaseio.com/infos.json")
      .then(function (response) {
        setListSubscribers(response.data);
      });
  }, [updateList]);

  const StyledTHeadCell = styled(M.TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.primary.dark,
      textAlign: "center",
    },
  }));

  const changePayment = (id: any, status: any) => {
    axios
      .put(
        `https://ibav-acampa-default-rtdb.firebaseio.com/infos/${id}/fields.json`,
        {
          ...status,
          statusPagamento: !status.statusPagamento,
        }
      )
      .then(() => {
        setUpdateList(!updateList);
      });
  };

  const deleteUser = (id: any) => {
    axios
      .delete(
        `https://ibav-acampa-default-rtdb.firebaseio.com/infos/${id}/.json`
      )
      .then(() => {
        setUpdateList(!updateList);
        alert("Inscrição excluida");
      });
  };

  const setPerson = new Set();

  const filterPerson =
    listSubscribers &&
    Object.entries(listSubscribers)?.filter((person: any) => {
      const duplicatedPerson = setPerson.has(person[1].fields.nome);
      setPerson.add(person[1].fields.nome);
      return !duplicatedPerson;
    });

  function compared(a: any, b: any) {
    if (a[1].fields.nome < b[1].fields.nome) return -1;
    if (a[1].fields.nome > b[1].fields.nome) return 1;
    return 0;
  }

  return (
    <DefaultLayout content="center" bgImage={`${url()}/assets/images/bg_site2.png`}>
      <M.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "2rem",
        }}
      >
        {!logged && (
          <M.Grid
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
              height: 500,
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
            container
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            gap="20px"
          >
            <LogoAcampa width={"100%"} />
            <M.TextField
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: {
                  xs: "80%",
                  md: "50%",
                },
              }}
            />
            <M.TextField
              label="Senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              sx={{
                width: {
                  xs: "80%",
                  md: "50%",
                },
              }}
            />
            <M.Button
              variant="contained"
              onClick={() => authentication()}
              sx={{
                width: "30%",
              }}
            >
              Entrar
            </M.Button>
          </M.Grid>
        )}
        {logged && (
          <>
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
            </M.Box>
            <M.TableContainer
              component={M.Paper}
              sx={{ maxHeight: "650px", overflowY: "scroll" }}
            >
              <M.Table aria-label="customized table">
                <M.TableHead
                  sx={{
                    "&>:nth-of-type(even)": {
                      background: "rgba(0, 0, 0, 0.1)",
                    },
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
                        return (
                          <Registered
                            data={person[1]}
                            key={index}
                            admin={true}
                            click={() =>
                              changePayment(person[0], person[1].fields)
                            }
                            clickDelete={() => deleteUser(person[0])}
                          />
                        );
                      })}
                </M.TableHead>
              </M.Table>
            </M.TableContainer>
          </>
        )}
      </M.Box>
    </DefaultLayout>
  );
}

export default UserAdmin;
