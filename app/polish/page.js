// page.js
'use client';

import ScroolContent from "@/components/scrool-content";
import WordCard from "@/components/word-card-pl";


export default function Page() {

  const wordsData = [
    { word: "Dzień dobry", translation: "Good morning" },
    { word: "Cześć", translation: "Hello" },
    { word: "Jak się masz?", translation: "How are you?" },
    { word: "Dziękuję", translation: "Thank you" },
    { word: "Proszę", translation: "Please" },
    { word: "Przepraszam", translation: "I'm sorry" },
    { word: "Do widzenia", translation: "Goodbye" },
    { word: "Co u ciebie?", translation: "What's up with you?" },
    { word: "Jestem z Polski", translation: "I am from Poland" },
    { word: "Czy mówisz po angielsku?", translation: "Do you speak English?" },
    // Add more phrases as needed
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
