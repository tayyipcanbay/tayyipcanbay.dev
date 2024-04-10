// word-card.jsx
import React from "react";
import "./word-card.css"; // Import the CSS file

const WordCard = ({ word, translation, language }) => {
  const handlePlay = () => {
    // Create a new SpeechSynthesisUtterance instance with the word
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Set the language to Polish
    utterance.lang = language; // Polish language code
    
    // Set the voice to a Polish voice (if available)
    const polishVoices = window.speechSynthesis.getVoices().filter(voice => voice.lang === 'pl-PL');
    if (polishVoices.length > 0) {
      utterance.voice = polishVoices[0];
    }
    
    // Speak the word using the SpeechSynthesis API
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="word-card">
      <div className="word">{word}</div>
      <div className="translation">{translation}</div>
      <button className="play-button" onClick={handlePlay}>Play</button>
    </div>
  );
};

export default WordCard;