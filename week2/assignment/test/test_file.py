import pytest


def func(x):
    return x + 1

def test_answer():
    assert func(3) == 4
    
def add(a,b):
    return a + b

def test_add():
    assert add(3,5) == 8
    
def subtract(a,b):
    return a - b

def test_subtract():
    assert subtract(5,2) == 3
    
def divide(a,b):
    return a / b

def test_divide():
    assert divide(6,2) == 3
    

def f():
    raise SystemExit(1)


def test_mytest():
    with pytest.raises(SystemExit):
        f()
        
class TestClass:
    def test_one(self):
        x = "this"
        assert "h" in x

    def test_two(self):
        x = "hello"
        assert "h" in x
        
