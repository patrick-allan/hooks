import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2){
    let max = (s1.length > s2.length ? s1.length : s2.length);
    let retorno = '';
    for (let i = 0; i < max; i ++) {
        retorno += (typeof s1[i] === 'undefined'? '' : s1[i])
        retorno += (typeof s2[i] === 'undefined'? '' : s2[i])
    }    
    return retorno;
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current++
        myInput2.current.focus()
    }, [value1]) 

    useEffect(function(){
        count.current++
        myInput1.current.focus()
    }, [value2]) 
    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} 
                    onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input" 
                    ref={myInput2}
                    value={value2} 
                    onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
