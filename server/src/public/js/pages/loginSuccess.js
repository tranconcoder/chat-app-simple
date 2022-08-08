const profile = JSON.parse(document.getElementById('profile').dataset.profile);

window.opener.postMessage(
	{
		profile,
		accessToken,
		refreshToken,
	},
	'http://localhost:4000'
);
