export const downloadQR=(url) =>{
    console.log(url)
    fetch(url,{
        method:"GET",
        headers:{}
    })
    .then(res=>{
        res.arrayBuffer().then(buffer=>{
            const url = window.URL.createObjectURL(new Blob([buffer]))
            console.log(url)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'qrcode.png')
            link.click()
            URL.revokeObjectURL(url)
        })
    })
} 
