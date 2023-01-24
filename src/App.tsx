import React from 'react';
import ScoreboardPage from './components/Pages/Scoreboard/Scoreboard';
import './assets/fonts/Ozone/Ozone-xRRO.ttf';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import TranslationsProvider from './contexts/translations';

/**
 * Here pages can be handled by navigators.
 */
const App = () => {
  return (
    <div className="App">
      <TranslationsProvider>
        <ScoreboardPage />
      </TranslationsProvider>
    </div>
  );
}

export default App;
