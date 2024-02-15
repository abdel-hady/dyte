import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMeetingSetup } from "./useToken";
export default function MeetingButton() {
	const { dyteMeeting } = useMeetingSetup();
	const navigate = useNavigate();

	const startMeeting = () => {
		if (dyteMeeting) {
			dyteMeeting.join();
			// navigate("/meeting-room"); // Replace with your desired route for the meeting room
		}
	};

	return (
		<button type="button" onClick={startMeeting}>
			Start Meeting
		</button>
	);
}
