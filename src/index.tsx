import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { UsersHeader } from './components/users-header';
import { UsersTable } from './components/users';
import { DialogsContext } from './services/dialogs.service';
import { observer } from 'mobx-react';
import { AnnouncerContext } from './services/announcer.service';
import { AppHeader } from './components/app/app-header';
import { AppFooter } from './components/app/app-footer';

const App: React.FC = observer(() => {
  const {dialogRef} = useContext(DialogsContext);
  const {text} = useContext(AnnouncerContext);

  return (
      <>
        <AppHeader/>
        <main className="App">
          <UsersHeader/>
          <UsersTable/>
          <div aria-live="polite" className="visually-hidden">
            {text}
          </div>
          {dialogRef && dialogRef.elem}
        </main>
        <AppFooter/>
      </>
  );
});

ReactDOM.render(<App/>, document.getElementById('root'));
