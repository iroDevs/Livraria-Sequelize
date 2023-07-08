import React from 'react';
import "./BodyStyle.css"

const Index = ({bodyId}) => {
    console.log(bodyId);

    if (bodyId === 1) {
        return (
            <form>
                <h1>Cadastrar livro</h1>        
            </form>
        );   
    } else if (bodyId === 2) {
        return (
        <form>
            <h1>Cadastrar Autor</h1>        
        </form>
        );
    }
    else if (bodyId === 3) {
       return ( 
       <form>
            <h1>Ver Livros</h1>        
        </form>
       );
    }
}

export default Index;
