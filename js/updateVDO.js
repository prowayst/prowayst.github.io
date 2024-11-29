// Function to load the latest YouTube video into an iframe
const loadVideo = async (iframe) => {
    const cid = "UCVtCLmxm96m3tgEEQOG1raQ"; // YouTube channel ID
    const channelURL = `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`;

    // Using another CORS proxy if allorigins fails
    const proxyURL = `https://cors-anywhere.herokuapp.com/${channelURL}`; // Alternate proxy

    try {
        // Fetch the YouTube RSS feed through the CORS proxy
        const response = await fetch(proxyURL);

        // Check if the network request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        // Parse the raw XML response from the proxy
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        // Extract entries from the RSS feed
        const entries = xmlDoc.getElementsByTagName('entry');

        // Get the video number from the iframe attribute (vnum)
        const videoNumber = parseInt(iframe.getAttribute('vnum'));

        // Check if the video number is valid
        if (videoNumber >= entries.length || videoNumber < 0) {
            throw new Error('Invalid video number');
        }

        // Extract the video ID from the XML data
        const videoId = entries[videoNumber].getElementsByTagName('yt:videoId')[0].textContent;

        // Set the iframe's src attribute to the YouTube embed URL with autoplay and no controls
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
};

// Initialize the video loading for all iframes with class 'latestVideoEmbed'
const iframes = document.getElementsByClassName('latestVideoEmbed');
for (let i = 0; i < iframes.length; i++) {
    loadVideo(iframes[i]);
}