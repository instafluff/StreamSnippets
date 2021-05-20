
let showCount = 5;
let topClips = [];

async function TopTeamClips( team, count = 5 ) {
	// TODO: Pick a random member from the team and show clips

}

async function TopClips( channel, count = 5 ) {
	const data = await fetch( `https://api.twitch.tv/kraken/clips/top?channel=${channel}&period=all&limit=100`, {
		headers: {
			"Accept": "application/vnd.twitchtv.v5+json",
			"Client-ID": "2odsv8xermvalbub7wipebrphqlpqv"
		}
	} ).then( r => r.json() );
	topClips = data.clips;
	// console.log( topClips );

	// Pick Random and SetClip
	showCount = count;
	SetRandomTopClip();
}

function SetRandomTopClip() {
	if( topClips.length > 0 ) {
		// Pick a weighted-random one
		let sum = 0;
		let thresholds = [ 0 ];
		for( let i = 0; i < topClips.length; i++ ) {
			sum += Math.pow( 1.05, i );
			thresholds.push( sum );
		}
		let num = sum * Math.random();
		let index = 0;
		for( let i = 0; i < topClips.length; i++ ) {
			if( thresholds[ i ] <= num && num <= thresholds[ i + 1 ] ) {
				index = topClips.length - i - 1;
				break;
			}
		}
		// console.log( index, num, sum, topClips.length )
		// // Pick a random one
		// let index = Math.floor( topClips.length * Math.random() );
		let clip = topClips[ index ];
		// console.log( "picked", index );
		topClips.splice( index, 1 );
		// console.log( clip );
		SetClip( true, clip.slug );
	}
}

async function SetClip( visible, id = "" ) {
	if( visible ) {
		let clipInfo = await fetch( `https://api.twitch.tv/kraken/clips/${id}`, {
			headers: {
				"Accept": "application/vnd.twitchtv.v5+json",
				"Client-ID": "2odsv8xermvalbub7wipebrphqlpqv"
			}
		} ).then( r => r.json() );
		// console.log( clipInfo );
		let title = clipInfo.title;
		let credit = clipInfo.curator.display_name;
		let creditPhoto = clipInfo.curator.logo;
		// document.getElementById( "div-credit" ).style.display = "block";
		// document.getElementById( "clip-title" ).innerText = `"${title}"`;
		// if( credit !== "Instafluff" ) {
		//     document.getElementById( "clip-author" ).innerText = `by ${credit}`;
		// }
		if( clipInfo && clipInfo.slug ) {
			setTimeout( () => {
				if( showCount > 0 ) {
					SetRandomTopClip();
				}
				else {
					// Auto-Hide
					SetClip( false, "" );
				}
			}, clipInfo.duration * 1000 );
		}
		var clip = document.querySelector( "#fluffy-clip" );
		clip.setAttribute( "src", "https://clips.twitch.tv/embed?parent=instafluff.tv&tt_medium=clips_api&tt_content=embed&autoplay=true&clip=" + id );
		clip.style.display = "block";
		showCount--;
	}
	else {
		var clip = document.querySelector( "#fluffy-clip" );
		clip.setAttribute( "src", "" );
		clip.style.display = "none";
		// document.getElementById( "div-credit" ).style.display = "none";
	}
}
