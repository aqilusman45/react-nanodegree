import React, {Component} from 'react';

class UserFavourites extends Component{
	render(){
      const  { users , profiles, movies } = this.props
    	return (
        <ul>
          {
            profiles.map(profile => <li key={profile.id}>{`${users[profile.userID].name} fravourite movie is
  
  ${movies[profile.favoriteMovieID].name}`}</li> )
           }
          </ul>
        )
    }
}

export default UserFavourites;