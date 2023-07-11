import React from 'react'
import { FaSearch } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import NoInternet from './NoInternet';
import Loader from './Loader';
import MovieNotFound from './MovieNotFound';

export default function SearchCanvas(props) {
  return (
		<>
			<div
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasWithBackdrop"
				aria-controls="offcanvasWithBackdrop"
				className="search-btn "
			>
				<FaSearch
					color="black"
					size={30}
					className="search-button"
					type="button"
				/>
			</div>

			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="offcanvasWithBackdrop"
				aria-labelledby="offcanvasWithBackdropLabel"
			>
				<div className="offcanvas-header">
					<div> </div>
					<AiOutlineCloseCircle
						style={{ color: "white" }}
						color={"white"}
						size={60}
						type="button"
						
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					/>
					{/* <button>cl</button> */}
				</div>
				<div className="offcanvas-body">
					<div
						style={props.styles}
						id="search-canvas"
						className="left-side side search-canvas"
					>
						<div className="search-container">
							<input
								className="search-input"
								value={props.value}
								onKeyDown={(event) => {
									props.handleEnterPress(event);
								}}
								onChange={props.handleValueChange}
								type="search"
								placeholder="Search......"
							/>
							<FaSearch
								onClick={props.searcher}
								className="search"
							/>
						</div>
						{props.isLoading && <Loader />}
						<div className="results-container">
							{props.isLoading || <>{props.resultsElements}</>}

							{props.error === "Failed to fetch" && (
								<NoInternet />
							)}
							{props.error === "no results" && <MovieNotFound />}
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
