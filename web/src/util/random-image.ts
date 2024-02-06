const illustrations_urls = [
    'https://cdna.artstation.com/p/assets/images/images/072/337/688/large/envar-studio-flu2frdakamwtra.jpg?1707150590',
    'https://cdnb.artstation.com/p/assets/images/images/072/337/743/large/envar-studio-fl2oludauaaoltr.jpg?1707150648',
    'https://cdnb.artstation.com/p/assets/images/images/072/288/325/large/aix-0204.jpg?1707043130',
    'https://cdnb.artstation.com/p/assets/images/images/072/258/573/large/p-amp-d-studio-.jpg?1706958069',
    'https://cdnb.artstation.com/p/assets/images/images/072/315/085/large/sheng-soup-kke.jpg?1707104135',
]

export function randomImage() {
    return illustrations_urls[Math.floor(Math.random() * illustrations_urls.length)]
}