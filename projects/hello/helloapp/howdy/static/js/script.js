$pink: #4ca2cd;
$coral: #00f260;
$blue-gray: #374e71;

* {
	box-sizing: border-box;
}

body {
	background: #f6f6f6;
	font-family: "Prompt", sans-serif;
	overflow-x: hidden;
}

aside.context {
	text-align: center;
	color: #333;
	line-height: 1.7;
	a {
		text-decoration: none;
		color: #333;
		padding: 3px 0;
		border-bottom: 1px dashed;
		&:hover {
			border-bottom: 1px solid;
		}
	}
	.explanation {
		max-width: 700px;
		margin: 2em auto 0;
	}
}

footer {
	text-align: center;
	margin: 4em auto;
	width: 100%;
	a {
		text-decoration: none;
		display: inline-block;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: transparent;
		border: 1px dashed #333;
		color: #333;
		margin: 5px;
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
		.icons {
			margin-top: 12px;
			display: inline-block;
			font-size: 20px;
		}
	}
}

.main-content {
	margin: 4em auto;
	max-width: 900px;
	background: #fff;
	padding: 15px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
	text-transform: uppercase;
	transition: all 0.1s ease-in-out;
}

.id__wrapper {
	display: grid;
	width: 100%;
	transition: width 0.2s ease-in-out;
	margin: auto;
	grid-gap: 15px;
	padding: 15px;
	background: rgba($pink, 0.2);
	border: 2px solid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, auto);
	grid-template-areas:
		"your-face name name"
		"your-face job country"
		"your-face twitter codepen"
		"your-face blood blood";
	> div {
		transition: all 0.1s ease;
	}
}

.header {
	grid-area: header;
	text-align: center;
	text-transform: uppercase;
	padding: 10px 0;
	font: 600 28px "Prompt";
	span:nth-child(2) {
		display: none;
	}
}

.your-face {
	grid-area: your-face;
	background: #fff;
	border: 2px solid;
	cursor: pointer;
	position: relative;
	max-height: 300px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 10;
		position: relative;
		visibility: hidden;
	}
	.image-persuader {
		position: absolute;
		top: 40%;
		text-align: center;
		width: 70%;
		left: 15%;
	}
	input {
		display: none;
	}
}

label {
	font: 600 16px "Prompt";
	margin-bottom: 2px;
	display: block;
	flex: 0 0 auto;
}

input.full {
	font: 400 20px "Prompt";
	border: none;
	padding: 10px;
	height: 40px;
	width: 100%;
	border-bottom: 2px solid;
	&:focus {
		outline: none;
	}
}

.name {
	grid-area: name;
}

.job {
	grid-area: job;
}

.country {
	grid-area: country;
}

.twitter {
	grid-area: twitter;
}

.codepen {
	grid-area: codepen;
}

.blood {
	grid-area: blood;
}

.checkbox__wrapper {
	display: flex;
	flex-wrap: wrap;
	.checkbox {
		flex: 0 0 auto;
		padding-right: 30px;
		display: flex;
		align-items: center;
		margin: 2px 0;
	}
	input {
		visibility: hidden;
	}
	label {
		position: relative;
		padding-left: 5px;
		cursor: pointer;
		&:before {
			content: "";
			width: 16px;
			height: 16px;
			position: absolute;
			border: 2px solid;
			left: -20px;
			top: 2px;
		}
	}
	input:checked + label:after {
		content: "";
		width: 12px;
		height: 12px;
		position: absolute;
		background: #000;
		left: -16px;
		top: 6px;
	}
}

.deco {
	position: absolute;
	background: linear-gradient(to top left, rgba($coral, 0.8), rgba($pink, 0.8));
	width: 1%;
	height: 170px;
	top: 20px;
	right: -165px;
	transform: rotate(55deg);
	opacity: 0;
	&:before {
		content: "";
		background: linear-gradient(
			to top right,
			rgba($coral, 0.6),
			rgba($pink, 0.9)
		);
		width: 1%;
		height: 120px;
		position: absolute;
		transform: rotate(140deg);
		bottom: 0px;
		margin-left: -140px;
	}
}

.as-card {
	box-shadow: none;
	background: none;
	pointer-events: none;
	.header span:nth-child(1) {
		display: none;
	}
	.header span:nth-child(2) {
		display: block;
	}
	.deco,
	.deco:before {
		opacity: 1;
		width: 120%;
		animation: .8s deco-piece forwards;
	}
	.id__wrapper {
		width: 325px;
		overflow: hidden;
		margin: 2em auto 0;
		border-radius: 10px;
		border: none;
		background: #fff;
		position: relative;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
		padding: 85px 25px 65px;
		grid-gap: 5px;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
			"your-face your-face"
			"name name"
			"job job"
			"country country"
			"blood blood"
			"twitter codepen";
		&:before {
			content: "Attendee";
			background: linear-gradient(to top right, $pink, $coral);
			position: absolute;
			bottom: -0.5px;
			left: 0;
			width: 100%;
			padding: 10px 0;
			letter-spacing: 2px;
			font: 600 20px "Prompt";
			text-align: center;
			color: #fff;
		}
		&:after {
			content: "";
			position: absolute;
			top: 15px;
			left: 50%;
			width: 80px;
			height: 12px;
			margin-left: -40px;
			background: #f8f8f8;
			border-radius: 20px;
			box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
		}
		input.full {
			background: transparent;
			border: none;
			height: auto;
			padding: 0;
		}
		.checkbox__wrapper {
			margin: 5px;
			label {
				padding: 0;
				font-size: 14px;
				color: $pink;
				margin: 0;
				padding-right: 10px;
				&:before,
				&:after {
					content: none;
				}
			}
			input {
				display: none;
			}
		}
		.checkbox {
			padding-right: 0;
		}
		.checkbox input:not(:checked),
		.checkbox input:not(:checked) + label {
			display: none;
			padding: 0;
		}
	}
	.your-face {
		border-radius: 50%;
		width: 100px;
		height: 100px;
		padding: 2px;
		border: 4px solid $pink;
		img {
			border-radius: 50%;
		}
		.image-persuader {
			display: none;
		}
	}
	.name,
	.job,
	.country,
	.blood {
		label:not(.label-check) {
			display: none;
		}
	}
	.name input {
		font: 600 32px "Prompt";
		margin: 0px 5px;
		color: $blue-gray;
		position: relative;
	}
	.job input {
		color: $pink;
		font: 600 20px "Prompt";
		margin: 0 5px;
	}
	.country input {
		color: $pink;
		font: 400 18px "Prompt";
		margin: -15px 5px 10px;
	}
	.twitter,
	.codepen {
		text-align: center;
		margin: 10px 0;
		label {
			font: 600 12px "Prompt";
			color: #999;
			margin: 0 0 -2px;
		}
		input {
			font: 400 16px "Prompt";
			color: $blue-gray;
			text-align: center;
		}
	}
}

.js-switch {
	cursor: pointer;
	margin: 0 0 3em;
	display: inline-block;
	padding: 0.6em 1.5em;
	color: $blue-gray;
	border: 2px solid;
	font: 20px "Prompt";
	position: relative;
	top: 0;
	transition: 0.1s ease;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	&:hover {
		top: -3px;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
	}
}


@keyframes deco-piece {
	0% { opacity: 0; width: 0%;	}
	100% { opacity: 1; width: 120%;}
}
