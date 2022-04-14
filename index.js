const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]

function ranGreadient() {
    function RandomColor() {
        let color = '#'
        for (let i = 0; i < 6; i++) {
            const randomcolor = Math.floor(Math.random() * values.length);
            color += values[randomcolor]
        }
        return color
    }
  
    const color1 = RandomColor()
    const color2 = RandomColor()
    
    const degree = Math.floor(Math.random() * 360)
    const bgcolor= `linear-gradient(${degree}deg ,${color1} ,${color2})`
    document.querySelector('body').style.background = bgcolor
    document.querySelector('.color-text').textContent = bgcolor
    let musicmp3 = document.querySelector('audio');
    musicmp3.play()
}

ranGreadient()

const randomColorBtn = document.querySelector('.random-color')
randomColorBtn.addEventListener('click',ranGreadient)

  