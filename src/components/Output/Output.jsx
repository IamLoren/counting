import React from 'react'
import { OutputWrapper, Paragraph, firstPar, fourthPar, secondPar, thirdPar} from './Output.styled.js'

const Output = ({data}) => {
  
  return (
    <OutputWrapper>
        <Paragraph delay={0}>Максимальне число: {data?.max}</Paragraph>
        <Paragraph delay={2}>Мінімальне число: {data?.min}</Paragraph>
        <Paragraph delay={4}>Медіана:{data?.mediana}</Paragraph>
        <Paragraph delay={6}>Середнє арифметичне: {data?.average}</Paragraph>
    </OutputWrapper>
  )
}

export default Output