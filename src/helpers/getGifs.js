export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MkLxQ89NzwmDe6Xq8mnMeIFjsTLsttKm&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })

    console.log(gifs);
    return gifs;
}