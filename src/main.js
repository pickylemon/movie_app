import App from './App'
import router from './routes' //index는 생략 가능

const root = document.querySelector('#root')
root.append(new App().el)

router()