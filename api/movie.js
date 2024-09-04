//서버리스 함수 로직
// 서버리스 함수가 동작하는 환경은 브라우저가 아니라 vercel 패키지가 동작하는 node환경
// node에는 fetch가 없다...node fetch 패키지를 별도로 설치해준다.
// npm i node-fetch@2 (3버전은 오류남)

import fetch from 'node-fetch'

const { APIKEY } = process.env

export default async function handler(request, response) {
    const { title, page, id } = JSON.parse(request.body)
    const url = id 
        ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
        : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`
        
        const res = await fetch(url) 
        const json = await res.json()
        response
            .status(200)
            .json(json)
}
