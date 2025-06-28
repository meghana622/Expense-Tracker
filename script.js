
 let table=document.getElementById('table')
    console.log(table)
    const onclick="removeRow()", imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-1IHJrrSs4fUzyxV558iaZw7HT8h_CD_pnbLfrl8fWeWBtMBQBP0ThgG8YpsLjdzM-0&usqp=CAU"
     const img=new Image()
      img.src=imageURL
      //let image=document.body.appendChild(img)

        function inputValues(){
        let date=document.getElementsByClassName("input")[0].value
        let amount=document.getElementsByClassName("input")[1].value
        let transaction=document.getElementsByClassName("input")[2].value
        console.log("retrieved:",date,amount,transaction)
        let fill=document.querySelector(".fillout")
        if (!date || !amount || !transaction){
            fill.innerHTML='Please fill out all fields!'
             return 
        }
        if(fill){
          fill.innerHTML=''
        }
        
        let tablebody=document.querySelector("tbody")
        if (!tablebody){
            alert("Table body not found")
        
        }
        let newRow=document.createElement("tr")
        newRow.innerHTML=`
        <td>${date}</td>
        <td>${amount}</td>
        <td>${transaction}</td>
        <td><img src="${imageURL}" alt="image"></td>`
        //append new row to table body
        tablebody.appendChild(newRow)
         
        let delrow=newRow.querySelector("img")
        delrow.addEventListener("click",
        function(){
            removeRow(this)
        })
        //find the clicked <img> and remove it
        function removeRow(imgElement){
            const row =imgElement.closest("tr")
            if(row){
                row.remove()
            }
        }

        //adding income, expense and balance
        let income=document.getElementById("income").innerText
        let expense=document.getElementById("expense").innerText
        let balance=document.getElementById("balance").innerText
        
        if(transaction=='Income')
        {
          if(income=='0') 
          {
               document.getElementById("income").innerText=amount
          } 
          else
          {
           
            document.getElementById("income").innerText= parseInt(income)+parseInt(amount)
          }
          if(balance=='0'){
            document.getElementById('balance').innerText=amount
          }
          else{
            document.getElementById('balance').innerText=parseInt(income)+parseInt(amount)
          }
        } 
    
        if(transaction=="Expense")
        {
              if(expense=='0'){
                document.getElementById("expense").innerText=amount
              }
              else{
                document.getElementById("expense").innerText=parseInt(expense)+parseInt(amount)
              }
              if(balance=='0'){
                document.getElementById('balance').innerText=amount
              }
              else{
                document.getElementById('balance').innerHTML=parseInt(balance)-parseInt(amount)
              }
        }
       
    } 
