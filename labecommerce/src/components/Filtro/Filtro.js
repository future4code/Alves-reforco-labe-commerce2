import React from 'react'

const Filtro = () => {
  return (
    <Menu>
      <DivFiltros>
        <H1>Filtros</H1>
          <Label>
            <H4>Valor Minimo (R$): </H4>
            <input />
          </Label>
          <Label1>
            <H4>Valor Máximo (R$): </H4>
            <input />
          </Label1>
          <Label1>
            <H4>Busca: </H4>
          </Label1>
            <input />
      </DivFiltros> 
    </Menu>
  )
}

export default Filtro