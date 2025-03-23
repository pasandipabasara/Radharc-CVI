import React from 'react';
import SignUp from './components/SignUp';
import SymbolCommunication from './components/SymbolCommunication';
import LanguageDevelopment from './components/LanguageDevelopment';
import Customization from './components/Customization';
import CommunitySupport from './components/CommunitySupport';
import Voices from './components/Voices';
import GridSize from './components/GridSize';
import Keyboard from './components/Keyboard';
import YesNo from './components/YesNo';

const App = () => {
  return (
    <div>
      <SignUp />
      <SymbolCommunication />
      <LanguageDevelopment />
      <Customization />
      <CommunitySupport />
      <Voices />
      <GridSize />
      <Keyboard />
      <YesNo />
    </div>
  );
};

export default App;