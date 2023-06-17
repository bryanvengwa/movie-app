import React from 'react';

import { MdSentimentDissatisfied } from "react-icons/md";

export default function MovieNotFound() {
  return (
		<>
			<div className="no-movie">
				<MdSentimentDissatisfied size={64} />
				<p>No Results Found</p>
			</div>
		</>
  );
}
