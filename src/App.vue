<template>
	<a class="headerlogo" :href="'https://portfolio3-blue.vercel.app/'" :class="{active: page3}">포트폴리오 주소가 변경되었습니다. 이곳을 클릭하세요</a>
	<router-view />
</template>

<script>
import { mapState } from 'vuex';

export default{
	computed:{
		...mapState(["page3"])
	}
}
</script>

<style lang="scss">
@charset "utf-8";
// 구글, 폰트어섬 아이콘용
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
// 들어간 폰트,
// font-family: 'Montserrat', sans-serif;
// font-family: 'Noto Sans KR', sans-serif;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

html {
	font-size: 16px;
	// font-family: 'Noto Sans KR', sans-serif;
	font-family: "GmarketSansMedium";
	button{font-family: "GmarketSansMedium";}
	input{font-family: "GmarketSansMedium";}
	textarea{font-family: "GmarketSansMedium";}

	.headerlogo {
		position: fixed;
		left: 5%;
		top: 5%;
		color: #0433bf;
		font-size: 2rem;
		z-index: 100;
		transition: 0.8s;
		&.active{
			color: white;
		}
	}

	>body {
		>#app {
			>main {
				>.fullpage-wrapper {
					>section {
						// max-width: 800px;
						min-width: 380px;
						margin: 0 auto;

						>.fp-overflow {
							height: 100vh;
							width: 100vw;
						}

						.fp-watermark {
							display: none;
						}
					}
				}
			}
		}
	}
}

* {
	box-sizing: border-box;
}

:root {
	.mainContents {
		margin: 0 auto;
	}

	width: 100%;

	.appPage {
		max-width: 800px;
	}
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

body {
	line-height: 1;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 0;
		background-color: #fff;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 15px;
		background-color: #ddd;

		&:hover {
			background-color: #e72223;
		}
	}
}

ol,
ul,
li,
a {
	list-style: none;
	text-decoration: none;
	color: black;
}

blockquote,
q {
	quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	font-size: 100%;
}

input,
textarea,
button {
	border: 0;
	padding: 0;
	margin: 0;
}

input:focus,
textarea:focus {
	outline: none;
}</style>
