export const getGifs = async(category) =>{

    const url= `https://api.giphy.com/v1/gifs/search?api_key=p1mA9s6MvOJSj2OqXr0Jde6t4toL3D4r&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    // console.log(gifs);
    return gifs;
}