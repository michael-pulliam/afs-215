
items = []

print(type(items))

items.append(5)
items.append("Tom")
items.append({"Boxes": "yellow"})
items.append([5,6,7])

print('******Before Update*******')
print(items)

print('******After Update*******')
items[0] = 'updated item'

items.append('hello')

print(items)
