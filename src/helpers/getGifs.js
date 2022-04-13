export const getGift =  async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=flWSl0ApbQFhSrNJWQ1DXZWu9ajMkzhQ`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( data =>
    {
        return{
            id: data.id,
            url: data.images?.downsized_medium.url,
            title: data.title
        }
    });
    return gifs;    
}