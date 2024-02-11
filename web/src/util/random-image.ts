interface RandomImageProps {
    url: string,
    alt?: string
}

const illustrations_urls: RandomImageProps[] = [
    {url:"https://cdnb.artstation.com/p/assets/images/images/072/219/887/large/gerard-martinez-sanchez-villan-and-axe-8.jpg?1706870236", alt:"Excited to show you our latest project: 'Bjorn, the King of the North!'" },
    {url:"https://cdnb.artstation.com/p/assets/images/images/040/939/997/large/justin-holt-br17-badboys-breaker.jpg?1630327682", alt:'"We ride together, we die together. Bad boys for life.I am am obsessed with the Bay Boys franchise.'},
    {url:"https://cdnb.artstation.com/p/assets/images/images/033/172/467/large/mickael-lelievre-ronina-02.jpg?1609363909", alt:"Nodashee is a samurai girl who fights to defend her ancient village after a first attack which made a lot of victims. She never stops learning"},
    {url:"https://cdnb.artstation.com/p/assets/images/images/058/741/193/large/pedro-h-cardoso-johnsnowvshalfhand-1.jpg?1674851158", alt:"Fan Art Illustrations for Jon Snow's moments over the wall. The mini adventure he goes with Qhorin Half Hand is really a defining moment in his journey, and I wonder how much of all of it was Qhorin's plan and doing..."}
]

export function randomImage() {
    return illustrations_urls[Math.floor(Math.random() * illustrations_urls.length)]
}