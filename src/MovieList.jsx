import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = ({ movies }) => {  
  return (
    <div>
      <table className='table table-bordered' style={{width:'60%',marginLeft:'auto',marginRight:'auto',marginTop:'2%'}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.title}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
