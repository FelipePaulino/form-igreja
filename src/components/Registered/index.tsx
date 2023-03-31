import * as M from "@mui/material"
import { styled, tableCellClasses } from "@mui/material";
import Waiting from "public/assets/svgs/Waiting";
import Done from "public/assets/svgs/Done";

function Registered({ data, click, admin, clickDelete }: any) {

  const StyledTHeadCell = styled(M.TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      color: theme.palette.primary.dark,
      textAlign: 'center'
    }
  }));

  return (
    <>
      {data && data?.fields &&
        <M.TableRow>
          <StyledTHeadCell>{data.fields?.nome}</StyledTHeadCell>
          <StyledTHeadCell sx={{
            display: {
              xs: 'none',
              md: 'revert'
            }
          }}>{data.fields?.celular}</StyledTHeadCell>
          <StyledTHeadCell sx={{
            display: {
              xs: 'none',
              md: 'revert'
            }
          }}>{data.fields?.celula}</StyledTHeadCell>
          <StyledTHeadCell >{data.fields?.lider}</StyledTHeadCell>
          <StyledTHeadCell sx={{
            display: {
              xs: 'none',
              md: 'revert'
            }
          }}>{data.fields?.rede}</StyledTHeadCell>
          <StyledTHeadCell sx={{
            display: {
              xs: 'none',
              md: 'revert'
            }
          }}>{data.fields?.igreja}</StyledTHeadCell>
          <StyledTHeadCell>{data.fields?.statusPagamento ? <Done /> : <Waiting />}</StyledTHeadCell>
          {admin &&
            <>
              {!data.fields?.statusPagamento ?
                <StyledTHeadCell>
                  <M.Button variant="contained" onClick={click}>Confirmar</M.Button>
                </StyledTHeadCell>
                :
                <StyledTHeadCell>
                  <M.Button variant="contained" onClick={click}>Desfazer</M.Button>
                </StyledTHeadCell>
              }
              <StyledTHeadCell>
                <M.Button variant="contained" onClick={clickDelete} sx={{ background: '#de0000'}}>Excluir</M.Button>
              </StyledTHeadCell>
            </>
          }
        </M.TableRow>
      }
    </>
  )
}

export default Registered