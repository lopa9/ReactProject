import react from "react"

function WordLetterCounter(){
    const [text,setText] = useState("")
    
    wordCount= text.split(/\s+/).filter(Boolean).length;
    letterCount= text.length

   const handleTextChange= (e) => {
    setText(e.target.value)
   }

    return(
        <div>
      <textArea
            placeholder = "type something here...."
            onChange ={ handleTextChange} //to handling the event
            value = {text} // to capture user input from the state
            rows ={5}
            columns = {50}
       />

      <p>
        word count = {wordCount}
      </p>

      <p>
        letter count = {letterCount}
      </p>
        </div>
    )
}

export default WordLetterCounter