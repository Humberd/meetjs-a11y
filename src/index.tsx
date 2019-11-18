import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppHeader } from './components/header';
import { UsersList } from './components/users';
import { DialogsContext } from './services/dialogs.service';
import { observer } from 'mobx-react';

const App: React.FC = observer(() => {
  const dialogsService = useContext(DialogsContext);

  return (
      <main className="App">
        <AppHeader/>
        <UsersList/>
        {dialogsService.dialogRef && dialogsService.dialogRef.elem}
      </main>
  );
});

ReactDOM.render(<App/>, document.getElementById('root'));
