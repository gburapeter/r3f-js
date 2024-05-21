import "./App.css";

function App() {
	return (
		<>
			<model-viewer
				src="./paneel.glb"
				ar
				ar-scale="fixed"
				camera-controls
				touch-action="pan-y"
				alt="A 3D model of an astronaut"
				shadow-intensity="2"
				skybox-height="2m"
				max-camera-orbit="auto 90deg auto"
				xr-environment
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
