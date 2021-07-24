const getValueInput = () =>{
  const inputValue = document.getElementById("reco").value; 
  const rinde = document.getElementById("rind").value; 
  const nafta = document.getElementById("nafta").value; 
  console.log(nafta)
  const litrosgastados = inputValue / rinde;
    var pesos = litrosgastados * nafta ;
    pesos = Math.round(pesos)
  document.getElementById("valueInput").innerHTML =`Usted gasto ${litrosgastados} litro de nafta, lo cual equivale a $${pesos}` ;  

}
