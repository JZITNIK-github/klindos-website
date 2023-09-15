import ReactDOM from 'react-dom';
import App from './App';
import LoadingBar from 'react-top-loading-bar'
ReactDOM.render(
    <>
        <LoadingBar
        color='#f11946'
        transitionTime={200}
        />
        <App />
    </>
    ,document.getElementById("root")
)