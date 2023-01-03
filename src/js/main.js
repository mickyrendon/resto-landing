const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvbTYgbzLcCginSC03fhmwg&part=snippet%2Cid&order=date&maxResults=8'

const content = null || document.querySelector('.content')

const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '033b71011fmsh5ce65abdee75b5fp1f81b8jsn0acd0cce5c06',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

// function anonima que se ejecuta sola
(async () => {
    try {
        const videos = await fetchData(API)
        console.log(`logging ${videos}`);
        let view = `
        ${videos.items.map(video => 
        `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `
        content.innerHTML = view

    } catch (error) {
        console.Error(error)
    }
    // WATCH OUT! con los ultimos parentesis, porque no funciona sin eso.
})()

