import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { UsersHeader } from './components/users-header';
import { UsersList } from './components/users';
import { DialogsContext } from './services/dialogs.service';
import { observer } from 'mobx-react';
import { AnnouncerContext } from './services/announcer.service';
import { AppHeader } from './components/app/app-header';

const App: React.FC = observer(() => {
  const {dialogRef} = useContext(DialogsContext);
  const {text} = useContext(AnnouncerContext);

  return (
      <>
        <AppHeader/>
        <main className="App">
          <UsersHeader/>
          <UsersList/>
          <div className="visually-hidden" aria-live="polite">
            {text}
          </div>
          {dialogRef && dialogRef.elem}
        </main>
      </>
  );
});

ReactDOM.render(<App/>, document.getElementById('root'));
