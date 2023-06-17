import React, {useState} from 'react'

export default function Footer() {
          const date= new Date();
          const currentYear = date.getFullYear();
          const [year] =useState(currentYear)
  return (
		<>
			<footer>
				<div className="footer">
					<div className="left foot">
						<button className="looking-button">
							Looking For A Movie ?
						</button>
					</div>
					<div className="right foot">
						<p>
							Copyright © {year}. All rights reserved. App by{" "}
							<span>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/bryanvengwa"
								>
									Bryan Vengwa
								</a>
							</span>
						</p>
					</div>
				</div>
			</footer>
		</>
  );
}
