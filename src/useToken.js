import { useEffect } from "react";
import { useDyteClient } from "@dytesdk/react-web-core";

export function useMeetingSetup() {
	const [dyteMeeting, initMeeting] = useDyteClient();

	useEffect(() => {
		initMeeting({
			// roomName: "kwkfnq-fpnooj",
			authToken:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImQxMGFhYmJiLTJmNmMtNGY1Ny05NjUxLWRlNTA1NmI1MTU2MiIsIm1lZXRpbmdJZCI6ImJiYjZlMGQ4LThlZmUtNDVhYi1iZmIxLTgwNDliNDczNzZkZCIsInBhcnRpY2lwYW50SWQiOiJhYWEzZDU3Yi0wYTU0LTRlOGItYTdkMi1hODRmMGVmNjQ2YzciLCJwcmVzZXRJZCI6ImYyN2I3YWQ1LTBhNjgtNDQ4OS1iMDNmLTZkYmE2MDgxN2NlNyIsImlhdCI6MTcwNzk3MjI2MSwiZXhwIjoxNzE2NjEyMjYxfQ.OBya1xo0LIUCLh0hQ78vAxKgmIyuf_CG5ByjN6R7ldxRS8SLioDOHg27hNm49GxejdSa_LHGf09jfLS1Hl9SxtEpngvoKZwkC_z8QamFJviEMcs_XxGrKaykoJ0dtWjRoX2-_ObVYPf3xMOunNBQBxc3zf5EPuXa35iJhrCDfS3uG8mZpG9ui4aXicahVghK1-SsJswT8Y9i04QwmYgoQuOG7fOOoazWM0czk6_D4byczWhBMcC7_ItmQ3LzUqcartxFYC6srODkI6YjnpbIebPD-TMJkbyC0v2X8o2XLh7bD-8cG4k5k0oVy15RGL7wMzR7nX5_rwM8bA4Bg5EWQA",
			defaults: {
				audio: false,
				video: false,
			},
		});
	}, []);

	return dyteMeeting;
}
