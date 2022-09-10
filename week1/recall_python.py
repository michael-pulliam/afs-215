
class DataTypes:
    def __init__(self):
        self.types = []
    
    def add(self, type):
        self.types.append(type)

    def addNum(self, num):
        self.add(int(num))

    def addStr(self, string):
        self.add(str(string))

    def addDict(self, list):
        self.add({list[i]: list[i + 1] for i in range(0, len(list), 2)})

    def addTuple(self, tupe):
        self.add(tuple(tupe))

    def getList(self):
        return self.types

myList = DataTypes()

myList.addNum('6')
myList.addStr(50)
myList.addDict(['z', 9, 'y', 8, 'x', 7])
myList.addTuple('My Tuple')

print(myList.getList())