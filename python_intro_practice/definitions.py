
def example():
    print('This is a definition in action')
    
example()

def calculator(num1, num2):
    print(num1 + num2)
    
calculator(5,7)

def conditional(arg):
    if str == type(arg):
        print('This argument is a string')
    elif int == type(arg):
        print('This argument is an integer')
    elif bool == type(arg):
        print('This argument is a boolean')
    else:
        print('That date type has not been accounted for')
        
conditional('hi')
conditional(6)
conditional(True)
conditional([1,2,3])