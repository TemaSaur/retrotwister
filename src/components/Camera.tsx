// import React, { useState, useCallback, useMemo } from "react";
// import Image from "next/image";
// // import FormData from 'form-data'

// const ImageCapture = require("react-image-data-capture");

// const Camera = (props: any) => {
//   const [showImgCapture, setShowImgCapture] = useState(true);
//   const config = useMemo(() => ({ video: true }), []);

//   const [imgSrc, setImgSrc] = useState(null);
//   const [imgFile, setImgFile] = useState(null);

//   const onCapture = (imageData: any) => {
//     setImgSrc(imageData.webP);
//     setImgFile(imageData.file);
// 	props.setMyOwnImgFileHaha(imageData)
//     // Unmount component to stop the video track and release camera
//     setShowImgCapture(false);
//   };
//   const onError = useCallback((error: any) => {
//     console.log(error);
//   }, []);

//   // imgFile can be used as a file upload form submission
// //   const formData = new FormData();
// //   formData.append("file", imgFile!);

//   return <div>
//     	{showImgCapture ? 
// 			<ImageCapture
// 			onCapture={onCapture}
// 			onError={onError}
// 			width={300}
// 			userMediaConfig={config}
// 			/> : <></>}
//       	{imgSrc && (
// 			<div>
// 			<div>Captured Image:</div>
// 			<Image src={imgSrc} alt="captured-img" width={300} height={200} />
// 			</div>
// 		)}
//     </div>
// };

// export default Camera;
