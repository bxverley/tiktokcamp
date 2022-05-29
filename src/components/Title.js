 
export default function Title(){
   
    return(
        <><div className="Title p-8">
            <p className="text-3xl text-white font-bold mb-5">
                HANGMAN GAME
            </p>
            <p className="text-white text-lg">
                By Group 2<br></br>
            </p>
        </div><div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <p className= "text-3xl text-gray-700 font-bold mb-5">
                HOW TO PLAY
            </p>
            <p>
                This is our group's rendition of the classic hangman game! Instead of the same classic visuals 
                we decided to put our unique twist to it.<br></br>These are the rules:<br></br>1. Try to guess the word based on the number of letters in the word 
                <br></br>2. To guess a letter, input a letter by clicking on the specified letter on the screen and press ENTER.
                <br></br>3. When the letter is correct, the blanks are filled based on how many of such letter is in the word
                <br></br>4. When the letter is wrong, the letter would be cancelled from the letter bank and the person would be shifted closer to the noose :o
                <br></br>5. Be careful! You only have 6 wrong guesses before the person meets their demise
            </p>
            <p className="text-2xl text-gray-700 font-bold mb-1">
                Have fun!! :D 
            </p>

            </div></>

    );
}