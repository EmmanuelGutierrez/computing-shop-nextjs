import React from 'react';
/* import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import { Login } from '../templates/Login';
import { NewPassword } from '../templates/NewPassword';
import { Home } from '../templates/Home';
import { NotFound } from '../templates/NotFound';
import '../styles/global.scss';
import { SendEmail } from '../templates/SendEmail';
import PasswordRecovery from '../templates/PasswordRecovery';
import { MyAccount } from '../templates/MyAccount';
import CreateAccount from '../templates/CreateAccount';
import Checkout from '../templates/Checkout';
import { Orders } from '../templates/Orders';
import { AppContext } from '../context/AppContext';*/

const App = (): JSX.Element => {
  return (
    <div>
      {/* <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="new-password" element={<NewPassword />} />

            <Route path="send-mail" element={<SendEmail />} />
            <Route path="password-recovery" element={<PasswordRecovery />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider> */}
    </div>
  );
};

export default App;
