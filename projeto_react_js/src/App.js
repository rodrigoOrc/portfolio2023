import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// importando manipulação de variáveis


// Aqui é o funcionamento do App em si; sua programação vai estar dentro da div "App", e funções
//vão ser estabelecidas antes da div
function App() {

    let[list, setList] = useState([])
    let[newItem, setNewItem] = useState("")
    //Aqui estamos caracterizando as funções dentro do App como "useState", estilo de função
    //embutida que permite a manipulação de variáveis.
    //"let" cria um novo array e sua função.

    useEffect(() => {
      setList(["Task #1 (Un-editable)"]) 
      },[]
    )
    //"useEffect" vai automaticamente adicionar a tarefa (Tasks) ao array "List" ao final
    // da renderização do programa.


  return (
    <div className="App">
        <div className = "Title">
          <h1>To-Do List</h1>

        </div>

        <div className = "AppHeader">
          <input value = {newItem} onChange = {value => setNewItem(value.target.value)} type= 'text'/>

          <div classname = "AddButton">
            <button onClick={() => addNewItem()}>Add</button> 
          <div/>

        <div/>

    <ul className= 'finalList'>
      {list.map ((item, index) => (
      <li key={index} className= 'finalListItem'>
      <input type="checkbox" id= {item} />

       {item}

       <button onClick = {() => deleteItem(index)}>   Delete</button>
       <button onClick = {() => editItem(index)}>   Edit</button>
      </li> ))}
    </ul>


    </div>
    </div>
    </div>
  );


//A ul definida na linha 24, 'finalList', é como a lista de tarefas finais será demonstrada, dependendo do número do item. 
// Também foram definidos dois botões, um de deletar e outro de editar o item.
//----------------------------------------------------------------------------------------------

  function addNewItem(){
      setList([ ... list, newItem])
      setNewItem("")
  }  // Essa função adiciona um novo item à lista chamando a setNewItem, definida como useState,
  //o que permitirá a alteração de um item dentro do array "list" (nesse caso, adição.)
  // As reticências (...) pegam os itens do Array "list" anterior para criar o novo "list" com os itens anteriores.

  function editItem(index){

    let tempArray = [... list];
    for(var i in tempArray){
      if (tempArray[i] === tempArray[index]){
        tempArray[index] = setNewItem(["Edit task:"]);
        tempArray.splice(index,1)
        break;
      }

    setList (tempArray);
    }
  }
 
  function deleteItem(index){
    let tempArray = [... list];
    tempArray.splice(index, 1)

    setList(tempArray);
  } //Essa função cria um array temporário que pega os elementos do anterior e deleta o item escolhido.
  
}

export default App;
