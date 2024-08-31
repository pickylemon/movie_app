import { Store } from '../core/core' 

const store = new Store({
    searchText: '',
    page: 1,
    movies: []
})

export default store
export const searchMovies = async page => {
    if (page === 1) {
        // 초기화
        store.state.page = 1
        store.state.movies = []
    }
    //vercel을 사용할거라 요청url도 http에서 https로 바꿔줘야함
    const res = await fetch(`https://www.omdbapi.com/?apikey=e63959c9&s=${store.state.searchText}&page=${page}`)
    const { Search } = await res.json()
    store.state.movies = [
        ...store.state.movies,
        ...Search
    ]
}
