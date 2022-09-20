
class Magic:
    def __init__(self):
        self.spellList = []
        
    def printList(self):
        print(self.spellList)
        
    def addSpell(self, newSpell):
        self.spellList.append(newSpell)
        
print("x")

x = Magic()

x.printList()

x.addSpell('Fireball')
x.printList()

print('y')
y = Magic()

y.printList()
y.addSpell('FireBolt')
y.printList()