const loadVideo = async (iframe) => {
    const cid = "UCVtCLmxm96m3tgEEQOG1raQ"; 
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
    const proxyURL = `https://api.allorigins.win/get?url=${channelURL}`;

    try {
        const response = await fetch(proxyURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const xmlText = data.contents;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        
        const entries = xmlDoc.getElementsByTagName('entry');
        const videoNumber = parseInt(iframe.getAttribute('vnum')); 
        if (videoNumber >= entries.length) {
            throw new Error('Invalid video number');
        }

        const videoId = entries[videoNumber].getElementsByTagName('yt:videoId')[0].textContent;
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
};

const iframes = document.getElementsByClassName('latestVideoEmbed');
for (let i = 0; i < iframes.length; i++) {
    loadVideo(iframes[i]);
}
