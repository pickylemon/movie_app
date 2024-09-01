import { Store } from '../core/core' 

const store = new Store({
    searchText: '',
    page: 1,
    pageMax : 1,
    movies: [],
    loading: false,
    message : 'Search for the movie title!' //기본 메시지
})

export default store
export const searchMovies = async page => {
    store.state.loading = true
    store.state.page = page
    if (page === 1) {
        store.state.movies = []
        store.state.message = ''
    }
    //vercel을 사용할거라 요청url도 http에서 https로 바꿔줘야함
    try{
        const res = await fetch(`https://www.omdbapi.com/?apikey=e63959c9&s=${store.state.searchText}&page=${page}`)
        const { Search, totalResults, Response, Error } = await res.json()
        if(Response === 'True') {
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ]
            store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        } else {
            store.state.message = Error
        }
    } catch(error) {
        console.log('searchMovies error:', error)
    } finally {
        store.state.loading = false //loading true와 false
        //API로부터의 응답이 True, False 관계 없이 loading은 종료해주어야 한다.
        //+에러 상황에서도 loading은 false로 바꿔주어야 하므로 finally 문 안으로!
    }
}
