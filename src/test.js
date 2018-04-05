var getRandom = function (minimum, maximum) {
    var num
    var maxEx = maximum + 2
    do {
        num = Math.random() * (maxEx - minimum) + minimum
        num -= 1
    } while (num < minimum || num > maximum)

    return num
}

getRandom(-1, 1)