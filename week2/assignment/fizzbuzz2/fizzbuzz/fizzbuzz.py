numParsed = 3
def FizzBuzz(num):
    if num == '1':
        return '1'
    elif num == '2':
        return '2'
    elif int(num) % 3 == 0 and not int(num) % 5 == 0:
        return 'Pepsi'
    elif int(num) % 5 == 0 and not int(num) % 3 == 0:
        return 'Coke'
    elif int(num) % 3 == 0 and int(num) % 5 == 0:
        return 'PepsiCoke'

print(FizzBuzz(numParsed))
