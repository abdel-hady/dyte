// import { useEffect } from "react";
// import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
// import { DyteMeeting } from "@dytesdk/react-ui-kit";
// import MeetingButton from "./meetingSetup";
// import { useMeetingSetup } from "./useToken";

// export default function App() {
// 	// const dyteMeeting = useMeetingSetup();
// 	const [dyteMeeting, initMeeting] = useDyteClient();

// 	useEffect(() => {
// 		initMeeting({
// 			// roomName: "kwkfnq-fpnooj",
// 			authToken:
// 				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImQxMGFhYmJiLTJmNmMtNGY1Ny05NjUxLWRlNTA1NmI1MTU2MiIsIm1lZXRpbmdJZCI6ImJiYjZlMGQ4LThlZmUtNDVhYi1iZmIxLTgwNDliNDczNzZkZCIsInBhcnRpY2lwYW50SWQiOiJhYWEzZDU3Yi0wYTU0LTRlOGItYTdkMi1hODRmMGVmNjQ2YzciLCJwcmVzZXRJZCI6ImYyN2I3YWQ1LTBhNjgtNDQ4OS1iMDNmLTZkYmE2MDgxN2NlNyIsImlhdCI6MTcwNzk3MjI2MSwiZXhwIjoxNzE2NjEyMjYxfQ.OBya1xo0LIUCLh0hQ78vAxKgmIyuf_CG5ByjN6R7ldxRS8SLioDOHg27hNm49GxejdSa_LHGf09jfLS1Hl9SxtEpngvoKZwkC_z8QamFJviEMcs_XxGrKaykoJ0dtWjRoX2-_ObVYPf3xMOunNBQBxc3zf5EPuXa35iJhrCDfS3uG8mZpG9ui4aXicahVghK1-SsJswT8Y9i04QwmYgoQuOG7fOOoazWM0czk6_D4byczWhBMcC7_ItmQ3LzUqcartxFYC6srODkI6YjnpbIebPD-TMJkbyC0v2X8o2XLh7bD-8cG4k5k0oVy15RGL7wMzR7nX5_rwM8bA4Bg5EWQA",
// 			defaults: {
// 				audio: false,
// 				video: false,
// 			},
// 		});
// 	}, []);

// 	return (
// 		<DyteProvider value={dyteMeeting}>
// 			<div style={{ height: "40vh", width: "100vw" }}>
// 				<DyteMeeting meeting={dyteMeeting} mode="fill" />
// 			</div>
// 			{/* <MeetingButton /> */}
// 		</DyteProvider>
// 	);
// }

// import React, { useEffect, useState } from "react";
// import AddParticipant from "./add-particepant";

// export default function App() {
// 	const [meetingId, setMeetingId] = useState(null);
// 	const [dyteMeeting, initMeeting] = useDyteClient();
// 	const authToken =
// 		"ZDEwYWFiYmItMmY2Yy00ZjU3LTk2NTEtZGU1MDU2YjUxNTYyOjNiMjQ4NmJjMjJjYWM2MTVmYTFl";
// 	useEffect(() => {
// 		const createMeeting = async () => {
// 			try {
// 				const response = await fetch(
// 					"https://api.cluster.dyte.in/v2/meetings/",
// 					{
// 						method: "POST",
// 						headers: {
// 							"Content-Type": "application/json",
// 							Authorization: `Basic ${authToken}`,
// 						},
// 						body: JSON.stringify({
// 							title: "V2.0 Test Meeting : {{$randomCity}}",
// 							preferred_region: "ap-south-1",
// 							record_on_start: false,
// 							live_stream_on_start: false,
// 						}),
// 					}
// 				);

// 				if (!response.ok) {
// 					throw new Error(`Error creating meeting: ${response.statusText}`);
// 				}

// 				const data = await response.json();
// 				setMeetingId(data.data.id);
// 				console.log("Meeting created with ID: ", data);
// 			} catch (error) {
// 				console.log(error);
// 				console.error(error);
// 			}
// 		};

// 		createMeeting();
// 		// useEffect(() => {
// 		initMeeting({
// 			// roomName: "kwkfnq-fpnooj",
// 			authToken,
// 			defaults: {
// 				audio: false,
// 				video: false,
// 			},
// 		});
// 		// }, []);
// 	}, [authToken]);

// 	return (
// 		<div>
// 			<DyteProvider value={dyteMeeting}>
// 				<div style={{ height: "100vh", width: "100vw" }}>
// 					<DyteMeeting meeting={dyteMeeting} mode="fill" />
// 				</div>
// 			</DyteProvider>
// 			{/* <AddParticipant /> */}
// 		</div>
// 	);
// }

// import { useEffect } from "react";
// import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
// import { DyteMeeting } from "@dytesdk/react-ui-kit";
// import Meeting from "./Meeting";

// function Meeting() {
// 	const [dyteMeeting, initMeeting] = useDyteClient();

// 	useEffect(() => {
// 		initMeeting({
// 			authToken:
// 				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImQxMGFhYmJiLTJmNmMtNGY1Ny05NjUxLWRlNTA1NmI1MTU2MiIsIm1lZXRpbmdJZCI6ImJiYjZlMGQ4LThlZmUtNDVhYi1iZmIxLTgwNDliNDczNzZkZCIsInBhcnRpY2lwYW50SWQiOiJhYWEzZDU3Yi0wYTU0LTRlOGItYTdkMi1hODRmMGVmNjQ2YzciLCJwcmVzZXRJZCI6ImYyN2I3YWQ1LTBhNjgtNDQ4OS1iMDNmLTZkYmE2MDgxN2NlNyIsImlhdCI6MTcwNzk3MjI2MSwiZXhwIjoxNzE2NjEyMjYxfQ.OBya1xo0LIUCLh0hQ78vAxKgmIyuf_CG5ByjN6R7ldxRS8SLioDOHg27hNm49GxejdSa_LHGf09jfLS1Hl9SxtEpngvoKZwkC_z8QamFJviEMcs_XxGrKaykoJ0dtWjRoX2-_ObVYPf3xMOunNBQBxc3zf5EPuXa35iJhrCDfS3uG8mZpG9ui4aXicahVghK1-SsJswT8Y9i04QwmYgoQuOG7fOOoazWM0czk6_D4byczWhBMcC7_ItmQ3LzUqcartxFYC6srODkI6YjnpbIebPD-TMJkbyC0v2X8o2XLh7bD-8cG4k5k0oVy15RGL7wMzR7nX5_rwM8bA4Bg5EWQA",
// 			defaults: {
// 				audio: false,
// 				video: false,
// 			},
// 		});
// 	}, []);

// 	return (
// 		<DyteProvider value={dyteMeeting}>
// 			<div style={{ height: "40vh", width: "100vw" }}>
// 				<DyteMeeting meeting={dyteMeeting} mode="fill" />
// 			</div>
// 		</DyteProvider>
// 	);
// }

// export default function App() {
// 	return (
// 		<div>
// 			<button onClick={() => console.log("Meeting started")}>
// 				Start Meeting
// 			</button>
// 			<Meeting />
// 		</div>
// 	);
// }

import { useEffect, useState } from "react";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";

export default function App() {
	const [dyteMeeting, initMeeting] = useDyteClient();
	const [showMeeting, setShowMeeting] = useState(false);

	const handleButtonClick = () => {
		setShowMeeting(true);
	};

	useEffect(() => {
		initMeeting({
			authToken:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImQxMGFhYmJiLTJmNmMtNGY1Ny05NjUxLWRlNTA1NmI1MTU2MiIsIm1lZXRpbmdJZCI6ImJiYjZlMGQ4LThlZmUtNDVhYi1iZmIxLTgwNDliNDczNzZkZCIsInBhcnRpY2lwYW50SWQiOiJhYWEzZDU3Yi0wYTU0LTRlOGItYTdkMi1hODRmMGVmNjQ2YzciLCJwcmVzZXRJZCI6ImYyN2I3YWQ1LTBhNjgtNDQ4OS1iMDNmLTZkYmE2MDgxN2NlNyIsImlhdCI6MTcwNzk3MjI2MSwiZXhwIjoxNzE2NjEyMjYxfQ.OBya1xo0LIUCLh0hQ78vAxKgmIyuf_CG5ByjN6R7ldxRS8SLioDOHg27hNm49GxejdSa_LHGf09jfLS1Hl9SxtEpngvoKZwkC_z8QamFJviEMcs_XxGrKaykoJ0dtWjRoX2-_ObVYPf3xMOunNBQBxc3zf5EPuXa35iJhrCDfS3uG8mZpG9ui4aXicahVghK1-SsJswT8Y9i04QwmYgoQuOG7fOOoazWM0czk6_D4byczWhBMcC7_ItmQ3LzUqcartxFYC6srODkI6YjnpbIebPD-TMJkbyC0v2X8o2XLh7bD-8cG4k5k0oVy15RGL7wMzR7nX5_rwM8bA4Bg5EWQA",
			defaults: {
				audio: false,
				video: false,
			},
		});
	}, []);

	return (
		<DyteProvider value={dyteMeeting}>
			<div>
				<button onClick={handleButtonClick}>Start Meeting</button>
				{showMeeting && (
					<div style={{ height: "40vh", width: "100vw" }}>
						<DyteMeeting meeting={dyteMeeting} mode="fill" />
					</div>
				)}
			</div>
		</DyteProvider>
	);
}
