from fizzBuzz import Kata

numberParsed = 15

def test1():
    assert Kata(numberParsed) == 1

def test2():
    assert Kata(numberParsed) == 2

def testPepsi():
    assert Kata(numberParsed) == 'Pepsi'

def testCoke():
    assert Kata(numberParsed) == 'Coke'

def testPepsiCoke():
    assert Kata(numberParsed) == 'PepsiCoke'