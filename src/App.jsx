import { useEffect } from "react";
import "./App.css";

function App() {
	useEffect(() => {
		const modelViewerColor = document.querySelector(
			"model-viewer#pickMaterial"
		);
		console.log(modelViewerColor);
	}, []);
	return (
		<>
			<model-viewer
				src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
				ar
				// scale="100 100 100"
				ar-scale="fixed"
				camera-controls
				loading="eager"
				auto-rotate
				poster="./gers.png"
				touch-action="pan-y"
				alt="A 3D model of an astronaut"
				shadow-intensity="2"
				skybox-height="2m"
				tone-mapping="neutral"
				skybox-image="./studio_country_hall_1k.jpg"
				// environment-image="./studio_country_hall_1k.jpg"
				max-camera-orbit="auto 90deg auto"
				xr-environment
				id="pickMaterial"
			>
				<button
					slot="ar-button"
					style={{
						backgroundColor: "red",
						borderRadius: "4px",
						border: "black",
						position: "absolute",
						top: "16px",
						right: "16px",
					}}
				>
					👋 Activate AR
				</button>
			</model-viewer>
		</>
	);
}

export default App;
