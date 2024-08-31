import { Store } from '../core/core' 

const store = new Store({
    searchText: '',
    page: 1,
    movies: []
})

export default store
export const searchMovies = async page => {
    //vercel을 사용할거라 요청url도 http에서 https로 바꿔줘야함
    const res = await fetch(`https://www.omdbapi.com/?apikey=e63959c9&s=${store.state.searchText}&page=${page}`)
    const json = await res.json()
    console.log(json)
}
