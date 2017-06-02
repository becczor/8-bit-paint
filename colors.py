def dec2Hex(n):
    if (n < 10):
        return str(n)
    elif n == 10:
        return "A"
    elif n == 11:
        return "B"
    elif n == 12:
        return "C"
    elif n == 13:
        return "D"
    elif n == 14:
        return "E"
    elif n == 15:
        return "F"
    else:
        x =(n%16)
        if (x < 10):
            return dec2Hex( n // 16 ) + str(x)
        if (x == 10):
            return dec2Hex( n // 16 ) + "A"
        if (x == 11):
            return dec2Hex( n // 16 ) + "B"
        if (x == 12):
            return dec2Hex( n // 16 ) + "C"
        if (x == 13):
            return dec2Hex( n // 16 ) + "D"
        if (x == 14):
            return dec2Hex( n // 16 ) + "E"
        if (x == 15):
            return dec2Hex( n // 16 ) + "F"


def colorGenerator():
    colors = []
    r = 0
    g = 0
    b = 0
    for i in range(0, 255):
        #print("i = ", i)
        if r < 16:
            red = "0" + dec2Hex(r)
        else:
            red = dec2Hex(r)

        if g < 16:
            green = "0" + dec2Hex(g)
        else:
            green = dec2Hex(g)

        if b < 16:
            blue = "0" + dec2Hex(b)
        else:
            blue = dec2Hex(b)

        if i < 16:
            index = "0" + dec2Hex(i)
        else:
            index = dec2Hex(i)

        #print("R: ", r, red)
        #print("G: ", g, green)
        #print("B: ", b, blue)
        print('.x' + index + ' { background-color: #' + red + green + blue + '}')
        colors.append( [i, index, '#' + red + green + blue] )

        if b == 255:
            if g == 252:
                if r == 252:
                    b = 0
                    g = 0
                    r = 0
                else:
                    b = 0
                    g = 0
                    r += 36
            else:
                b = 0
                g += 36
        else:
            b += 85


    colors.append( (dec2Hex(255), "#FFFFFF") )
    return colors

def divGenerator():
    # Add zeros manually to 0-F. And the last element!
    for i in range(0, 255):
        print("<div class=\"color x" + str(dec2Hex(i)) + "\"> #" + str(dec2Hex(i)) + " </div>" )


#colorGenerator()
divGenerator()