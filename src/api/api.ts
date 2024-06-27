const PostShortenUrl = async (url: string) => {
    const formData = new FormData()
    formData.append("url", url)
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        body: formData,
    })
    // return await response.json()
    // const response = await fetch(`https://ulvis.net/API/write/get?url=${url}`)
    return await response.json()
}


export { PostShortenUrl }
