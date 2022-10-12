import pytest

from list import List


# def test_class_call():
#     List()
#
# def test_add_item():
#     test = List()
#     assert test.push("hello") == 'hello was added.'
#
# def test_search_item():
#     test = List()
#     test.push('hello')
#     assert test.search("hello") == 'hello was found at index 0.'
#
# def test_evaluate():
#     test = List()
#     test.push('hello')
#     test.push('world')
#     assert test.evaluate() == ['hello', 'world']

@pytest.fixture
def test_list():
    test_list = List()
    test_list.push('hello')
    return test_list

def test_class_call():
    return List()

def test_add_item(test_list):
    assert test_list.push('hello') == 'hello was added.'

def test_evaluate(test_list):
    assert test_list.evaluate() == ['hello']

def test_search_item(test_list):
    assert test_list.search('hello') == 'hello was found at index 0.'


