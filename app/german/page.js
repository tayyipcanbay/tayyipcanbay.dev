// page.js
'use client';

import ScroolContent from "@/components/scrool-content";
import WordCard from "@/components/word-card-de";


export default function Page() {

  const wordsData = [
    { word: "Guten Morgen", translation: "Good morning" },
    { word: "Hallo", translation: "Hello" },
    { word: "Wie geht es dir?", translation: "How are you?" },
    { word: "Danke", translation: "Thank you" },
    { word: "Bitte", translation: "Please" },
    { word: "Es tut mir leid", translation: "I'm sorry" },
    { word: "Auf Wiedersehen", translation: "Goodbye" },
    { word: "Was gibt's Neues bei dir?", translation: "What's up with you?" },
    { word: "Ich komme aus Polen", translation: "I am from Poland" },
    { word: "Sprichst du Englisch?", translation: "Do you speak English?" },
  ];
  
  

  const handlePlay = (word) => {
    // Add code to play pronunciation of the word
    console.log(`Playing pronunciation of ${word}`);
  };

  return (
    <>
      <ScroolContent>
        {wordsData.map((wordData, index) => (
          <WordCard
            key={index}
            word={wordData.word}
            translation={wordData.translation}
            onPlay={() => handlePlay(wordData.word)}
          />
        ))}
      </ScroolContent>
    </>
  )
}
