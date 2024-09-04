import App from './App'
import router from './routes' //index는 생략 가능

const root = document.querySelector('#root')
root.append(new App().el)

router()

// ;(async () => {
//     const res = await fetch('/api/test')
//     const json = await res.json()
//     console.log('api/test', json)
// })() //테스트 코드