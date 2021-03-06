const movieSvc = {
    groupMovies(movies) {
        const data = movies.slice();
        const result = data.reduce( function( array, current, index, arr) {
            if(index % 4 === 0) {
                array.push([]);
            }
            array[array.length-1].push(current);
            return array;
        }, []);
        return result;
    },
    getMovieInfo(id, movies) {
        if(id && movies) {
            const movie = movies.find(item => item.id === +id);
            return movie;
        }
    }
}

export default movieSvc;