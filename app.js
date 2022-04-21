// <!-- <div class="note">
//     <div class="operation">
//       <button class="edit"><i class="fas fa-edit"></i></button>
//       <button class="delete"><i class="fas fa-trash-alt"></i></button>
//     </div>

//     <div class="main"></div>
//     <textarea class="" placeholder="Write notes here..."></textarea>

//     </div> -->

const addNote = document.querySelector("#add")

addNote.addEventListener("click", ()=> addNewNote())

const storeLocal = () => {

      // local storage store
      const textAreaValue = document.querySelectorAll('textarea')
      const notes = []

      console.log(textAreaValue)

      // pushing in notes array
      textAreaValue.forEach((i)=>{
        return notes.push(i.value)
      })

      // [1,2] i-iterate note[1]--notes[1,2]


      console.log(notes)
      
      // saving notes array in local storage(key : value)
      localStorage.setItem('notes',JSON.stringify(notes))
      // key-notes, value-string(JS)

}



function addNewNote(text=''){

//console.log(text)

const note = document.createElement("div")

  note.classList.add("note")

  const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div>
    <div class="main ${text ? "" : "hidden"} "> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
     `

     // we cannot edit --- div
     // we can edit --- text area

     //button click --- toggle(javascript)

     // class = hidden(diplay: none)

     // text = ''(BY DEFAULT)
     // line-29 text ---> SOMETHING IS WRITTEN ? - Text(TRUE)--hidden

     // 


  note.insertAdjacentHTML("afterbegin", htmlData)
  // console.log(note)

  // getting the References
  const editButton =note.querySelector(".edit")

  const delButton =note.querySelector(".delete")

  const mainDiv =note.querySelector(".main")

  const textArea =note.querySelector("textarea")


  // deleting the node
  delButton.addEventListener("click", ()=>{
    note.remove()
  })

    editButton.addEventListener("click", ()=>{

    mainDiv.classList.toggle("hidden")

    textArea.classList.toggle("hidden")
  })

  textArea.addEventListener("change", (event)=>{
    const value = event.target.value

    mainDiv.innerHTML = value
    //<div>My name is sid</div>
    console.log(value)
    storeLocal()

  });

    document.body.appendChild(note)
  // it appeds a node as the last child of  a node


  // values coming from local storage
  textArea.value = text
  mainDiv.innerHTML = text


}

  // fetch values from local storage
 
// accessing the local storage data through key  
const data = JSON.parse(localStorage.getItem('notes'))
  console.log(data)
   //data exists 
  if(data){
    data.forEach((note) =>addNewNote(note))
    
  }


// js dom
// react basics
// js basics

// js dom project (revision)
// react basic project (revision)

// projects - (3-4)

// 18-04-2022
// Basics --- start projects()

// 2 session - local storage - github
