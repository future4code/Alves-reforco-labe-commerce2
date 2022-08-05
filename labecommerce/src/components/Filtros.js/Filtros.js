import React from 'react'
import { Menu, DivFiltros, Input, Label, H4, Botao} from './styled'

const Filtros = (props) => {

    return (
      <Menu>
        <DivFiltros>
            <Label>
              <H4>Valor Minimo: </H4>
              <Input
                value={props.inpuValorMin}
                onChange={props.onChangeInputValorMin}
                type={'number'}
              />
            </Label>
            <Label>
              <H4>Valor Máximo (R$): </H4>
              <Input
                value={props.inputValorMax}
                onChange={props.onChangeInputValorMax}
                type={'number'}
              />
            </Label>
            <Label>
              <H4>Busca por nome: </H4>
            <Input
                value={props.inputNomeProduto}
                onChange={props.onChangeInputNomeProduto}
                type={'text'}
                placeholder='Camisas...'
              /> 
            </Label>
            <Botao>Procurar</Botao>
              
        </DivFiltros> 
      </Menu>
    )
  }
  
  export default Filtros