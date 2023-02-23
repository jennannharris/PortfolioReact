import data from "./Data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Project = () => {
	const [projectData, setProjectData] = useState();
	const params = useParams();

	useEffect(() => {
		setProjectData(data[params.projectNum]);
	}, []);

	if (!projectData) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Project</h1>
			{projectData.title}
		</div>
	);
};

export default Project;
