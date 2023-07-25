function setLocation() {
    function check(str) {
        if (str != '') {
            for (let i = 0; i < str.length; i++) {
                if (str[i] !== ' ') {
                    return true
                }
            }
        }
        return false
    }
    let val = ''
    val += document.getElementById("inputs").value
    if (check(val)) {
        window.location.href = 'https://www.google.com/search?q=' + val
    }
}

function favOpen(id) {
    let a = [
        'https://osu.ppy.sh',
        'https://mail.google.com/mail/u/0/#inbox',
        'https://www.youtube.com/'
    ]
    window.location.href = a[id]
}

function reimage() {
    let arr = ['images/kitkat.png', 'images/osu.png', 'images/roflik.png']
    let now = Math.floor(Math.random() * arr.length)
    document.getElementById("myimg").src = arr[now]
}
