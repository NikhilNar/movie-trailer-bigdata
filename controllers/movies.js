import {
    MoviesModel,
    TrendingMoviesModel,
    TopRatedMoviesModel
}
    from '../models'

const movieList = (params) => {
    return new Promise((resolve, reject) => {
        let filter = params.filter,
            genre = params.genre,
            promise;

        switch (filter) {
            case "ratings": promise = TopRatedMoviesModel.find({})
                .select('movie_id')
                .populate({
                    path: 'movie_collection',
                    select: 'title youtube_id posters genres',
                    match: {
                        genres: {
                            $regex: genre,
                            $options: 'i'
                        }
                    }
                })
                break;
            case "trending": promise = TrendingMoviesModel.find({})
                .select('movie_id')
                .populate({
                    path: 'movie_collection',
                    select: 'title youtube_id posters genres',
                    match: {
                        genres: {
                            $regex: genre,
                            $options: 'i'
                        }
                    }
                })
                break;
            default: promise = MoviesModel.find({})
                .select('movie_id title youtube_id posters genres').limit(10)
        }


        promise
            .then(data => {
                if (filter != "all") {
                    data = data.filter(doc => {
                        return doc.movie_collection != null
                    }).map(doc => {
                        return doc.movie_collection
                    })
                }
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })

    })
}

let movies = {
    movieList
}

export {
    movies
}