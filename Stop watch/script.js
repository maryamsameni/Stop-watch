let _hours = document.getElementsByClassName('hour')[0]
let _min = document.getElementsByClassName('min')[0]
let _seconds = document.getElementsByClassName('sec')[0]
let _mili = document.getElementsByClassName('miliSecond')[0]

let _setInterval;
let _ms = 0
let _s = 0
let _m = 0
let _h = 0

function _time() {
    _ms++
    if (_ms <= 100) {
        if (_ms <= 9) {
            _mili.innerHTML = "0" + _ms
        } else {
            _mili.innerHTML = _ms
        }
    } else {
        _ms = 0
        _s++
    } if (_s <= 60) {
        if (_s <= 9) {
            _seconds.innerHTML = "0" + _s
        } else {
            _seconds.innerHTML = _s
        }
    } else {
        _s = 0
        _m++
    } if (_m <= 60) {
        if (_m <= 9) {
            _min.innerHTML = "0" + _m
        } else {
            _min.innerHTML = _m
        }
    } else {
        _m = 0
        _h++
    }
}

document.getElementsByClassName('start')[0].addEventListener('click', function () {
    if (this.getAttribute("data-status") == "off") {
        _setInterval = setInterval(_time, 10)
    } else {
        document.getElementsByClassName('start')[0].setAttribute("data-status", "on")
    }
})

document.getElementsByClassName('stop')[0].addEventListener('click', function () {
    clearInterval(_setInterval)
    document.getElementsByClassName('stop')[0].setAttribute('data-status', 'off')
})

document.getElementsByClassName('reset')[0].addEventListener('click', function () {
    _ms = 0
    _s = 0
    _m = 0
    _h = 0
    clearInterval(_setInterval)
    _hours.innerHTML = ' 00'
    _min.innerHTML = '00'
    _seconds.innerHTML = '00'
    _mili.innerHTML = '00'
    document.getElementsByClassName('reset')[0].setAttribute('data-status', 'off')
})

document.getElementsByClassName('lap')[0].addEventListener('click', function () {
    let z = document.getElementsByClassName('clear')[0]
    z.innerHTML = 'clear all'
    z.classList.add('block')
    console.log(z)
    let p = document.createElement('p')
    document.getElementsByTagName('ul')[0].appendChild(p)
    let x = document.createElement('li')
    document.getElementsByTagName('p')[0].appendChild(x)
    x.innerHTML = _h + '  :  ' + _m + '  :  ' + _s + '  :  ' + _ms
})

document.getElementsByClassName('clear')[0].addEventListener('click', function () {
    document.getElementsByTagName('p')[0].remove()
})