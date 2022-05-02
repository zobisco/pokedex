import React from "react";

export default function Button({ content, handlingFunction }) {
	return <button onClick={handlingFunction}>{content}</button>;
}
