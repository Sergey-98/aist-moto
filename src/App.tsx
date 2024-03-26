import React, { useReducer, useState } from 'react';
import { Parser } from 'html-to-react';
import './styles/App.css';
import Header from 'components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { reducer,formReducer, formCallbackReducer } from 'reducer/reducer';
import { Context } from 'Context/Context';
import AppRouter from './components/AppRouter';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import UpButton from 'components/UI/UpButton/UpButton';
import ModalCallback from 'components/ModalCallback/ModalCallback';

function App() {
  const initialState = { isOpenModal: false, loading: true, isOpenModalCallback: false };
  const initialFormState = {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    errorName: '',
    errorNumber: '',
    errorEmail: '',
    errorMessage: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const initialFormCallbackState = {
    name: '',
    phoneNumber: '',
  };
  const [formCallbackState, formCallbackDispatch] = useReducer(
    formCallbackReducer,
    initialFormCallbackState
  );
  
  // const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [isBurger, setIsBurger] = useState(false);
  const [catalogTitle, setCatalogTitle] = useState(String(localStorage.getItem('catalogTitle')));
  // const [loading, setLoading] = useState(true);
  const rawHTML = `
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
      ym(96282251, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/96282251" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    `;
  return (
    <Context.Provider 
      value={{ 
        state, 
        dispatch,
        formState,
        formDispatch,
        formCallbackState,
        formCallbackDispatch,
        isBurger,
        setIsBurger,
        catalogTitle,
        setCatalogTitle,
        // forkliftState,
        // forkliftDispatch,
      }}>
      {/* <body className="App"> */}
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
          <UpButton />
          <Modal />
          <ModalCallback/>
        </BrowserRouter>
        {Parser().parse(rawHTML)}
      {/* </body> */}
    </Context.Provider>
  );
}

export default App;