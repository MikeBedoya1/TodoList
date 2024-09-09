import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [exercises, setExercises] = useState ([])
	return (
		<div className="container">
			
			<h1 color="green">GORILLA RAW EXERCISES</h1>
			<ul d-flex justify-content-end>
				<li><input type="text"
					onChange={(event) => setInputValue(event.target.value)}
					value={inputValue}
					onKeyUp={(event) => {
						if (event.key === "Enter") {
							console.log(inputValue);
							
							setExercises([... exercises, inputValue]);
							setInputValue("")
						}
					}
					}
					placeholder="what exercises do you gonna do?" />

				</li>

				{exercises.map((item, index) => (
					<li>
						{item} {""} <i class="fas fa-trash" onClick={() => setExercises(exercises.filter((t, currentIndex) => index != currentIndex

						))}
						></i>
					</li>

				))}
			</ul>
			<div>{exercises.length} tasks</div>
			<div>

			<img src="https://as2.ftcdn.net/v2/jpg/05/58/97/37/1000_F_558973789_iGbbV5rUJDObkkqHVyFnypNDkYrUjanD.jpg" alt="" />
			</div>

		</div >
	);
};

export default Home;
