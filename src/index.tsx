import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppHeader } from './components/header';
import { UsersList } from './components/users';
import { DialogsContext } from './services/dialogs.service';
import { observer } from 'mobx-react';
import { AnnouncerContext } from './services/announcer.service';
import Announcer from 'react-a11y-announcer';

const App: React.FC = observer(() => {
  const dialogsService = useContext(DialogsContext);
  const announcerService = useContext(AnnouncerContext);

  return (
      <main className="App">
        <AppHeader/>
        <UsersList/>
        <Announcer text={announcerService.text}/>
        {dialogsService.dialogRef && dialogsService.dialogRef.elem}
      </main>
  );
});

ReactDOM.render(<App/>, document.getElementById('root'));
