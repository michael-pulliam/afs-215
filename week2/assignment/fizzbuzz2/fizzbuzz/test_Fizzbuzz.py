
from fizzbuzz import FizzBuzz

numberParsed = 15

def test1():
    assert FizzBuzz(numberParsed) == 1

def test2():
    assert FizzBuzz(numberParsed) == 2

def testPepsi():
    assert FizzBuzz(numberParsed) == 'Pepsi'

def testCoke():
    assert FizzBuzz(numberParsed) == 'Coke'

def testPepsiCoke():
    assert FizzBuzz(numberParsed) == 'PepsiCoke'