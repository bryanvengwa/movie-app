import React from 'react'

export default function Result(props) {
  return (
		<>
			{props.id && (
				<div className="result">
					<div className="img-container">
						<img
							src="imgs/movie.jpeg"
							className="img-fluid"
							alt=""
						/>
					</div>
					<div className="body">
						<h2>MOVIE NAME: dummy name</h2>
					</div>
				</div>
			)}
			{props.id || (
				<div className="result">
					<div className="img-container">
						{props.img && (
							<img
								src={`https://image.tmdb.org/t/p/w500${props.img}`}
								className="img-fluid"
								alt=""
							/>
						)}
						{props.img || (
							<img
								src={'imgs/movie.jpeg'}
								className="img-fluid"
								alt=""
							/>
						)}
					</div>
					<div className="body">
						<h2>
							 <span>{props.name}</span>
						</h2>
					</div>
				</div>
			)}
		</>
  );
}
