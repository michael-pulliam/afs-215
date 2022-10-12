

class List:
    
    def __init__(self):
        self.my_list = []
        
    def search(self, str):
        try:
            found = self.my_list.index(str)
            return f'{self.my_list[found]} was found at index {found}.'
        except ValueError:
            return 'No matching string found.'
        
    def push(self, str):
        self.my_list.append(str)
        return f'{str} was added.'
    
    def __str__(self):
        return f'Here is your list {self.my_list}'
    
    def evaluate(self):
        return self.my_list
        
        
x = List()       
        
print(x.push("hello world"))
print(x.push(3))
print(x.search("hello world"))
print(x.my_list) 
print(x) 
        
        
        
    # def __str__(self):
    #     for obj in list:
    #         print(obj.list, sep =' ' )



# class geeks: 
#     def __init__(self, name, roll): 
#         self.name = name 
#         self.roll = roll
   
# # creating list       
# list = [] 
  
# # appending instances to list 
# list.append( geeks('Akash', 2) )
# list.append( geeks('Deependra', 40) )
# list.append( geeks('Reaper', 44) )
  
# for obj in list:
#     print( obj.name, obj.roll, sep =' ' )