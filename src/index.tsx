import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppHeader } from './components/header';
import { UsersList } from './components/users';
import { DialogsContext } from './services/dialogs.service';
import { observer } from 'mobx-react';
import { AnnouncerContext } from './services/announcer.service';
import { SearchBar } from './components/search-bar';

const App: React.FC = observer(() => {
  const {dialogRef} = useContext(DialogsContext);
  const {politeness, text} = useContext(AnnouncerContext);

  return (
      <main className="App">
        <AppHeader/>
        <SearchBar/>
        <UsersList/>
        <div className="visually-hidden" aria-live={politeness}>
          {text}
        </div>
        {dialogRef && dialogRef.elem}
      </main>
  );
});

ReactDOM.render(<App/>, document.getElementById('root'));
